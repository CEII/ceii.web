/* eslint-disable jsx-a11y/label-has-associated-control */
import Blob from '@components/Icons/Blob';
import ImageContainer from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
import Layout from '@components/Layout';
import Spinner from '@components/Spinner';

import type { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { AUTH_TOKEN, USER_DISPLAY_NAME, USER_IMAGE } from '@constants/session';

import storageService from '@services/storageService';

const Login: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            const { user } = session;

            storageService.set(AUTH_TOKEN, user.accessToken);
            storageService.set(USER_DISPLAY_NAME, user.name);
            storageService.set(USER_IMAGE, user.image);

            router.push('/home');
        } else {
            storageService.remove(AUTH_TOKEN);
            storageService.remove(USER_DISPLAY_NAME);
            storageService.remove(USER_IMAGE);
        }
    }, [session, router]);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData);

        await signIn('credentials', {
            redirect: false,
            callbackUrl: '/',
            ...body,
        });
    }

    return (
        <>
            <Head>
                <title>Inicia sesión</title>
            </Head>
            <Layout showFooter>
                {isLoading && <Spinner />}
                <div className="w-screen h-full flex items-center justify-center text-white">
                    <Blob className="fixed z-[-10] top-0 left-0 w-screen" />
                    <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/5" onSubmit={onSubmit}>
                        <ImageContainer className="w-32 h-32 mx-auto my-12 -mt-20" src="/img/fido.png" alt="fido" />
                        <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="00019618@uca.edu.sv"
                                type="email"
                                identifier="email"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Correo' }}
                            />
                        </div>
                        <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="Contraseña"
                                type="password"
                                identifier="password"
                                required
                                label={{ text: 'Contraseña' }}
                                minLength={8}
                            />
                        </div>
                        <div className="w-full flex justify-center space-x-1 text-white italic text-xs">
                            <p>¿Aun no tienes cuenta?,</p>
                            <Link href="/register">
                                <a className="transition-all duration-200 underline text-blue-400 hover:text-blue-600">
                                    regístrate
                                </a>
                            </Link>
                        </div>
                        <div className="w-full text-center">
                            <button type="submit" className="btn btn-primary">
                                Inicia sesión
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Login;
