/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

const Navbar: FC = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full h-[6vh] p-3 sticky top-0 flex items-center justify-between bg-primary z-50">
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
                        className={`h-full flex flex-col transition-all duration-1000 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                        } pt-20 text-primary`}
                    >
                        {isActive && (
                            <>
                                <li className="w-full transition-all duration-300 hover:text-white hover:bg-primary flex justify-center items-center text-center h-14 lg:h-20">
                                    <Link href="/">
                                        <a className="w-full h-full font-bold text-2xl flex items-center justify-center">
                                            Inicio
                                        </a>
                                    </Link>
                                </li>
                                <li className="w-full transition-all duration-300 hover:text-white hover:bg-primary flex justify-center items-center text-center h-14 lg:h-20">
                                    <Link href="/preu/inscriptions">
                                        <a className="w-full h-full font-bold text-2xl flex items-center justify-center">
                                            PreUniversitario
                                        </a>
                                    </Link>
                                </li>
                                <li className="mt-auto w-full transition-all duration-300 hover:text-white hover:bg-primary flex justify-center items-center text-center h-14 mb-6 lg:h-20">
                                    <button
                                        type="button"
                                        className="w-full h-full font-bold text-2xl flex items-center justify-center"
                                        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
                                    >
                                        Cerrar sesión
                                    </button>
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
