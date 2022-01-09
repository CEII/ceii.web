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
