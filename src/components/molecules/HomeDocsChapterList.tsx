import { FC, useRef, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DocResult } from '../../markdown/getMarkdown';
import { ListItem, ListItemText } from '@material-ui/core';
import Link from '../atoms/Next/Link';
import { getUniqueSlug } from '../../utils/SlugUtils';
import clsx from 'clsx';
import { stripHtmlTags } from '../../utils/TextUtils';

const useStyles = makeStyles((theme) => ({
    listItem: {
        direction: 'ltr',
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
    nested: {
        fontSize: theme.typography.pxToRem(16),
        paddingLeft: theme.spacing(2),
    },
    nestedButton: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));

const HomeDocsChapterList: FC<{ doc: DocResult }> = (props: {
    doc: DocResult;
}) => {
    const classes = useStyles();

    const ids = useRef<{ slug: string; count: number }[]>([]);
    ids.current = [];

    return (
        <>
            {props.doc.headers.map((_, index) => (
                <Fragment key={index}>
                    <ListItem
                        button
                        component={Link}
                        href={`#${getUniqueSlug(_.text, ids)}`}
                    >
                        <ListItemText
                            classes={{ primary: classes.listItem }}
                            primary={stripHtmlTags(_.text)}
                        />
                    </ListItem>
                    {_.sub.map((subEntry, subIdx) => (
                        <ListItem
                            key={subIdx}
                            button
                            component={Link}
                            href={`#${getUniqueSlug(subEntry.text, ids)}`}
                            className={classes.nestedButton}
                        >
                            <ListItemText
                                classes={{
                                    primary: clsx(
                                        classes.listItem,
                                        classes.nested,
                                    ),
                                }}
                                primary={stripHtmlTags(subEntry.text)}
                            />
                        </ListItem>
                    ))}
                </Fragment>
            ))}
        </>
    );
};

export { HomeDocsChapterList };
