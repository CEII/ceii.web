import React, {
    FunctionComponent, useEffect, useState,
} from 'react';

import Link from 'next/link';

import {
    HomeIcon, BookOpenIcon, UserIcon, LogoutIcon,
} from '@heroicons/react/solid';

interface IMenuProps {
    active: boolean;
}

interface IMenuItemProps {
    redirectTo: string;
    display: string;
    icon: FunctionComponent<React.ComponentProps<'svg'>>;
}

const MenuItem: FunctionComponent<IMenuItemProps> = ({ redirectTo, display, icon }) => {
    const Icon = icon;

    return (
        <li className="px-8 py-4 text-primary last:mt-auto last:text-accent group relative hover:text-white lg:py-8">
            <div className="transition-all duration-500 absolute top-0 left-0 w-0 h-full bg-primary z-0 group-hover:w-full" />
            <Link href={redirectTo}>
                <a className="w-full flex items-center space-x-4 text-xl font-bold relative z-10 lg:text-2xl lg:space-x-8">
                    <Icon className="float-left w-8 h-8" />
                    <span>{display}</span>
                </a>
            </Link>
        </li>
    );
};

const Menu: FunctionComponent<IMenuProps> = ({ active }) => {
    const [isActive, setIsActive] = useState(active);

    useEffect(() => setIsActive(active), [active]);

    return (
        <nav
            className={`transition-all duration-500 overflow-hidden w-screen h-screen absolute top-0 left-0 pt-[8vh] 
            ${isActive ? 'translate-x-0' : '-translate-x-[100vh]'}
            md:w-2/5 lg:w-1/3 xl:w-1/4`}
        >
            <ul className="bg-white w-full h-full flex flex-col">
                <MenuItem redirectTo="/" display="Inicio" icon={HomeIcon} />
                <MenuItem redirectTo="/" display="Cursos" icon={BookOpenIcon} />
                <MenuItem redirectTo="/" display="Mi perfil" icon={UserIcon} />
                <MenuItem redirectTo="/" display="Cerrar sesión" icon={LogoutIcon} />
            </ul>
        </nav>
    );
};

export default Menu;
