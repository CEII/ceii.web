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

const Register: NextPage = () => {
    const [imgUrl, setImgUrl] = useState('/img/empty.png');
    const { isLoading, mutate } = useMutation(register);
    const router = useRouter();

    function onChange(e: any) {
        if (!e.target.files) return;

        const [file] = e.target.files;

        setImgUrl(URL.createObjectURL(file));
    }

    async function onSubmit(e: React.FormEvent) {
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
            {isLoading && <Spinner />}
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <Blob className="fixed z-[-10] top-0 left-0 w-screen" />
                <div className="-mt-4 mb-5 text-white">
                    <p className="text-lg font-bold">Gracias por unirte</p>
                    <p className="italic">¡Por favor, llena todos tus datos!</p>
                </div>
                <ImageContainer src={imgUrl} className="w-32 h-32 rounded-full mb-12 border-4 border-accent" alt="me" />
                <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/5" onSubmit={onSubmit}>
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
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
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
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
        </>
    );
};

export default Register;
