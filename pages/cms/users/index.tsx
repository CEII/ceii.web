import Layout from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Protected from '@components/Protected';
// import { useSession } from 'next-auth/react';
import UserCard from '@components/UserCard';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';

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
                    <div className="flex flex-col justify-center items-center space-y-6 m-6 h-full">
                        <div>
                            <h1 className="text-white font-bold text-2xl"> Usuarios </h1>
                            <p className="text-white italic text-sm">Puedes ver todos los miembros registrados</p>
                        </div>
                        <div className="flex flex-row mt-5 w-full space-x-2 justify-items-center">
                            <div className="items-center w-full rounded-full flex bg-white">
                                <InputGroup
                                    className="font-sans h-max placeholder:text-left placeholder:italic text-justify w-full static text-[0.830rem]"
                                    placeholder="Busca un usuario por correo"
                                    type="text"
                                    identifier="user"
                                    required
                                    minLength={19}
                                    maxLength={19}
                                    label={{ text: '' }}
                                />
                                <button type="button" className="rounded-full">
                                    <SearchCircleIcon className="w-7 text-secondary font-bold" />
                                </button>
                            </div>
                            <button type="button" className="rounded-full bg-white p-0.5">
                                <PlusCircleIcon className="w-7 text-secondary font-bold" />
                            </button>
                        </div>

                        <UserCard />
                        <UserCard isFacilitator />
                        {/* Cada dos (segun figma) se deben poner en color secondary */}
                        <UserCard isPair />
                        <UserCard isFacilitator isPair />
                    </div>
                </CenteredContainer>
            </Layout>
        </>
    );
};
export default Users;
