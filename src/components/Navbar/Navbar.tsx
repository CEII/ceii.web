/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, useState } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full h-[6vh] p-3 fixed top-0 flex items-center justify-between bg-primary">
            <div role="button" className={`${isActive ? 'relative z-50' : ''}`} onClick={() => setIsActive(!isActive)}>
                <div className={`transition-all ${isActive ? 'opacity-0' : ''} bg-white h-1 w-8 rounded-xl my-2`} />
                <div
                    className={`transition-all duration-700 ${
                        isActive ? 'transform-gpu rotate-180 bg-primary' : 'bg-white'
                    } h-1 w-8 rounded-xl my-2`}
                />
                <div className={`transition-all ${isActive ? 'opacity-0' : ''} bg-white h-1 w-8 rounded-xl my-2`} />
            </div>
            <div
                className={`transition-all duration-500 fixed top-0 left-0 bg-black bg-opacity-80 z-40 ${
                    isActive ? 'h-full w-full' : 'h-0 w-0'
                }`}
            >
                <nav
                    className={`transition-all duration-500 ${
                        isActive ? 'w-full md:w-2/5 lg:w-2/6 xl:w-3/12 2xl:w-1/6' : 'w-0'
                    } h-screen bg-white`}
                >
                    <ul
                        className={`transition-all duration-1000 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                        } pt-20 text-primary`}
                    >
                        {isActive && (
                            <>
                                <li className="transition-all duration-300 px-10 py-6 hover:text-white hover:bg-primary">
                                    <Link href="/">
                                        <a className="font-bold text-2xl">Inicio</a>
                                    </Link>
                                </li>
                                <li className="transition-all duration-300 px-10 py-6 hover:text-white hover:bg-primary">
                                    <Link href="/preu/inscriptions">
                                        <a className="font-bold text-2xl">PreUniversitario</a>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
