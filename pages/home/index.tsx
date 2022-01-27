/* eslint-disable consistent-return */

/* eslint-disable jsx-a11y/label-has-associated-control */
import CenteredContainer from '@components/Containers/CenteredContainer';
import ConstructionFido from '@components/Icons/ConstructionFido';
import Layout from '@components/Layout';
import Protected from '@components/Protected';
import useGuestMode from '@hooks/useGuestMode';
import { GoogleProps } from 'interfaces/props';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();
    const [guest] = useGuestMode();

    if (!session && !guest)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );

    return (
        <>
            <Head>
                <title>Inicio</title>
            </Head>
            <Layout showFooter showNav>
                <CenteredContainer className="w-full min-h-[92vh] space-y-8" orientation="vertical">
                    <CenteredContainer className="space-y-4" orientation="vertical">
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
                    <CenteredContainer className="space-y-4" orientation="vertical">
                        <p className="text-white italic text-lg text-center break-words w-2/3 md:text-xl">
                            ¿Buscas los talleres socioafectivos?
                        </p>
                        <Link href="/preu/inscriptions">
                            <a className="btn btn-primary">Sí, llévame allá</a>
                        </Link>
                    </CenteredContainer>
                </CenteredContainer>
            </Layout>
        </>
    );
};

export default Home;
