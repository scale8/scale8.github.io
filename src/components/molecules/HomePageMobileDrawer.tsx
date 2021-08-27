import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Slide, useMediaQuery } from '@material-ui/core';
import HomeNavigationContainer from '../atoms/HomeNavigationContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    spacer: {
        height: '100%',
        flexGrow: 1,
    },
    navMenuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
        width: '25px',
        height: '18px',
        position: 'absolute',
        right: theme.spacing(2),
        zIndex: theme.zIndex.drawer + 2,
        transform: 'rotate(0deg)',
        transition: '.5s ease-in-out',
        cursor: 'pointer',
        '& span': {
            display: 'block',
            position: 'absolute',
            borderRadius: '4px',
            height: '3px',
            width: '100%',
            background: theme.palette.primary.main,
            opacity: '1',
            left: '0',
            transform: 'rotate(0deg)',
            transition: '.25s ease-in-out',
            '&:nth-child(1)': {
                top: '0px',
            },
            '&:nth-child(2)': {
                top: '7px',
            },
            '&:nth-child(3)': {
                top: '14px',
            },
        },
        '&.open span': {
            '&:nth-child(1)': {
                top: '7px',
                transform: 'rotate(135deg)',
            },
            '&:nth-child(2)': {
                opacity: '0',
                left: '-25px',
            },
            '&:nth-child(3)': {
                top: '7px',
                transform: 'rotate(-135deg)',
            },
        },
    },
    mobileMenu: {
        paddingTop: '100px',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: '#ffffff',
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const HomePageMobileDrawer: FC<{
    children: ReactNode;
    mobileNavigationOpen: boolean;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
}> = (props: {
    children: ReactNode;
    mobileNavigationOpen: boolean;
    setMobileNavigationOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const classes = useStyles();
    const { children, mobileNavigationOpen, setMobileNavigationOpen } = props;
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    if (mobileNavigationOpen && isSmall) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <div className={classes.root}>
            <HomeNavigationContainer>
                <div className={classes.spacer} />
                <div
                    className={clsx(
                        classes.navMenuIcon,
                        mobileNavigationOpen && 'open',
                    )}
                    onClick={() => {
                        setMobileNavigationOpen(!mobileNavigationOpen);
                    }}
                >
                    <span />
                    <span />
                    <span />
                </div>
            </HomeNavigationContainer>

            <Slide
                direction="left"
                in={mobileNavigationOpen}
                mountOnEnter
                unmountOnExit
            >
                <div className={classes.mobileMenu}>{children}</div>
            </Slide>
        </div>
    );
};

export default HomePageMobileDrawer;
