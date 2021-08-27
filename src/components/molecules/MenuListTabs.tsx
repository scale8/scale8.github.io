import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';
import { DocType } from '../../markdown/getMarkdown';
import { MenuList } from './MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { SearchList } from './SearchList';

const useStyles = makeStyles((theme) => ({
    leftNav: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '300px',
        position: 'fixed',
        borderRight: '1px solid #e1e4e8',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mainMenu: {
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
    },
    innerMobileMenu: {
        width: '100%',
        height: 'calc(100% - 62px)',
        overflow: 'auto',
    },
    tab: {
        minWidth: '133px',
        minHeight: '34px',
        fontSize: '0.9em',
    },
    tabs: {
        minHeight: '34px',
    },
}));

export type MenuListTabsProps = {
    currentKey: string;
    docParentKey: string;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
    type: DocType;
    mobile: boolean;
    search: string;
};

const MenuListTabs: FC<MenuListTabsProps> = (props: MenuListTabsProps) => {
    const classes = useStyles();

    const [type, setType] = useState<DocType>(props.type);

    const handleChange = (
        event: ChangeEvent<Record<string, unknown>>,
        newValue: number,
    ) => {
        setType(newValue === 0 ? 'documentation' : 'api-documentation');
    };

    return (
        <>
            <Box
                mb={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Tabs
                    value={type === 'documentation' ? 0 : 1}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    className={classes.tabs}
                    aria-label="documentation selector"
                >
                    <Tab className={classes.tab} label="Scale8 Docs" />
                    <Tab className={classes.tab} label="API Docs" />
                </Tabs>
            </Box>
            <div
                className={
                    props.mobile ? classes.innerMobileMenu : classes.mainMenu
                }
            >
                {props.search === '' ? (
                    <MenuList
                        type={type}
                        currentKey={props.currentKey}
                        setMobileNavigationOpen={props.setMobileNavigationOpen}
                        docParentKey={props.docParentKey}
                    />
                ) : (
                    <SearchList
                        type={type}
                        search={props.search}
                        setMobileNavigationOpen={props.setMobileNavigationOpen}
                    />
                )}
            </div>
        </>
    );
};

export { MenuListTabs };
