import { ImageContainer } from '@components/ImageContainer';
import { ExtendedDefaultProps } from '@interfaces/props';
import { FC } from 'react';

const Spinner: FC<ExtendedDefaultProps> = ({ className }) => (
    <div className="w-screen h-screen absolute z-10 flex items-center justify-center overflow-hidden">
        <div className={`absolute z-0 bg-black bg-opacity-60 rounded-full animate-enter ${className}`} />
        <ImageContainer src="/img/fido.png" alt="fido" className="w-20 h-20 animate-pulse" />
    </div>
);

export default Spinner;
