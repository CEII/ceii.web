import GoogleLogo from '@components/Svgs/GoogleLogo';
import { FunctionComponent } from 'react';

const GoogleSignIn: FunctionComponent = () => (
    <button
        type="button"
        className="transition-all duration-700 m-2 fixed z-50 bg-white p-2 rounded-full flex items-center space-x-2 w-10 hover:w-52"
    >
        <GoogleLogo className="min-w-[24px]" />
        <span className="transition-all duration-700 font-medium text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:block">
            Inicia sesión con Google
        </span>
    </button>
);

export default GoogleSignIn;
