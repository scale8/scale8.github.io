import React, { FC, useEffect } from 'react';
import Router from 'next/router';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}, // will be passed to the page component as props
    };
};

const HomePage: FC = () => {
    useEffect(() => {
        const { pathname } = Router;
        if (pathname == '/') {
            Router.push('/docs').then();
        }
    });
    return null;
};

export default HomePage;
