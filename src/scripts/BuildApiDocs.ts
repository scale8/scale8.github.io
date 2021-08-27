import { GraphQLClient } from 'graphql-request/dist';
import * as fs from 'fs';
import * as Path from 'path';
import { TwingEnvironment, TwingLoaderFilesystem } from 'twing';
import rimraf from 'rimraf';

type PageDef = { name: string; page: string };

type Field = {
    name: string;
    description: string;
    args: InputValue[];
    type: TypeRef;
    isDeprecated: boolean;
    deprecationReason?: string;
};

type FullType = {
    kind: string;
    name: string;
    description: string;
    fields: Field[];
    inputFields: InputValue[];
    interfaces: TypeRef[];
    enumValues: {
        name: string;
        description: string;
        isDeprecated: boolean;
        deprecationReason?: string;
    }[];
    possibleTypes: TypeRef[];
};

type InputValue = {
    name: string;
    description: string;
    type: TypeRef;
    defaultValue: any;
};

type TypeRef = {
    kind: string;
    name: string;
    ofType: TypeRef;
};

type IntrospectionQuery = {
    __schema: {
        types: FullType[];
    };
    directives: { name: string; description: string }[];
};

const INTROSPECTION_QUERY = `query IntrospectionQuery {
  __schema {
    types {
      ...FullType
    }
    directives {
      name
      description
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const buildApiDocsFromReflection = async () => {
    const sourceFolder = `${__dirname}/../markdown/api-documentation`;
    const targetFolder = `${__dirname}/../markdown/api-documentation/generated`;
    const twigFolder = `${__dirname}/../markdown/api-documentation/templates`;

    const kebabize = (str: string) => {
        return str
            .split('')
            .map((letter, idx, letters) => {
                const useDash =
                    idx !== 0 &&
                    idx < letters.length - 1 &&
                    letters[idx + 1].toUpperCase() !== letters[idx + 1];
                return letter.toUpperCase() === letter
                    ? `${useDash ? '-' : ''}${letter.toLowerCase()}`
                    : letter;
            })
            .join('');
    };

    const writePage = (
        page: PageDef,
        index: number,
        parentKey: string,
        parentIndex: number,
    ): void => {
        fs.writeFileSync(
            Path.resolve(
                `${targetFolder}/${parentIndex
                    .toString()
                    .padStart(2, '0')}-${index.toString().padStart(2, '0')}-${
                    page.name
                }.md`,
            ),
            page.page,
        );
        fs.writeFileSync(
            Path.resolve(
                `${targetFolder}/${parentIndex
                    .toString()
                    .padStart(2, '0')}-${index.toString().padStart(2, '0')}-${
                    page.name
                }.json`,
            ),
            JSON.stringify(
                {
                    pageTitle: page.name,
                    pageDescription: `Scale8 - Api Documentation - ${parentKey} - ${page.name}.`,
                    key: kebabize(page.name),
                    parentKey,
                },
                null,
                2,
            ),
        );
    };

    const twing = new TwingEnvironment(new TwingLoaderFilesystem(twigFolder), {
        cache: false,
    });

    const renderTwigFromFile = (
        view: string,
        vars: { [k: string]: any },
    ): Promise<string> => {
        return twing.render(view, vars);
    };

    const client = new GraphQLClient('http://localhost:8082/graphql');
    const introspection = (await client.request(
        INTROSPECTION_QUERY,
    )) as IntrospectionQuery;

    const introspectionQueries = introspection.__schema.types.find(
        (_) => _.name === 'Query',
    );

    if (introspectionQueries === undefined) {
        throw new Error('Error fetching introspection queries');
    }

    const introspectionMutations = introspection.__schema.types.find(
        (_) => _.name === 'Mutation',
    );

    if (introspectionMutations === undefined) {
        throw new Error('Error fetching introspection mutations');
    }

    const applyDepthToName = (
        name: string,
        depth: number,
        prefix = 'List',
    ): string => {
        for (let i = 0; i < depth; i++) {
            name = `${prefix}[${name}]`;
        }
        return name;
    };

    const getType = (
        typeRef: TypeRef,
        depth = 0,
        nullable = true,
    ): {
        ref: string | null;
        name: string;
        gqlName: string;
        item: string;
        isInput: boolean;
        nullable: boolean;
    } => {
        if (typeRef.kind === 'NON_NULL') {
            return getType(typeRef.ofType, depth, false);
        } else if (typeRef.kind === 'LIST') {
            return getType(typeRef.ofType, depth + 1, nullable);
        } else {
            return {
                ref:
                    typeRef.kind === 'OBJECT' ||
                    typeRef.kind === 'SCALAR' ||
                    typeRef.kind === 'UNION' ||
                    typeRef.kind === 'ENUM'
                        ? kebabize(typeRef.name)
                        : null,
                name: applyDepthToName(typeRef.name, depth),
                gqlName: applyDepthToName(typeRef.name, depth, ''),
                item: typeRef.name,
                isInput: typeRef.kind === 'INPUT_OBJECT',
                nullable: nullable,
            };
        }
    };

    const getInputsFor = (name: string, ignore: string[] = []): string[] => {
        const input = introspection.__schema.types.find(
            (_) => _.kind === 'INPUT_OBJECT' && _.name === name,
        );
        if (input === undefined) {
            throw new Error(`Introspection Error fetching input: ${name}`);
        }
        const childInputs = input.inputFields
            .map((inputValue): string[] | null => {
                const inputType = getType(inputValue.type);
                if (inputType.isInput) {
                    if (ignore.indexOf(inputType.item) === -1) {
                        //not yet been seen...
                        return getInputsFor(inputType.item, [
                            name,
                            inputType.item,
                            ...ignore,
                        ]).flat();
                    }
                }
                return null;
            })
            .filter((_): _ is string[] => _ !== null);
        return [name, ...childInputs.flat()].filter(
            (v, i, s) => s.indexOf(v) === i,
        );
    };

    const getInput = (name: string) => {
        const input = introspection.__schema.types.find(
            (_) => _.kind === 'INPUT_OBJECT' && _.name === name,
        );
        if (input === undefined) {
            throw new Error(`Introspection Error fetching input: ${name}`);
        }
        return {
            name: input.name,
            description: input.description,
            fields: input.inputFields.map((_) => {
                return {
                    name: _.name,
                    description: _.description,
                    type: getType(_.type),
                    defaultValue:
                        _.defaultValue === null
                            ? null
                            : _.defaultValue.toString(),
                };
            }),
        };
    };

    const fieldToQueryStructure = (field: Field) => {
        const inputs = field.args
            .map((arg): string[] | null => {
                const type = getType(arg.type);
                if (type.isInput) {
                    return getInputsFor(type.item);
                }
                return null;
            })
            .filter((_): _ is string[] => _ !== null)
            .flat()
            .filter((v, i, s) => s.indexOf(v) === i)
            .map((_) => getInput(_));

        return {
            name: field.name,
            presName: field.name
                .replace(/^([a-z])/, (_) => _.toUpperCase())
                .replace(/([a-z])([A-Z])/g, '$1 $2'),
            description: field.description
                .replace(/(@[a-z]+=[a-z]+)/gi, '')
                .trim(),
            combinedArgs: field.args
                .map((arg) => {
                    const type = getType(arg.type);
                    return `${arg.name}: ${type.gqlName}${
                        type.nullable ? '' : '!'
                    }`;
                })
                .join(', '),
            args: field.args.map((arg) => {
                return {
                    name: arg.name,
                    description: arg.description,
                    type: getType(arg.type),
                    defaultValue:
                        arg.defaultValue === null
                            ? null
                            : arg.defaultValue.toString(),
                };
            }),
            inputs: inputs,
            return: getType(field.type),
        };
    };

    const modelPages = await Promise.all(
        introspection.__schema.types
            .filter(
                (type) =>
                    type.kind === 'OBJECT' &&
                    type.description.match(/@model/gi) !== null,
            )
            .map((type) => {
                /*
                    Find queries and mutations bound to this model, so @bound=model
                 */
                const queries = introspectionQueries.fields
                    .filter(
                        (_) =>
                            _.description.match(
                                `@bound=${type.name}(?![A-Z]{1})`,
                            ) !== null,
                    )
                    .map((_) => fieldToQueryStructure(_));

                const mutations = introspectionMutations.fields
                    .filter(
                        (_) =>
                            _.description.match(
                                `@bound=${type.name}(?![A-Z]{1})`,
                            ) !== null,
                    )
                    .map((_) => fieldToQueryStructure(_));

                return {
                    name: type.name,
                    description: type.description
                        .replace(/(@[a-z]+)/gi, '')
                        .trim(),
                    fields: type.fields.map((field) => {
                        return {
                            name: field.name,
                            description: field.description
                                .replace(/@[a-zA-Z]+/g, '')
                                .trim(),
                            type: getType(field.type),
                        };
                    }),
                    queries: queries,
                    mutations: mutations,
                };
            })
            .map(async (_) => {
                return {
                    name: _.name,
                    page: await renderTwigFromFile('ModelPage.twig', {
                        model: _,
                    }),
                };
            }),
    );

    const typePages = await Promise.all(
        introspection.__schema.types
            .filter(
                (type) =>
                    type.kind === 'OBJECT' &&
                    type.description.match(/@type/gi) !== null,
            )
            .map((type) => {
                return {
                    name: type.name,
                    description: type.description
                        .replace(/(@[a-z]+)/gi, '')
                        .trim(),
                    fields: type.fields.map((field) => {
                        return {
                            name: field.name,
                            description: field.description
                                .replace(/@[a-zA-Z]+/g, '')
                                .trim(),
                            type: getType(field.type),
                        };
                    }),
                };
            })
            .map(async (_) => {
                return {
                    name: _.name,
                    page: await renderTwigFromFile('TypePage.twig', {
                        type: _,
                    }),
                };
            }),
    );

    const unionPages = await Promise.all(
        introspection.__schema.types
            .filter(
                (type) =>
                    type.kind === 'UNION' &&
                    type.description.match(/@union/gi) !== null,
            )
            .map((type) => {
                return {
                    name: type.name,
                    description: type.description
                        .replace(/(@[a-z]+)/gi, '')
                        .trim(),
                    possibleTypes: type.possibleTypes.map((_) => getType(_)),
                };
            })
            .map(async (_) => {
                return {
                    name: _.name,
                    page: await renderTwigFromFile('UnionPage.twig', {
                        union: _,
                    }),
                };
            }),
    );

    const scalarPages = await Promise.all(
        introspection.__schema.types
            .filter((type) => type.kind === 'SCALAR' && type.name != 'Upload')
            .map((type) => {
                return {
                    name: type.name,
                    description: type.description,
                };
            })
            .map(async (_) => {
                return {
                    name: _.name,
                    page: await renderTwigFromFile('ScalarPage.twig', {
                        scalar: _,
                    }),
                };
            }),
    );

    const enumPages = await Promise.all(
        introspection.__schema.types
            .filter(
                (type) =>
                    type.kind === 'ENUM' &&
                    !type.name.startsWith('_') &&
                    type.name != 'CacheControlScope',
            )
            .map((type) => {
                return {
                    name: type.name,
                    description: type.description,
                    values: type.enumValues.map((_) => {
                        return {
                            name: _.name,
                            description: _.description,
                        };
                    }),
                };
            })
            .map(async (_) => {
                return {
                    name: _.name,
                    page: await renderTwigFromFile('EnumPage.twig', {
                        enum: _,
                    }),
                };
            }),
    );

    const queries = introspectionQueries.fields
        .filter((_) => _.description.match(/@(bound|hidden)/gi) === null)
        .map((_) => fieldToQueryStructure(_));

    const queriesPage = {
        name: 'Queries',
        page: await renderTwigFromFile('QueriesPage.twig', {
            type: 'Query',
            queries: queries,
        }),
    };

    const mutations = introspectionMutations.fields
        .filter((_) => _.description.match(/@(bound|hidden)/gi) === null)
        .map((_) => fieldToQueryStructure(_));

    const mutationsPage = {
        name: 'Mutations',
        page: await renderTwigFromFile('QueriesPage.twig', {
            type: 'Mutation',
            queries: mutations,
        }),
    };

    const pageSort = (a: PageDef, b: PageDef) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    };

    //Reset target directory
    rimraf.sync(targetFolder);
    fs.mkdirSync(targetFolder, { recursive: true });

    writePage(
        {
            name: 'Overview',
            page: fs.readFileSync(`${sourceFolder}/Overview.md`, 'utf8'),
        },
        1,
        'Getting Started',
        1,
    );

    writePage(
        {
            name: 'APIToken',
            page: fs.readFileSync(`${sourceFolder}/APIToken.md`, 'utf8'),
        },
        1,
        'Authentication',
        2,
    );

    writePage(queriesPage, 1, 'Query Root', 3);
    writePage(mutationsPage, 2, 'Query Root', 3);

    modelPages.sort(pageSort).forEach((page, index) => {
        writePage(page, index, 'API Models', 4);
    });

    scalarPages.sort(pageSort).forEach((page, index) => {
        writePage(page, index, 'Scalars', 5);
    });

    enumPages.sort(pageSort).forEach((page, index) => {
        writePage(page, index, 'Enums', 6);
    });

    typePages.sort(pageSort).forEach((page, index) => {
        writePage(page, index, 'Types', 7);
    });

    unionPages.sort(pageSort).forEach((page, index) => {
        writePage(page, index, 'Unions', 8);
    });

    console.log('Api docs generated using GQL reflection...');
};
