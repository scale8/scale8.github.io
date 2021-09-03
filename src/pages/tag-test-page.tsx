import { FC, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import Head from 'next/head';

const TagTestPageContent: FC = () => {
    useEffect(() => {
        const loadedSnippet = localStorage.getItem('testS8Snippet') ?? '';

        const existingScript = document.getElementById('s8Snippet');
        if (!existingScript) {
            const match = loadedSnippet.match(/<script.+src=["'](.+?)["'].+?>/);
            const script = document.createElement('script');
            script.src = match && match.length > 1 ? match[1] : '';
            script.id = 's8Snippet';
            script.async = true;
            document.body.appendChild(script);
        }
    });

    return (
        <Box p={3}>
            <Typography component="h1" variant="h5">
                Tag Test Page
            </Typography>
        </Box>
    );
};

const TagTestPage: FC = () => {
    return (
        <>
            <Head>
                <title>Scale8 - Tag Test</title>
                <meta name="description" content="Scale8 - Tag Test." />
            </Head>
            <TagTestPageContent />
        </>
    );
};

export default TagTestPage;
