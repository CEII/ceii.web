/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GoogleProps } from 'interfaces/props';
import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { NextPage } from 'next';
import ConstructionFido from '@components/ConstructionFido/ConstructionFido';
import CenteredContainer from '@components/Containers/CenteredContainer';
import Protected from '@components/Protected';

const Home: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();

    if (!session)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );

    return (
        <CenteredContainer className="w-full h-screen space-y-8">
            <CenteredContainer className="space-y-4">
                <span className="bg-white py-1 text-accent px-5 text-xl font-bold rounded-full md:text-2xl md:px-6">
                    Ups!
                </span>
                <span className="text-white font-semibold text-xl break-words md:text-2xl">
                    Estamos en construcción
                </span>
            </CenteredContainer>
            <div className="w-auto">
                <ConstructionFido className="h-56" />
            </div>
            <CenteredContainer className="space-y-4">
                <p className="text-white italic text-lg text-center break-words w-2/3 md:text-xl">
                    ¿Buscas los talleres socioafectivos?
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Sí, llévame allá</a>
                </Link>
            </CenteredContainer>
        </CenteredContainer>
    );
};

export default Home;
