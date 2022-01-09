/* eslint-disable jsx-a11y/label-has-associated-control */
import ImageContainer from '@components/ImageContainer';
import Spinner from '@components/Spinner';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Blob from '@components/Icons/Blob';

import { register } from '@services/identity/identityService';
import InputGroup from '@components/Inputs/InputGroup';
import Link from 'next/link';
import Layout from '@components/Layout';
import useDelay from '@hooks/useDelay';
import { COMPONENT_STATUS } from '@constants/states';

const Register: NextPage = () => {
    const [loadStatus, show] = useDelay(500);
    const [imgUrl, setImgUrl] = useState('/img/empty.png');
    const { mutate } = useMutation(register);
    const router = useRouter();

    function onChange(e: any) {
        if (!e.target.files) return;

        const [file] = e.target.files;

        setImgUrl(URL.createObjectURL(file));
    }

    async function onSubmit(e: React.FormEvent) {
        show();
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());

        if (!(body.email as string).endsWith('@uca.edu.sv')) return;

        await mutate(formData);
        router.push('/login');
    }

    return (
        <>
            <Head>
                <title>Regístrate</title>
            </Head>
            <Layout showFooter>
                {loadStatus !== COMPONENT_STATUS.UNLOADED && (
                    <Spinner className={loadStatus === COMPONENT_STATUS.UNLOADING && 'animate-leave'} />
                )}
                <div className="w-screen h-full flex flex-col justify-center items-center">
                    <Blob className="fixed z-[-10] top-0 left-0 w-[200vw] h-auto md:w-[175vw] md:-translate-x-44 lg:w-[150vw] xl:w-screen xl:-translate-x-0 xl:-translate-y-52" />
                    <div className="mb-5 text-white">
                        <p className="text-lg font-bold lg:text-2xl">Gracias por unirte</p>
                        <p className="italic lg:text-lg">¡Por favor, llena todos tus datos!</p>
                    </div>
                    <ImageContainer
                        src={imgUrl}
                        className="w-32 h-32 rounded-full border-4 border-white mb-8"
                        alt="me"
                    />
                    <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/5" onSubmit={onSubmit}>
                        <div className="flex flex-col-reverse  space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="Walter"
                                type="text"
                                identifier="name"
                                required
                                minLength={3}
                                label={{
                                    text: 'Nombre',
                                }}
                            />
                        </div>
                        <div className="flex flex-col-reverse  space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="Morales"
                                type="text"
                                identifier="lastName"
                                required
                                minLength={3}
                                label={{
                                    text: 'Apellido',
                                }}
                            />
                        </div>
                        <div className="flex flex-col-reverse  space-y-reverse text-white font-medium group">
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
                        <div className="flex flex-col-reverse  space-y-reverse text-white font-medium group">
                            <input
                                className="peer block w-full cursor-pointer border-2 border-accent rounded-full text-gray-700 bg-white"
                                type="file"
                                name="picture"
                                id="picture"
                                onChange={onChange}
                            />
                            <label
                                className="font-semibold text-lg transition-all duration-200 peer-focus:text-accent group-hover:text-accent"
                                htmlFor="picture"
                            >
                                Imagen de perfil
                            </label>
                        </div>
                        <div className="flex flex-col-reverse  space-y-reverse text-white font-medium group">
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
                            <p>¿Ya tienes cuenta?,</p>
                            <Link href="/login">
                                <a className="transition-all duration-200 underline text-blue-400 hover:text-blue-600">
                                    inicia sesión
                                </a>
                            </Link>
                        </div>
                        <div className="w-full text-center">
                            <button type="submit" className="btn btn-primary">
                                Regístrate
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Register;
