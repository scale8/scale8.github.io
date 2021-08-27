// noinspection JSUnusedGlobalSymbols

import { FC } from 'react';
import { useRouter } from 'next/router';
import DocsLayout from '../../components/templates/DocsLayout';

const DocsEntry: FC = () => {
    const router = useRouter();
    const { slug } = router.query;

    return <DocsLayout slug={slug as string} type="documentation" />;
};

export default DocsEntry;
