import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DocResult, DocType } from '../../markdown/getMarkdown';
import HomePageMobileDrawer from '../molecules/HomePageMobileDrawer';
import { HomeDocsHeader } from '../molecules/HomeDocsHeader';
import { MenuListTabs } from '../molecules/MenuListTabs';

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
}));

type MainMenuProps = {
    type: DocType;
    doc: DocResult;
    mobile: boolean;
};

const MainMenuInner: FC<
    MainMenuProps & {
        setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
    }
> = (
    props: MainMenuProps & {
        setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
    },
) => {
    const { type, doc, mobile, setMobileNavigationOpen } = props;

    const [search, setSearch] = useState(
        localStorage.getItem('docs-search') ?? '',
    );
    const [searchField, setSearchField] = useState(
        localStorage.getItem('docs-search') ?? '',
    );

    useEffect(() => {
        (async () => {
            localStorage.setItem('docs-search', search);
        })();
    }, [search]);

    return (
        <>
            <HomeDocsHeader
                search={search}
                setSearch={setSearch}
                searchField={searchField}
                setSearchField={setSearchField}
                withLogo={!mobile}
            />
            <MenuListTabs
                type={type}
                docParentKey={doc.meta.parentKey}
                currentKey={doc.meta.key}
                setMobileNavigationOpen={setMobileNavigationOpen}
                mobile={mobile}
                search={search}
            />
        </>
    );
};

const MainMenu: FC<MainMenuProps> = (props: MainMenuProps) => {
    const classes = useStyles();

    const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);

    if (props.mobile) {
        return (
            <HomePageMobileDrawer
                mobileNavigationOpen={mobileNavigationOpen}
                setMobileNavigationOpen={setMobileNavigationOpen}
            >
                <MainMenuInner
                    {...props}
                    setMobileNavigationOpen={setMobileNavigationOpen}
                />
            </HomePageMobileDrawer>
        );
    }

    return (
        <div className={classes.leftNav}>
            <MainMenuInner
                {...props}
                setMobileNavigationOpen={setMobileNavigationOpen}
            />
        </div>
    );
};

export default MainMenu;
