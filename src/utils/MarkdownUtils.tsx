/* eslint-disable @next/next/no-img-element */
import {
    FC,
    MutableRefObject,
    ReactElement,
    ReactNode,
    SyntheticEvent,
    useState,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CopyBlock from '../components/atoms/CopyBlock';
import { Alert } from '@material-ui/lab';
import { Box, Fade, Link, Modal } from '@material-ui/core';
import { HomePageAnchorLink } from '../components/atoms/HomePageAnchorLink';
import { getUniqueSlug } from './SlugUtils';

const BlankLinkRenderer: FC<{
    href: string;
    children: ReactNode;
}> = (props: { href: string; children: ReactNode }) => {
    const absoluteCheckRegex = /^https?:\/\//i;
    if (absoluteCheckRegex.test(props.href)) {
        return (
            <a href={props.href} target="_blank" rel="noreferrer">
                {props.children}
            </a>
        );
    }
    return <a href={props.href}>{props.children}</a>;
};

const CodeRenderer: FC<{
    className: string;
    children: string;
}> = (props: { className: string; children: string }) => {
    const className = props.className ?? '';
    const language = className.replace('lang-', '');

    return <CopyBlock text={props.children} language={language} />;
};

const PreRenderer: FC<{
    children: ReactNode;
}> = (props: { children: ReactNode }) => {
    const { children } = props;
    if (
        children !== null &&
        children !== undefined &&
        children.hasOwnProperty('type') &&
        (children as any).type === 'code'
    ) {
        return CodeRenderer((children as any).props);
    }
    return <pre>{children}</pre>;
};

const TableRenderer: FC<{
    children: ReactNode;
}> = (props: { children: ReactNode }) => {
    const { children } = props;

    return (
        <div className="tableWrapper">
            <table>{children}</table>
        </div>
    );
};

const InfoRenderer: FC<{
    children: ReactNode;
}> = (props: { children: ReactNode }) => {
    return (
        <Alert severity="info">
            Note
            {props.children}
        </Alert>
    );
};

const WarningRenderer: FC<{
    children: ReactNode;
}> = (props: { children: ReactNode }) => {
    return (
        <Alert severity="warning">
            Warning
            {props.children}
        </Alert>
    );
};

const ImgRenderer = (
    props: Record<string, unknown>,
): ReactElement<any, any> => {
    const { src, alt, ...imgProps } = props;

    const [open, setOpen] = useState(false);

    const handleClickOpen = (event: SyntheticEvent) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Link href="#" component="a" onClick={handleClickOpen}>
                <img src={src as string} alt={alt as string} {...imgProps} />
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            src={src as string}
                            alt={alt as string}
                            style={{
                                maxWidth: '98%',
                                maxHeight: '98%',
                                display: 'block',
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export const standardMarkdownOptions = {
    overrides: {
        a: {
            component: BlankLinkRenderer,
        },
        pre: {
            component: PreRenderer,
        },
        table: {
            component: TableRenderer,
        },
        Info: InfoRenderer,
        Warn: WarningRenderer,
    },
};

export const buildDocMarkdownOptions = (
    ids: MutableRefObject<{ slug: string; count: number }[]>,
): { overrides: any } => {
    const H2Renderer: FC<{
        children: string[];
    }> = (props: { children: string[] }) => {
        const text = props.children[0];
        const id = getUniqueSlug(text, ids);
        return (
            <h2 id={id}>
                {text}
                <HomePageAnchorLink id={id} />
            </h2>
        );
    };

    const H3Renderer: FC<{
        children: string[];
    }> = (props: { children: string[] }) => {
        const text = props.children[0];
        const id = getUniqueSlug(text, ids);
        return (
            <h3 id={id}>
                {text}
                <HomePageAnchorLink id={id} />
            </h3>
        );
    };

    return {
        overrides: {
            ...standardMarkdownOptions.overrides,
            h2: {
                component: H2Renderer,
            },
            h3: {
                component: H3Renderer,
            },
            img: {
                component: ImgRenderer,
            },
        },
    };
};

export const markdownStyles = makeStyles(() => ({
    outsideLink: {
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 600,
        color: '#9042e7 !important',
    },
    outsideExtra: {
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 600,
        color: '#333333; !important',
    },
    outsideTitle: {
        fontSize: '28px !important',
        color: '#333333 !important',
        margin: 0,
    },
    root: {
        maxWidth: 700,
        color: '#333333',
        '& h1': {
            fontSize: '50px',
            color: '#9042e7',
        },
        '& h2': {
            fontSize: '30px',
            fontWeight: 400,
            '& a': {
                display: 'none',
                marginLeft: '5px',
            },
            '&:hover a': {
                display: 'inline',
            },
        },
        '& h3': {
            fontSize: '24px',
            fontWeight: 400,
            '& a': {
                display: 'none',
                marginLeft: '5px',
            },
            '&:hover a': {
                display: 'inline',
            },
        },
        '& h4': {
            fontSize: '20px',
            fontWeight: 'bold',
        },
        '& p': {
            fontSize: '18px',
        },
        '& hr': {
            border: '1px solid #EAEAEA',
        },
        '& a': {
            color: '#333333',
            textDecorationThickness: '1px',
            textDecorationColor: '#9042e7',
            textDecorationStyle: 'dotted',
            textUnderlinePosition: 'under',
        },
        '& .tableWrapper': {
            width: '100%',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                height: '10px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'hsla(0,0%,53.3%,.1)',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '4px',
                background: 'hsla(0,0%,53.3%,.4)',
            },
            marginBottom: '64px',
        },
        '& table': {
            width: '100%',
            borderSpacing: 0,
            borderCollapse: 'collapse',
            display: 'table',
        },
        '& th': {
            fontWeight: 600,
        },
        '& th, & td': {
            textAlign: 'left',
            verticalAlign: 'center',
            display: 'table-cell',
            padding: '16px',
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
        },
        '& ol': {
            listStyleType: 'lower-alpha',
        },
        '& li': {
            margin: 10,
            fontSize: '18px',
        },
        '& img': {
            maxWidth: '100%',
            display: 'block',
            margin: '0 auto',
        },
        '& footer': {
            paddingTop: 30,
            paddingBottom: 30,
        },
    },
}));

export const markdownKeyToDateString = (key: string): string => {
    const [year, month, date] = key.split('-');
    return `${date}/${month}/${year}`;
};
