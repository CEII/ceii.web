import { FunctionComponent } from 'react';
import DotnetIcon from './DotnetIcon';
import NextIcon from './NextIcon';
import ReactIcon from './ReactIcon';
import TailwindIcon from './TailwindIcon';
import TsIcon from './TsIcon';

const Footer: FunctionComponent = () => {
    return (
        <div className="font-bold text-xl w-screen  -ml-4 md:-ml-48 lg:-ml-32 bg-secondary flex flex-col justify-center items-center py-2 space-y-2">
            <h1 className="text-white">Tecnologías</h1>
            <div className="flex space-x-7">
                <TsIcon />
                <ReactIcon />
                <NextIcon />
                <TailwindIcon />
                <DotnetIcon />
            </div>
        </div>
    );
};

export default Footer;
