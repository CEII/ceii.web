import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { FunctionComponent } from 'react';
import { UserCardProps } from 'interfaces/props';

const ActivitySection: FunctionComponent<UserCardProps> = ({ isPair }) => {
    return (
        <div className="flex w-full justify-between mt-3">
            <span className="text-[0.85rem] font-bold"> Actividad </span>
            <Menu
                as="div"
                className={`${
                    isPair ? 'text-white bg-secondary' : 'bg-white text-secondary'
                } flex flex-col rounded-xl w-2/3`}
            >
                <Menu.Button className=" h-max px-2 py-1 text-[0.65rem] flex justify-between ">
                    {/* Aca ira el rol actual del usuario */}
                    Actividad
                    <ChevronDownIcon className="w-4" />
                </Menu.Button>
                <Menu.Items className="flex flex-col w-full text-[0.6rem] rounded-xl p-1 space-y-1 break-words">
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
