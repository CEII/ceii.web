import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { FunctionComponent } from 'react';
import { UserCardProps } from 'interfaces/props';

const ActivitySection: FunctionComponent<UserCardProps> = ({ isPair }) => {
    return (
        <div className="flex w-full justify-between mt-5 md:mt-12">
            <span className="font-bold text-[0.830rem] md:text-[1rem] lg:text-lg"> Actividad </span>
            <Menu
                as="div"
                className={`${
                    isPair ? 'text-white bg-secondary' : 'bg-white text-secondary'
                } flex flex-col rounded-xl w-2/3 md:w-2/4`}
            >
                <Menu.Button className=" h-max px-2 py-1 text-[0.6rem] flex justify-between items-center font-semibold md:text-[0.75rem]">
                    {/* Aca ira el rol actual del usuario */}
                    Actividad
                    <ChevronDownIcon className="w-4" />
                </Menu.Button>
                <Menu.Items className="flex flex-col w-full text-[0.6rem] rounded-xl p-1 space-y-1 font-semibold break-words md:text-[0.75rem]">
                    <Menu.Item>
                        <span> Conceptos basicos de programacion </span>
                    </Menu.Item>
                    <Menu.Item>
                        <span> Aprende a programar en HTML </span>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default ActivitySection;
