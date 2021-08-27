import {
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { DocType, getDocKeysForMenu } from '../../markdown/getMarkdown';
import Link from '../atoms/Next/Link';

const useStyles = makeStyles((theme) => ({
    selected: {
        color: '#9042e7',
        '& span': {
            fontWeight: 'bold',
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
        paddingTop: 0,
        paddingBottom: 0,
    },
    nestedListItem: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: theme.typography.fontWeightRegular,
    },
    listItem: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

type MenuListProps = {
    currentKey: string;
    docParentKey: string;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
    type: DocType;
};

const MenuList: FC<MenuListProps> = (props: MenuListProps) => {
    const classes = useStyles();

    const { currentKey, type } = props;

    const docKeys = useMemo(() => getDocKeysForMenu(type), [type]);

    const [open, setOpen] = useState<number[]>([0]);

    useEffect(() => {
        setOpen((o) => [
            ...o,
            docKeys.findIndex(
                (_) =>
                    _.docs.find((d) => d.meta.key === currentKey) !== undefined,
            ),
        ]);
    }, [docKeys, currentKey]);

    const handleMenuParentClick = (index: number) => {
        const buildNewOpenArray = () => {
            if (open.includes(index)) {
                return open.filter((_) => _ !== index);
            }

            return [...open, index];
        };
        setOpen(buildNewOpenArray);
    };

    return (
        <>
            {docKeys.map((_, index) => (
                <div key={index}>
                    <ListItem
                        button
                        onClick={() => handleMenuParentClick(index)}
                    >
                        <ListItemText
                            classes={{
                                primary: clsx(
                                    classes.listItem,
                                    _.parentKey === props.docParentKey &&
                                        classes.selected,
                                ),
                            }}
                            primary={_.parentKey}
                        />
                        {open.includes(index) ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                        in={open.includes(index)}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            {_.docs.map((doc, subIdx) => (
                                <ListItem
                                    key={subIdx}
                                    button
                                    className={clsx(
                                        classes.nested,
                                        props.currentKey === doc.meta.key &&
                                            classes.selected,
                                    )}
                                    component={Link}
                                    href={
                                        props.type === 'api-documentation'
                                            ? `/api-docs/${doc.meta.key}`
                                            : `/docs/${doc.meta.key}`
                                    }
                                    onClick={() =>
                                        props.setMobileNavigationOpen(false)
                                    }
                                >
                                    <ListItemText
                                        classes={{
                                            primary: classes.nestedListItem,
                                        }}
                                        primary={doc.meta.pageTitle}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </>
    );
};

export { MenuList };
