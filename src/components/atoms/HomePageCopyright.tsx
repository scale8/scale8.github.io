import { FC } from 'react';
import { Box } from '@material-ui/core';

const HomePageCopyright: FC<{ dark?: boolean }> = (props: {
    dark?: boolean;
}) => {
    return (
        <Box
            p={3}
            textAlign="center"
            fontSize="16px"
            color={props.dark ? '#737373' : 'rgba(255, 255, 255, 0.8)'}
        >
            © Scale8.com, a BarzantiBeck Ltd company,{' '}
            {new Date().getUTCFullYear()}. Designed and built by BarzantiBeck
            Ltd.
        </Box>
    );
};

export { HomePageCopyright };
