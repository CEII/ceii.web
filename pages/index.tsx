/* eslint-disable consistent-return */

/* eslint-disable jsx-a11y/label-has-associated-control */
import ImageContainer from '@components/ImageContainer';
import { GoogleProps } from 'interfaces/props';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { USER_DISPLAY_NAME, USER_IMAGE } from '@constants/session';

import storageService from '@services/storageService';

const Home: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();

    if (!session)
        return (
            <>
                <Head>
                    <title>Inicia sesión</title>
                </Head>
                <div className="w-full h-screen flex items-center justify-center">
                    <Link href="/login">
                        <a className="btn btn-primary">Inicia sesión</a>
                    </Link>
                </div>
            </>
        );

    return (
        <>
            <Head>
                <title>¡Bienvenido!</title>
            </Head>
            <div className="w-screen h-screen flex items-center justify-center text-white">
                <ImageContainer src={storageService.get(USER_IMAGE)} className="w-32 h-32" />
                <p>¡Bienvenido {storageService.get(USER_DISPLAY_NAME)}</p>
            </div>
        </>
    );
};

export default Home;
