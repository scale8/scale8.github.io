import { FC } from 'react';
import Navigate from '../../components/atoms/Next/Navigate';
import { toTagTester } from '../../utils/NavigationPaths';

const TestersRoot: FC = () => {
    return <Navigate to={toTagTester} />;
};

export default TestersRoot;
