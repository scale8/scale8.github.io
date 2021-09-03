import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import Navigate from '../../components/atoms/Next/Navigate';
import Head from 'next/head';
import TestersSection from '../../containers/global/TestersSection';
import { toTagTestPage } from '../../utils/NavigationPaths';

const TagTesterContent: FC = () => {
    const [edit, setEdit] = useState(true);
    const [snippet, setSnippet] = useState('');

    useEffect(() => {
        setSnippet(localStorage.getItem('testS8Snippet') ?? '');
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSnippet(event.target.value);
    };

    const handleSubmit = (event?: FormEvent<HTMLFormElement>): void => {
        if (event) {
            event.preventDefault();
        }

        localStorage.setItem('testS8Snippet', snippet);
        setEdit(false);
    };

    if (edit) {
        return (
            <Box p={3}>
                <Typography component="h1" variant="h5">
                    Test your tags code
                </Typography>
                <Box mt={3} />
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Environment Code Snippet"
                        multiline
                        value={snippet}
                        onChange={handleChange}
                        minRows={6}
                        variant="outlined"
                        fullWidth
                    />
                    <Box mt={3} />
                    <Button type="submit" variant="contained" color="primary">
                        Load in test page
                    </Button>
                </form>
            </Box>
        );
    }

    return <Navigate to={toTagTestPage} />;
};

const TagTester: FC = () => {
    return (
        <>
            <Head>
                <title>Scale8 - Tag Test</title>
                <meta name="description" content="Scale8 - Tag Test." />
            </Head>
            <TestersSection>
                <TagTesterContent />
            </TestersSection>
        </>
    );
};

export default TagTester;
