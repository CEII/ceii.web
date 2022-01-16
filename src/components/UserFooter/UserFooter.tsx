import { FC } from 'react';

const UserFooter: FC = () => {
    return (
        <div className="absolute w-full h-14 flex flex-col justify-center items-center rounded-b-xl bg-secondary text-white font-bold ring-2 ring-white left-0 -bottom-10">
            <h1 className="font-sans font-bold m-4 lg:text-2xl md:text-xl">#0080119</h1>
        </div>
    );
};

export default UserFooter;
