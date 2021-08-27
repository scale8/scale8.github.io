// noinspection JSUnusedGlobalSymbols

import { FC } from 'react';
import { useRouter } from 'next/router';
import DocsLayout from '../../components/templates/DocsLayout';

const ApiDocsEntry: FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <DocsLayout slug={slug as string} type="api-documentation" />;
};

export default ApiDocsEntry;
