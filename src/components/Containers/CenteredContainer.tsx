import { ExtendedDefaultProps } from 'interfaces/props';
import { FC } from 'react';

const CenteredContainer: FC<ExtendedDefaultProps> = ({ className, children }) => (
    <div className={`flex flex-col items-center justify-center ${className}`}>{children}</div>
);

export default CenteredContainer;
