import {
    CoreElement,
    CoreElementInput,
    MarkDownDataConfig,
} from './ConfigTypes';
import * as fs from 'fs';
import * as path from 'path';
import request, { gql } from 'graphql-request';
import { DocHeader } from '../markdown/getMarkdown';
import marked from 'marked';
import rimraf from 'rimraf';
import { buildApiDocsFromReflection } from './BuildApiDocs';

const mdFolder = `${__dirname}/../markdown`;
const targetFolder = `${__dirname}/../markdown/generated`;
const docsFolder = `${mdFolder}/documentation`;
const apiDocsFolder = `${mdFolder}/api-documentation/generated`;

const buildInputsMarkdown = (inputs: CoreElementInput[]) => {
    const inputsHeader =
        inputs.length > 0
            ? `

### Configuration Properties

| Property&nbsp;Name | Property&nbsp;Description | Var&nbsp;Type | Default&nbsp;Value | Is&nbsp;Required |
|---|---|---|---|---|

    `.trim()
            : '';

    const inputsTableRow = inputs
        .map((item) => {
            return `

| ${item.name} | ${item.description} | ${item.var_type} | ${item.default_value} | ${item.is_required} |

        `.trim();
        })
        .join('\n');

    return `${inputsHeader}\n${inputsTableRow}`;
};

const buildSectionMarkdown = (section: CoreElement[]) => {
    return section
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((item) => {
            return `

## ${item.name}

${item.description}

${buildInputsMarkdown(item.inputs)}

        `.trim();
        })
        .join('\n\n');
};

const addGeneratedMarkdown = (rawMd: string, data: MarkDownDataConfig) => {
    return rawMd
        .replace(
            '<CoreActions />',
            buildSectionMarkdown(data.config.core_actions),
        )
        .replace(
            '<CoreEvents />',
            buildSectionMarkdown(data.config.core_events),
        )
        .replace(
            '<CoreDataContainers />',
            buildSectionMarkdown(data.config.core_data_containers),
        );
};

const generateMarkdownFile = (
    file: string,
    sourcePath: string,
    dirName: string,
    key: string,
    data: MarkDownDataConfig,
) => {
    const generatedMdObject: { md?: string } = {};
    const rawMd = fs.readFileSync(`${sourcePath}/${file}`, 'utf8');
    generatedMdObject['md'] = addGeneratedMarkdown(rawMd, data);
    fs.mkdirSync(`${targetFolder}/${dirName}`, { recursive: true });
    fs.writeFileSync(
        `${targetFolder}/${dirName}/${key}.json`,
        JSON.stringify(generatedMdObject, null, 2),
    );
    return generatedMdObject['md'];
};

const buildMetaAndKey = (file: string, sourcePath: string) => {
    const fileBaseName = path.basename(file, '.md');
    const metaFilePath = `${sourcePath}/${fileBaseName}.json`;

    if (fs.existsSync(metaFilePath)) {
        const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
        return {
            meta,
            key: meta.hasOwnProperty('key') ? meta.key : `${fileBaseName}`,
        };
    }
    return {
        meta: null,
        key: null,
    };
};

const buildHeaders = (generatedMarkdown: string) => {
    const headers: DocHeader[] = [];
    // noinspection JSUnusedGlobalSymbols
    const renderer = {
        heading(text: string, level: number): string {
            if (level === 2) {
                headers.push({
                    text,
                    sub: [],
                });
            }
            if (level === 3) {
                if (headers.length > 0) {
                    headers[headers.length - 1].sub.push({
                        text,
                    });
                }
            }
            return '';
        },
    };
    marked.use({ renderer });
    marked(generatedMarkdown);
    return headers;
};

const processDirectory = (
    sourcePath: string,
    dirName: string,
    data: MarkDownDataConfig,
) => {
    const { mdObject } = fs.readdirSync(sourcePath).reduce(
        (
            prev: {
                order: number;
                currentKeys: string[];
                mdObject: Record<string, any>;
            },
            file: string,
        ) => {
            const { order, currentKeys, mdObject } = prev;

            if (path.extname(file) === '.md') {
                const { meta, key } = buildMetaAndKey(file, sourcePath);
                if (meta !== null) {
                    // generate a json per markdown
                    const generatedMarkdown = generateMarkdownFile(
                        file,
                        sourcePath,
                        dirName,
                        key,
                        data,
                    );

                    return {
                        order: order + 1,
                        currentKeys: [...currentKeys, key],
                        mdObject: {
                            ...mdObject,
                            [key]: {
                                headers: buildHeaders(generatedMarkdown),
                                md: '',
                                meta: {
                                    ...meta,
                                    key: key,
                                    fsOrder: order,
                                },
                            },
                        },
                    };
                }
            }
            return { order, currentKeys, mdObject };
        },
        { order: 0, currentKeys: [], mdObject: {} },
    );

    fs.writeFileSync(
        `${targetFolder}/${dirName}.json`,
        JSON.stringify(mdObject, null, 2),
    );
    console.info(`${dirName}.json created correctly.`);
};

const query = gql`
    query {
        config {
            core_actions {
                name
                description
                inputs {
                    name
                    description
                    var_type
                    default_value
                    is_required
                }
            }
            core_events {
                name
                description
                inputs {
                    name
                    description
                    var_type
                    default_value
                    is_required
                }
            }
            core_data_containers {
                name
                description
                inputs {
                    name
                    description
                    var_type
                    default_value
                    is_required
                }
            }
        }
    }
`;

(async () => {
    console.log('Fetching data for API Documentation...');

    await buildApiDocsFromReflection();

    console.info('Fetching API data for Core Elements documentation....');

    try {
        const data: MarkDownDataConfig = await request(
            'http://localhost:8082/graphql',
            query,
        );

        console.info('Scanning markdown folder....');

        //Reset target directory
        rimraf.sync(targetFolder);
        fs.mkdirSync(targetFolder, { recursive: true });

        processDirectory(apiDocsFolder, 'api-documentation', data);
        processDirectory(docsFolder, 'documentation', data);
    } catch (err) {
        if (err) throw err;
    }

    console.log('Documentation has been generated...');

    process.exit(0);
})();
