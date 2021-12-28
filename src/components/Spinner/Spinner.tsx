import { FunctionComponent } from 'react';

const Spinner: FunctionComponent = () => (
    <div className="w-screen h-screen fixed flex justify-center items-center">
        <div className="my-auto mx-auto w-full animate-spin">
            <div className="my-2 space-x-2 flex justify-center items-center w-full">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-4 h-4 rounded-full bg-white" />
            </div>
            <div className="my-2 space-x-2 flex justify-center items-center w-full">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-4 h-4 rounded-full bg-white" />
            </div>
        </div>
    </div>
);

export default Spinner;
