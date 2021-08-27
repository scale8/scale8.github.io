module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/docs',
                permanent: true,
            },
        ];
    },
    env: {
        customKey: 'my-value',
    },
};
