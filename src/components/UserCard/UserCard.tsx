import { FunctionComponent } from 'react';
import { UserCardProps } from 'interfaces/props';
import { ImageContainer } from '@components/ImageContainer';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import ActivitySection from './ActivitySection/ActivitySection';

const UserCard: FunctionComponent<UserCardProps> = ({ isFacilitator, isPair }) => {
    return (
        <div
            className={`${
                isPair ? 'bg-secondary text-white' : 'bg-white text-secondary'
            } flex flex-wrap w-full rounded-xl p-2 items-center justify-between lg:w-[47%]`}
        >
            <div className="flex flex-row space-x-2 items-center mr-1">
                <ImageContainer
                    className="rounded-full border-2 w-7 h-7 border-accent md:w-9 md:h-9 lg:h-[2.869rem] lg:w-[2.869rem]"
                    alt="foto de perfil"
                />
                <div className="leading-4">
                    <p className="text-xs font-bold text-[0.85rem] md:text-[1rem] lg:text-[1.1rem]">
                        Walter Morales {/* name */}
                    </p>
                    {/* Que redirija al email? */}
                    <p className="text-[0.65rem] underline italic md:text-[0.75rem] lg:text-[0.8rem]">
                        00019618@uca.edu.sv {/* email */}
                    </p>
                </div>
            </div>
            <div className="space-x-[0.5rem] flex flex-row items-center">
                <span className="text-xs font-bold text-[0.830rem] md:text-[0.95rem] lg:text-lg"> Rol </span>

                <Menu
                    as="div"
                    className={`${
                        isPair ? 'bg-white text-secondary' : 'bg-secondary text-white'
                    } flex flex-col rounded-xl w-[4rem] justify-center md:w-32 lg:w-20`}
                >
                    <Menu.Button className=" h-max px-2 py-1 text-[0.6rem] flex justify-between font-semibold md:text-[0.75rem]">
                        {/* Aca ira el rol actual del usuario */}
                        Rol
                        <ChevronDownIcon className="w-4" />
                    </Menu.Button>
                    <Menu.Items className="flex flex-col text-[0.6rem] rounded-xl p-1 space-y-1 font-semibold md:text-[0.75rem]">
                        <Menu.Item>
                            <span> Admin </span>
                        </Menu.Item>
                        <Menu.Item>
                            <span> Facilitador </span>
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
            {/* Ver en Pages/cms/users */}
            {isFacilitator && <ActivitySection isPair={!isPair} />}
        </div>
    );
};

export default UserCard;
