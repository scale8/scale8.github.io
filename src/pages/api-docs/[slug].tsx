// noinspection JSUnusedGlobalSymbols

import { FC } from 'react';
import { useRouter } from 'next/router';
import DocsLayout from '../../components/templates/DocsLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getDocKeysAsParams } from '../../markdown/getMarkdown';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getDocKeysAsParams('api-documentation');
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}, // will be passed to the page component as props
    };
};

const ApiDocsEntry: FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <DocsLayout slug={slug as string} type="api-documentation" />;
};

export default ApiDocsEntry;
