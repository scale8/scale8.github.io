import { FC } from 'react';
import Highlight from 'react-highlight';
import { HighlightProps } from './LazyHighlight';

const CodeHighlight: FC<HighlightProps> = (props: HighlightProps) => {
    return <Highlight className={props.language}>{props.code}</Highlight>;
};
export default CodeHighlight;
