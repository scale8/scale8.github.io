import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import Head from 'next/head';

const TagTestPageContent: FC = () => {
    const [errorTriggered, setErrorTriggered] = useState(false);

    useEffect(() => {
        const forceReload = localStorage.getItem('testS8PageReload') === 'True';

        if (forceReload) {
            localStorage.setItem('testS8PageReload', 'False');
            window.location.reload();
        }

        const loadedSnippet = localStorage.getItem('testS8Snippet') ?? '';

        const throwPageError =
            localStorage.getItem('testS8PageError') === 'True';
        const throwRelativeScriptError =
            localStorage.getItem('testS8RelativeScriptError') === 'True';

        if (throwPageError && !errorTriggered) {
            setTimeout(() => {
                console.log('Tag Tester Page: Throwing Error');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                console.log(window.a.b.c / window.d.e.f);
            }, 2000);
            setErrorTriggered(true);
        }

        if (throwRelativeScriptError) {
            const existingErrorScript =
                document.getElementById('s8ErrorScript');
            if (!existingErrorScript) {
                const script = document.createElement('script');
                script.src = '/errorTriggering.js';
                script.id = 's8ErrorScript';
                script.async = true;
                document.body.appendChild(script);
            }
        }

        const existingScript = document.getElementById('s8Snippet');
        if (!existingScript) {
            const match = loadedSnippet.match(/<script.+src=["'](.+?)["'].+?>/);
            const script = document.createElement('script');
            script.src = match && match.length > 1 ? match[1] : '';
            script.id = 's8Snippet';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [errorTriggered]);

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
