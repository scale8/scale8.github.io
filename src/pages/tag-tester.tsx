import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from '@material-ui/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TagTesterContent: FC = () => {
    const router = useRouter();
    const [edit, setEdit] = useState(true);
    const [snippet, setSnippet] = useState('');
    const [throwPageError, setThrowPageError] = useState(false);
    const [throwRelativeScriptError, setThrowRelativeScriptError] =
        useState(false);

    useEffect(() => {
        setSnippet(localStorage.getItem('testS8Snippet') ?? '');
        setThrowPageError(localStorage.getItem('testS8PageError') === 'True');
        setThrowRelativeScriptError(
            localStorage.getItem('testS8RelativeScriptError') === 'True',
        );
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSnippet(event.target.value);
    };

    const handlePageErrorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setThrowPageError(event.target.checked);
    };

    const handleRelativeScriptErrorChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setThrowRelativeScriptError(event.target.checked);
    };

    const handleSubmit = (event?: FormEvent<HTMLFormElement>): void => {
        if (event) {
            event.preventDefault();
        }

        localStorage.setItem('testS8Snippet', snippet);
        localStorage.setItem(
            'testS8PageError',
            throwPageError ? 'True' : 'False',
        );
        localStorage.setItem(
            'testS8RelativeScriptError',
            throwRelativeScriptError ? 'True' : 'False',
        );
        localStorage.setItem('testS8PageReload', 'True');
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={throwPageError}
                                onChange={handlePageErrorChange}
                                name="throwPageError"
                                color="primary"
                            />
                        }
                        label="Trigger Page Error"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={throwRelativeScriptError}
                                onChange={handleRelativeScriptErrorChange}
                                name="throwRelativeScriptError"
                                color="primary"
                            />
                        }
                        label="Trigger Relative Script Error"
                    />
                    <Box mt={3} />
                    <Button type="submit" variant="contained" color="primary">
                        Load in test page
                    </Button>
                </form>
            </Box>
        );
    }

    router.push('/tag-test-page').then();

    return <div />;
};

const TagTester: FC = () => {
    return (
        <>
            <Head>
                <title>Scale8 - Tag Test</title>
                <meta name="description" content="Scale8 - Tag Test." />
            </Head>
            <TagTesterContent />
        </>
    );
};

export default TagTester;
