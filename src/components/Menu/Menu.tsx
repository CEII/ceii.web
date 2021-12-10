import { FunctionComponent, useState } from 'react';

interface IMenuProps {
    active: boolean
}

const Menu: FunctionComponent<IMenuProps> = ({ active }) => {
    const [activeState, setActiveState] = useState(active);

    return (
        <div className="w-screen h-screen absolute top-0 left-0 pt-[8vh]">
            <ul className="bg-white w-full h-full [scroll:no]">

            </ul>
        </div>
    );
};

export default Menu;

// p-4 md:py-6 md:px-10 lg:py-8 lg:px-12
