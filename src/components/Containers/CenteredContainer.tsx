import { ContainerProps } from 'interfaces/props';
import { FC } from 'react';

const CenteredContainer: FC<ContainerProps> = ({ className, children, orientation }) => (
    <div
        className={`flex ${
            orientation === 'vertical' ? 'flex-col' : 'flex-row'
        } items-center justify-center ${className}`}
    >
        {children}
    </div>
);

export default CenteredContainer;
