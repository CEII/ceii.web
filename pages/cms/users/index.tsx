import Layout from '@components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Protected from '@components/Protected';
// import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import UserCard from '@components/UserCard';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import Pagination from '@components/Pagination';
import { useQuery } from 'react-query';
import * as userService from '@services/users/userService';
import Spinner from '@components/Spinner';

const Users: NextPage = () => {
    const [offset, setOffset] = useState(1);
    const [total, setTotalPages] = useState(0);
    // const { data: session } = useSession();
    const { data, refetch } = useQuery('user', () => userService.getUsers({ index: offset }));

    useEffect(() => {
        refetch();

        if (data) {
            // eslint-disable-next-line no-return-assign
            [data.pagingInfo].map(({ totalPages }) => setTotalPages(totalPages)); // Se obtiene el total de paginas de la peticion
        }
    }, [data, offset, refetch]);

    // if (!session)
    //     return (
    //         <Protected
    //             message="Debes iniciar sesión antes de visitar esta página"
    //             link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
    //         />
    //     );

    // Si aun no hay datos se muestra el <Spinner />
    if (!data) {
        return <Spinner />;
    }

    // eslint-disable-next-line consistent-return
    function showUserCards() {
        if (data) {
            return data.users.map((user) => (
                data.users.indexOf(user) === 0 || data.users.indexOf(user) === 1 ||
                data.users.indexOf(user) === 4 || data.users.indexOf(user) === 5 ||
                data.users.indexOf(user) === 8 || data.users.indexOf(user) === 9 ? 
                <UserCard isPair key={user.email} email={user.email} name={user.name} lastName={user.lastName} imageUrl={user.imageUrl} role={user.role.name} /> : 
                <UserCard key={user.email} email={user.email} name={user.name} lastName={user.lastName} imageUrl={user.imageUrl} role={user.role.name} />
            ));
        }
    }

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
                        <div className="space-y-6 md:space-y-5 w-full max-w-full xl:flex xl:flex-wrap xl:space-y-0 xl:justify-between xl:gap-4">
                            {showUserCards()}
                            {/* <UserCard isFacilitator /> */}
                            {/* Cada dos (segun figma) se deben poner en color secondary */}
                            {/* <UserCard isPair />
                            <UserCard isFacilitator isPair /> */}
                        </div>
                        <div className="w-full">
                            <Pagination setOffset={setOffset} allPages={total} />
                        </div>
                    </div>
                </CenteredContainer>
            </Layout>
        </>
    );
};
export default Users;
