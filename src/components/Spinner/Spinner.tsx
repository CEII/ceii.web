import ImageContainer from '@components/ImageContainer';
import { FC } from 'react';

const Spinner: FC = () => (
    <div className="w-screen h-screen absolute z-10 bg-black bg-opacity-60 flex items-center justify-center">
        <ImageContainer src="/img/fido.png" className="w-20 h-20 animate-pulse" />
    </div>
);

export default Spinner;
