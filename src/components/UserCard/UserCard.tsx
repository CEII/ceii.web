import { FunctionComponent } from 'react';
import { UserCardProps } from 'interfaces/props';
import { ImageContainer } from '@components/ImageContainer';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import ActivitySection from './ActivitySection/ActivitySection';

const UserCard: FunctionComponent<UserCardProps> = ({ email, name, lastName, imageUrl, role, isPair }) => {
    return (
        <div
            className={`${
                isPair ? 'bg-secondary text-white' : 'bg-white text-secondary'
            } flex flex-wrap w-full rounded-xl p-2 items-center justify-between xl:w-[47%]`}
        >
            <div className="flex flex-row space-x-2 items-center mr-1 w-[60%]">
                <div>
                    <ImageContainer
                        src={imageUrl}
                        className="rounded-full border-2 w-7 h-7 border-accent md:w-9 md:h-9 lg:h-[2.869rem] lg:w-[2.869rem] xl:w-12 xl:h-12"
                        alt="foto de perfil"
                        rounded
                    />
                </div>
                <div className="leading-4 ">
                    <p className="text-xs break-words font-bold text-[0.85rem] md:text-[1rem] lg:text-[1.1rem] xl:text-lg">
                        {name} {lastName}
                    </p>
                    <p className="text-[0.61rem] underline italic md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.9rem]">
                        {email}
                    </p>
                </div>
            </div>
            <div className="space-x-[0.5rem] flex flex-row items-center">
                <span className="text-xs font-bold text-[0.830rem] md:text-[0.95rem] lg:text-[1.1rem] xl:text-lg">
                    Rol
                </span>

                <Menu
                    as="div"
                    className={`${
                        isPair ? 'bg-white text-secondary' : 'bg-secondary text-white'
                    } flex flex-col rounded-xl w-[4rem] justify-center md:w-32 xl:w-28`}
                >
                    <Menu.Button className=" h-max px-2 py-1 text-[0.6rem] flex justify-between font-semibold md:text-[0.75rem] xl:text-[0.85rem]">
                        {/* Aca ira el rol actual del usuario */}
                        {/* Rol */} {role}
                        <ChevronDownIcon className="w-4" />
                    </Menu.Button>
                    <Menu.Items className="flex flex-col text-[0.6rem] rounded-xl p-1 space-y-1 font-semibold md:text-[0.75rem] xl:text-[0.85rem]">
                        <Menu.Item>
                            <a> {role} </a>
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
            {/* Ver en Pages/cms/users */}
            {role === 'Facilitator' && <ActivitySection isPair={!isPair} />}
        </div>
    );
};

export default UserCard;
