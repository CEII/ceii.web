import Layout from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Protected from '@components/Protected';
// import { useSession } from 'next-auth/react';
import UserCard from '@components/UserCard';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import Pagination from '@components/Pagination';

const Users: NextPage = () => {
    // const { data: session } = useSession();

    // if (!session)
    //     return (
    //         <Protected
    //             message="Debes iniciar sesión antes de visitar esta página"
    //             link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
    //         />
    //     );

    return (
        <>
            <Head>
                <title> Usuarios </title>
            </Head>

            <Layout showNav>
                <CenteredContainer orientation="vertical">
                    <div className="flex flex-col justify-center items-center space-y-6 md:space-y-12 m-6 h-full md:w-3/5 lg:w-3/4 xl:w-3/5">
                        <div className="w-full">
                            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Usuarios
                            </h1>
                            <p className="text-white italic text-xs sm:text-sm md:text-lg lg:text-xl">
                                Puedes ver todos los miembros registrados
                            </p>
                        </div>
                        <div className="flex flex-row mt-5 w-full space-x-2 justify-items-center">
                            <div className="items-center w-full rounded-full flex bg-white">
                                <InputGroup
                                    className="font-sans h-max placeholder:text-left placeholder:italic 
                                    text-justify w-full static text-[0.7rem] sm:text-[0.830rem] md:text-[0.9rem] lg:text-[1.2rem]"
                                    placeholder="Busca un usuario por correo"
                                    type="text"
                                    identifier="user"
                                    required
                                    minLength={19}
                                    maxLength={19}
                                    label={{ text: '' }}
                                />
                                <button type="button" className="rounded-full">
                                    <SearchCircleIcon className="w-6 text-secondary font-bold sm:w-7 lg:w-9" />
                                </button>
                            </div>
                            <button type="button" className="rounded-full bg-white p-0.5">
                                <PlusCircleIcon className="w-6 text-secondary font-bold sm:w-7 lg:w-9" />
                            </button>
                        </div>
                        <div className="space-y-6 md:space-y-5 md:w-full md:max-w-full lg:flex lg:flex-wrap lg:space-y-0 lg:justify-between lg:gap-4">
                            <UserCard />
                            <UserCard isFacilitator />
                            {/* Cada dos (segun figma) se deben poner en color secondary */}
                            <UserCard isPair />
                            <UserCard isFacilitator isPair />
                        </div>
                        <div className="w-full">
                            <Pagination />
                        </div>
                    </div>
                </CenteredContainer>
            </Layout>
        </>
    );
};
export default Users;
