export interface GoogleProps {
    clientId: string;
}

export interface ExtendedDefaultProps {
    className?: string;
}

export interface ImageProps extends ExtendedDefaultProps {
    src?: string;
    alt: string;
    rounded?: boolean;
    dataBlur?: string;
}

export interface LinkGroup {
    pageNameOrMessage: string;
    redirectTo: string;
}

export interface ProtectedProps {
    message: string;
    link: LinkGroup;
}

export interface LayoutProps {
    showNav?: boolean;
    showFooter?: boolean;
}

export interface LabelProps extends ExtendedDefaultProps {
    text: string;
}

export interface InputProps extends ExtendedDefaultProps {
    label: LabelProps;
    placeholder?: string;
    type: string;
    identifier: string;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
}

export interface SignOutPageProps {
    callbackUrl: string;
}

export interface ContainerProps extends ExtendedDefaultProps {
    orientation: 'vertical' | 'horizontal';
    wrap?: boolean;
}

export interface PreuCardProps {
    id: number;
    title: string;
    schedule: Date;
    description: string;
    enabled: boolean;
    isEnrolled?: boolean;
    isFiltered?: boolean;
}

export interface UserCardProps {
    email?: string;
    name?: string;
    lastName?: string;
    imageUrl?: string;
    role?: string;
    isPair?: boolean; // Para que cada dos cartas de usuarios sean azules y las demas blancas
}

export interface PaginationProps {
    setOffset?: (offset: number) => void;
    allPages?: number;
}
