import { FC } from 'react';
import DocsLayout from '../components/templates/DocsLayout';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {}, // will be passed to the page component as props
    };
};

const Docs: FC = () => {
    return <DocsLayout slug={undefined} type="documentation" />;
};

export default Docs;
