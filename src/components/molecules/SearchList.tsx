import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import {
    DocResult,
    DocType,
    getDocKeysForMenu,
} from '../../markdown/getMarkdown';
import { stripHtmlTags } from '../../utils/TextUtils';
import { getUniqueSlug } from '../../utils/SlugUtils';
import { Alert } from '@material-ui/lab';
import Link from '../atoms/Next/Link';

const useStyles = makeStyles((theme) => ({
    listItem: {
        direction: 'ltr',
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const SearchList: FC<{
    type: DocType;
    search: string;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
}> = (props: {
    type: DocType;
    search: string;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const classes = useStyles();

    const docKeys = getDocKeysForMenu(props.type);
    const ids = useRef<{ slug: string; count: number }[]>([]);
    const list: { link: string; text: string }[] = [];

    docKeys.forEach((_) => {
        _.docs.forEach((doc: DocResult) => {
            if (
                doc.meta.pageTitle
                    .toLowerCase()
                    .includes(props.search.toLowerCase())
            ) {
                list.push({
                    link:
                        props.type === 'api-documentation'
                            ? `/api-docs/${doc.meta.key}`
                            : `/docs/${doc.meta.key}`,
                    text: stripHtmlTags(doc.meta.pageTitle),
                });
            }
            ids.current = [];
            doc.headers.forEach((header) => {
                const slug = getUniqueSlug(header.text, ids);
                if (
                    header.text
                        .toLowerCase()
                        .includes(props.search.toLowerCase())
                ) {
                    list.push({
                        link:
                            props.type === 'api-documentation'
                                ? `/api-docs/${doc.meta.key}#${slug}`
                                : `/docs/${doc.meta.key}#${slug}`,
                        text: `${stripHtmlTags(
                            doc.meta.pageTitle,
                        )} # ${stripHtmlTags(header.text)}`,
                    });
                }
                // Skip sub for now
                // header.sub.forEach((sub) => {
                //     const subSlug = getUniqueSlug(sub.text, ids);
                //     if (
                //         sub.text
                //             .toLowerCase()
                //             .includes(props.search.toLowerCase())
                //     ) {
                //         list.push({
                //             link: `/docs/${doc.meta.key}#${subSlug}`,
                //             text: `${stripHtmlTags(
                //                 doc.meta.pageTitle,
                //             )} # ${stripHtmlTags(sub.text)}`,
                //         });
                //     }
                // });
            });
        });
    });

    return (
        <>
            {list.length === 0 && (
                <Alert severity="info">Cannot find any result.</Alert>
            )}
            {list.map((_, index) => (
                <ListItem
                    button
                    key={index}
                    component={Link}
                    href={_.link}
                    onClick={() => props.setMobileNavigationOpen(false)}
                >
                    <ListItemText
                        classes={{ primary: classes.listItem }}
                        primary={_.text}
                    />
                </ListItem>
            ))}
        </>
    );
};

export { SearchList };
