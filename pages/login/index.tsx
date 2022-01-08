/* eslint-disable jsx-a11y/label-has-associated-control */
import Router from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import type { NextPage } from 'next';
import { GoogleProps } from 'interfaces/props';
import React, { useState } from 'react';
import Spinner from '@components/Spinner';
import storageService from '@services/storageService';
import { AUTH_TOKEN, USER_DISPLAY_NAME, USER_IMAGE } from '@constants/session';
import Head from 'next/head';

const Login: NextPage<GoogleProps> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession();

    if (session) Router.push('/home');

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

        if (session) {
            const { user } = session;

            storageService.set(AUTH_TOKEN, user.accessToken);
            storageService.set(USER_DISPLAY_NAME, user.name);
            storageService.set(USER_IMAGE, user.image);

            setIsLoading(false);
            Router.push('/home');
        }
    }

    return (
        <>
            <Head>
                <title>Inicia sesión</title>
            </Head>
            {isLoading && <Spinner />}
            <div className="w-screen h-screen flex items-center justify-center text-white">
                <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/4" onSubmit={onSubmit}>
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                        <input
                            className="peer rounded-full text-gray-700 py-1 px-4 outline-none transition-all duration-500 focus:border-accent focus:ring-2 focus:ring-accent"
                            placeholder="00019618@uca.edu.sv"
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                        <label
                            className="transition-all duration-500 peer-focus:text-accent group-hover:text-accent"
                            htmlFor="email"
                        >
                            Correo
                        </label>
                    </div>
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                        <input
                            className="peer rounded-full text-gray-700 py-1 px-4 outline-none transition-all duration-500 focus:border-accent focus:ring-2 focus:ring-accent"
                            placeholder="***********"
                            type="password"
                            name="password"
                            id="password"
                            minLength={8}
                            required
                        />
                        <label
                            className="transition-all duration-500 peer-focus:text-accent group-hover:text-accent"
                            htmlFor="picture"
                        >
                            Contraseña
                        </label>
                    </div>
                    <div className="w-full text-center">
                        <button type="submit" className="btn btn-primary">
                            Inicia sesión
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
