import scale8Docs from './generated/documentation.json';
import apiDocs from './generated/api-documentation.json';

type MarkdownMeta = {
    key: string;
    pageTitle: string;
    pageDescription: string;
};

export type DocType = 'documentation' | 'api-documentation';

type DocMeta = MarkdownMeta & {
    parentKey: string;
    fsOrder: number;
};

export type DocResult = {
    md: string;
    meta: DocMeta;
    headers: DocHeader[];
};

export type DocHeader = {
    text: string;
    sub: {
        text: string;
    }[];
};

export const getDocEntry = async (
    docKey: string | undefined,
    type: DocType,
): Promise<DocResult> => {
    const docs = type === 'api-documentation' ? apiDocs : scale8Docs;
    const key =
        docKey === undefined
            ? getDocKeysForMenu(type)[0].docs[0].meta.key
            : docKey;

    if (docs.hasOwnProperty(key)) {
        const docJson: DocResult = docs[key as keyof typeof docs];

        const mdObject: { md: string } = await import(
            `./generated/${type}/${key}.json`
        );

        return {
            md: mdObject.md,
            meta: docJson.meta,
            headers: docJson.headers,
        };
    }
    return {
        md: '',
        meta: {
            pageTitle: 'Data not found',
            pageDescription: '',
            key,
            parentKey: '',
            fsOrder: 0,
        },
        headers: [],
    };
};

export const getDocKeysAsParams = (type: DocType): any[] => {
    const docs = type === 'api-documentation' ? apiDocs : scale8Docs;
    return Object.keys(docs).map((slug) => {
        return {
            params: { slug },
        };
    });
};

export const getDocKeysForMenu = (
    type: DocType,
): {
    parentKey: string;
    docs: DocResult[];
}[] => {
    const docs = type === 'api-documentation' ? apiDocs : scale8Docs;
    return Object.values(docs)
        .sort((a: DocResult, b: DocResult) =>
            a.meta.fsOrder < b.meta.fsOrder
                ? -1
                : b.meta.fsOrder < a.meta.fsOrder
                ? 1
                : 0,
        )
        .reduce(
            (
                accumulator: {
                    parentKey: string;
                    docs: DocResult[];
                }[],
                currentValue,
            ) => {
                const lastItem = accumulator[accumulator.length - 1];
                if (lastItem?.parentKey === currentValue.meta.parentKey) {
                    return [
                        ...accumulator.slice(0, -1),
                        {
                            parentKey: lastItem.parentKey,
                            docs: [...lastItem.docs, currentValue],
                        },
                    ];
                }
                return [
                    ...accumulator,
                    {
                        parentKey: currentValue.meta.parentKey,
                        docs: [currentValue],
                    },
                ];
            },
            [],
        );
};
