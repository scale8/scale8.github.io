import React, { FC, useEffect } from 'react';
import Router from 'next/router';

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
