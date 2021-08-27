// noinspection JSUnusedGlobalSymbols

import { FC, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, List } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import clsx from 'clsx';
import { useHashScroll } from '../../hooks/useHashScroll';
import {
    buildDocMarkdownOptions,
    markdownStyles,
} from '../../utils/MarkdownUtils';
import { DocResult, DocType, getDocEntry } from '../../markdown/getMarkdown';
import Head from 'next/head';
import { HomePageCopyright } from '../atoms/HomePageCopyright';
import { HomeDocsChapterList } from '../molecules/HomeDocsChapterList';
import MainMenu from '../organisms/MainMenu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '320px',
        background: '#ffffff',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            minHeight: '100vh',
        },
    },
    rightNav: {
        direction: 'rtl',
        paddingTop: 50,
        height: '100%',
        width: '300px',
        position: 'fixed',
        right: 0,
        borderLeft: '1px solid #e1e4e8',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '4px',
        },
        '&:hover::-webkit-scrollbar-track': {
            background: 'hsla(0,0%,53.3%,.1)',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
            borderRadius: '4px',
        },
        '&:hover::-webkit-scrollbar-thumb': {
            background: 'hsla(0,0%,53.3%,.4)',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    emptyRightNav: {
        borderLeft: 0,
    },
    main: {
        margin: `0 ${300 + theme.spacing(4)}px`,
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(4),
        },
    },
    mainContainer: {
        maxWidth: 900,
    },
    markdownContainer: {
        minHeight: 'calc(100vh - 170px)',
    },
}));

const DocsLayout: FC<{ slug: string | undefined; type: DocType }> = (props: {
    slug: string | undefined;
    type: DocType;
}) => {
    useHashScroll();
    const classes = useStyles();
    const mdClasses = markdownStyles();
    const { slug, type } = props;

    const [doc, setDoc] = useState<DocResult | null>(null);

    const ids = useRef<{ slug: string; count: number }[]>([]);
    ids.current = [];

    useEffect(() => {
        (async () => {
            setDoc(await getDocEntry(slug as string, type));
        })();
    }, [slug, type]);

    if (doc === null) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Scale8 Docs - {doc.meta.pageTitle}</title>
                <meta name="description" content={doc.meta.pageDescription} />
            </Head>
            <MainMenu type={type} doc={doc} mobile={true} />
            <div className={classes.root}>
                <MainMenu type={type} doc={doc} mobile={false} />

                <div className={classes.main}>
                    <Container
                        className={clsx(mdClasses.root, classes.mainContainer)}
                    >
                        <div className={classes.markdownContainer}>
                            <Markdown options={buildDocMarkdownOptions(ids)}>
                                {doc.md}
                            </Markdown>
                        </div>
                        <Box height={64} />
                        <HomePageCopyright dark />
                    </Container>
                </div>

                <div
                    className={clsx(
                        classes.rightNav,
                        doc.headers.length === 0 && classes.emptyRightNav,
                    )}
                >
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <HomeDocsChapterList doc={doc} />
                    </List>
                </div>
            </div>
        </>
    );
};

export default DocsLayout;
