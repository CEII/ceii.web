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
            } flex flex-wrap w-full lg:w-2/4 rounded-xl p-2 items-center justify-between`}
        >
            <div className="flex flex-row space-x-2">
                <ImageContainer
                    className="rounded-full border-2 w-7 h-7 border-accent sm:w-9 sm:h-9"
                    alt="foto de perfil"
                />
                <div className="">
                    <p className="text-xs font-bold sm:text-[0.85rem] "> Walter Morales {/* name */} </p>
                    {/* Que redirija al email? */}
                    <p className="text-[0.6rem] underline italic sm:text-[0.65rem]">
                        00019618@uca.edu.sv {/* email */}
                    </p>
                </div>
            </div>
            <div className="space-x-1 flex flex-row items-center">
                <span className="text-xs font-bold sm:text-[0.830rem] "> Rol </span>

                <Menu
                    as="div"
                    className={`${
                        isPair ? 'bg-white text-secondary' : 'bg-secondary text-white'
                    } flex flex-col rounded-xl w-2/3`}
                >
                    <Menu.Button className=" h-max px-2 py-1 w-20 text-[0.6rem]  flex justify-between font-semibold sm:text-[0.65rem] md:mr-2">
                        {/* Aca ira el rol actual del usuario */}
                        Rol
                        <ChevronDownIcon className="w-4" />
                    </Menu.Button>
                    <Menu.Items className="flex flex-col w-30 text-[0.6rem] rounded-xl p-1 space-y-1 font-semibold">
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
