/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from 'react-query';
import ImageContainer from '@components/ImageContainer';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { register } from '@services/identity/identityService';
import Spinner from '@components/Spinner';

const Register: NextPage = () => {
    const [imgUrl, setImgUrl] = useState('/img/empty.png');
    const { isLoading, mutate } = useMutation(register);

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
    }

    return (
        <>
            <Head>
                <title>Regístrate</title>
            </Head>
            {isLoading && <Spinner />}
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <div className="-mt-4 mb-5 text-white">
                    <p className="text-lg font-bold">Gracias por unirte</p>
                    <p className="italic">¡Por favor, llena todos tus datos!</p>
                </div>
                <ImageContainer src={imgUrl} className="w-32 h-32 rounded-full mb-12 border-4 border-accent" />
                <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/4" onSubmit={onSubmit}>
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                        <input
                            className="peer rounded-full text-gray-700 py-1 px-4 outline-none transition-all duration-500 focus:border-accent focus:ring-2 focus:ring-accent"
                            placeholder="Walter"
                            type="text"
                            name="name"
                            id="name"
                            required
                            minLength={3}
                        />
                        <label
                            className="transition-all duration-500 peer-focus:text-accent group-hover:text-accent"
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                    </div>
                    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                        <input
                            className="peer rounded-full text-gray-700 py-1 px-4 outline-none transition-all duration-500 focus:border-accent focus:ring-2 focus:ring-accent"
                            placeholder="Morales"
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                            minLength={3}
                        />
                        <label
                            className="transition-all duration-500 peer-focus:text-accent group-hover:text-accent"
                            htmlFor="lastName"
                        >
                            Apellido
                        </label>
                    </div>
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
                            className="peer block w-full cursor-pointer border-2 border-accent rounded-full text-gray-700 bg-white"
                            placeholder="a"
                            type="file"
                            name="picture"
                            id="picture"
                            onChange={onChange}
                        />
                        <label
                            className="transition-all duration-500 peer-focus:text-accent group-hover:text-accent"
                            htmlFor="picture"
                        >
                            Imagen de perfil
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
                            Regístrate
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
