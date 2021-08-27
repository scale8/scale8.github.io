import { FC } from 'react';

export type LogoProps = {
    width?: number;
    height?: number;
};

const Logo: FC<LogoProps> = (props: LogoProps) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186 339"
                {...{
                    width: props.width,
                    height: props.height,
                }}
            >
                <path
                    id="top-1"
                    style={{
                        fill: '#c6e54b',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 55.03,16.48
                       C 76.14,-4.63 110.37,-4.63 131.48,16.48
                         131.48,16.48 93.25,54.69 93.25,54.69
                         93.25,54.69 55.03,16.48 55.03,16.48 Z"
                />
                <path
                    id="top-2"
                    style={{
                        fill: '#fab300',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 93.25,54.69
                       C 93.25,54.69 131.66,16.29 131.66,16.29
                         131.66,16.29 169.93,54.55 169.93,54.55
                         169.93,54.55 131.52,92.95 131.52,92.95
                         131.52,92.95 93.25,54.69 93.25,54.69 Z"
                />
                <path
                    id="top-3"
                    style={{
                        fill: '#ffdc51',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 169.75,54.74
                       C 190.86,75.84 190.86,110.06 169.75,131.16
                         169.75,131.16 131.52,92.95 131.52,92.95
                         131.52,92.95 169.75,54.74 169.75,54.74 Z"
                />
                <path
                    id="mid-1"
                    style={{
                        fill: '#01c8a1',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 16.25,131.77
                       C -4.86,110.67 -4.86,76.45 16.25,55.34
                         16.25,55.34 54.47,93.56 54.47,93.56
                         54.47,93.56 16.25,131.77 16.25,131.77 Z"
                />
                <path
                    id="mid-2"
                    style={{
                        fill: '#0096a6',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 16.25,131.77
                       C 16.25,131.77 54.65,93.38 54.65,93.38
                         54.65,93.38 92.92,131.64 92.92,131.64
                         92.92,131.64 54.52,170.03 54.52,170.03
                         54.52,170.03 16.25,131.77 16.25,131.77 Z"
                />
                <path
                    id="mid-3"
                    style={{
                        fill: '#39cce0',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 54.52,170.03
                       C 54.52,170.03 92.92,131.64 92.92,131.64
                         92.92,131.64 131.19,169.90 131.19,169.90
                         131.19,169.90 92.79,208.29 92.79,208.29
                         92.79,208.29 54.52,170.03 54.52,170.03 Z"
                />
                <path
                    id="mid-4"
                    style={{
                        fill: '#aa74e6',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 169.46,208.16
                       C 169.46,208.16 131.05,246.55 131.05,246.55
                         131.05,246.55 92.78,208.29 92.78,208.29
                         92.78,208.29 131.19,169.90 131.19,169.90
                         131.19,169.90 169.46,208.16 169.46,208.16 Z"
                />
                <path
                    id="mid-5"
                    style={{
                        fill: '#9042e7',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 169.46,208.16
                       C 190.57,229.26 190.57,263.48 169.46,284.59
                         169.46,284.59 131.24,246.37 131.24,246.37
                         131.24,246.37 169.46,208.16 169.46,208.16 Z"
                />
                <path
                    id="bottom-1"
                    style={{
                        fill: '#ff0084',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 16.16,284.90
                       C -4.95,263.80 -4.95,229.58 16.16,208.47
                         16.16,208.47 54.38,246.69 54.38,246.69
                         54.38,246.69 16.16,284.90 16.16,284.90 Z"
                />
                <path
                    id="bottom-2"
                    style={{
                        fill: '#fe657a',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 92.65,284.95
                       C 92.65,284.95 54.25,323.35 54.25,323.35
                         54.25,323.35 15.98,285.08 15.98,285.08
                         15.98,285.08 54.38,246.69 54.38,246.69
                         54.38,246.69 92.65,284.95 92.65,284.95 Z"
                />
                <path
                    id="bottom-3"
                    style={{
                        fill: '#c63d51',
                        fillOpacity: 1,
                        fillRule: 'nonzero',
                        stroke: 'none',
                        strokeWidth: '0.352777',
                    }}
                    d="M 130.87,323.16
                       C 109.76,344.27 75.54,344.27 54.43,323.16
                         54.43,323.16 92.65,284.95 92.65,284.95
                         92.65,284.95 130.87,323.16 130.87,323.16 Z"
                />
            </svg>
        </>
    );
};

export default Logo;
