import { ExtendedDefaultProps } from 'interfaces/props';
import { FC } from 'react';

const Blob: FC<ExtendedDefaultProps> = ({ className }) => (
    <svg
        className={className}
        width="375"
        height="245"
        viewBox="0 0 375 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M375 0.5H0V180C197.2 285.6 332.167 238.333 375 201.5V0.5Z" fill="#ED554C" />
    </svg>
);

export default Blob;
