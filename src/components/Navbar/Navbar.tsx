import { FunctionComponent, useState } from 'react';
import Menu from '@components/Menu';

const Navbar: FunctionComponent = () => {
    const [active, setActive] = useState(false);
    const bar = 'transition-all duration-700 bg-white w-8 h-1 rounded-full';

    return (
        <div className="h-[8vh] sticky top-0 z-50 p-3 flex flex-col items-start justify-center md:p-5">
            <button
                type="button"
                className={`flex flex-col space-y-2 items-center justify-center cursor-pointer ${active && 'relative z-50'}`}
                onClick={() => setActive(!active)}
            >
                <div className={`${bar} ${active && 'opacity-0'}`} />
                <div className={`${bar} ${active && 'transform-gpu rotate-180'}`} />
                <div className={`${bar} ${active && 'opacity-0'}`} />
            </button>
            <Menu active={active} />
        </div>
    );
};

export default Navbar;
