import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, InputBase, Paper } from '@material-ui/core';
import Logo from '../atoms/Logo';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { autocompleteOff } from '../../utils/BrowserUtils';
import Link from '../atoms/Next/Link';

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        height: '56px',
        '& a': {
            color: 'rgba(0, 0, 0, 0.6)',
            marginLeft: '15px',
            fontWeight: 600,
            fontSize: '20px',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.4)',
            },
        },
    },
    search: {
        border: '1px solid #e1e4e8',
        padding: '2px 4px',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

type HomeDocsHeaderProps = {
    withLogo?: boolean;
    setSearch: Dispatch<SetStateAction<string>>;
    searchField: string;
    setSearchField: Dispatch<SetStateAction<string>>;
    search: string;
};

const HomeDocsHeader: FC<HomeDocsHeaderProps> = (
    props: HomeDocsHeaderProps,
) => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {props.withLogo && (
                <Box height={100} display="flex" alignItems="center">
                    <div className={classes.logo}>
                        <Logo width={30} />
                        <Link href="https://scale8.com/">Scale8</Link>
                    </div>
                </Box>
            )}
            <Box zIndex={5} display="flex" width="100%" pb={2} px={2}>
                <Paper
                    component="form"
                    className={classes.search}
                    elevation={0}
                    onSubmit={(event?: FormEvent<any>) => {
                        if (event) {
                            event.preventDefault();
                            props.setSearch(
                                (event.target as any).elements.search.value,
                            );
                        }
                    }}
                >
                    <InputBase
                        name="search"
                        className={classes.input}
                        placeholder="Search"
                        value={props.searchField}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            props.setSearch('');
                            props.setSearchField(e.target.value);
                        }}
                        inputProps={{
                            'aria-label': 'search',
                            autoComplete: autocompleteOff,
                        }}
                    />
                    {props.search === '' ? (
                        <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            type="button"
                            className={classes.iconButton}
                            aria-label="search"
                            onClick={() => {
                                props.setSearch('');
                                props.setSearchField('');
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </Paper>
            </Box>
        </Box>
    );
};

export { HomeDocsHeader };
