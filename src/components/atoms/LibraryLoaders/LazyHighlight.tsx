import { FC, lazy, Suspense } from 'react';

export type HighlightProps = {
    language: string;
    code: string;
};

const LazyHighlight: FC<HighlightProps> = (props: HighlightProps) => {
    const CodeHighlight = lazy(() => import('./CodeHighlight'));
    return (
        <Suspense fallback={<div />}>
            <CodeHighlight {...props} />
        </Suspense>
    );
};
export default LazyHighlight;
