import { ReactNode } from 'react';

export interface GoogleProps {
    clientId: string;
}

export interface ExtendedDefaultProps {
    className?: string;
    children?: ReactNode;
}

export interface ImageProps extends ExtendedDefaultProps {
    src?: string;
}
