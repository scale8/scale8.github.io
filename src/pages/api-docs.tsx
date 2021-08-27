import { FC } from 'react';
import DocsLayout from '../components/templates/DocsLayout';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}, // will be passed to the page component as props
    };
};

const ApiDocs: FC = () => {
    return <DocsLayout slug={undefined} type="api-documentation" />;
};

export default ApiDocs;
