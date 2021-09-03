import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

const TesterRoot: FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/tester/tag-tester').then();
    });

    return <div />;
};

export default TesterRoot;
