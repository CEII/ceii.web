import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import React, { FunctionComponent, useEffect, useState, FC } from 'react';
import { ImageContainer } from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
import UserFooter from '@components/UserFooter';
import Pencil from '@components/Icons/Penciledit';
import Protected from '@components/Protected';
import { GoogleProps } from 'interfaces/props';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';
import storageService from '@services/storageService';
import { updateUser } from '@services/identity/identityService';

import toast from 'react-hot-toast';
import useDelay from '@hooks/useDelay';
import { LONG_NOTIFICATION } from '@constants/notify';
import { USER_IMAGE } from '@constants/session';
import { USER_DISPLAY_NAME } from '@constants/session';
const InputContainer: FC = ({ children }) => (
    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-secondary font-medium group">{children}</div>
);

const SettingsUser: NextPage = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState({ imageUrl: storageService.get(USER_IMAGE),name: storageService.get(USER_DISPLAY_NAME) });
    const [loadStatus, show, hide] = useDelay(500);
    const { data, mutateAsync } = useMutation((body: any) => updateUser(body));

    useEffect(() => {
        if (data) console.log(data);
    }, [data]);

    //  if (!session)
    //     return (
    //         <Protected
    //             message="Debes iniciar sesión antes de visitar esta página"
    //             link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
    //         />
    //     );

    async function onSubmit(e) {
        e.preventDefault();

        show();
        const body = new FormData(e.target as HTMLFormElement);

        try {
            await mutateAsync(body);

            toast.success('Has actualizado tus datos', LONG_NOTIFICATION);
            hide();
        } catch (err: any) {
            const mssg = err.status === 401 ? 'La sesión ha expirado' : 'Ha ocurrido un error';

            toast.error(mssg, LONG_NOTIFICATION);
            hide();
        }
    }

    return (
        <>
            <Head>
                <title>Settings</title>
            </Head>

            <Layout showFooter showNav>
                <section className="mt-2 pb-6 h-full flex flex-col items-center">
                    <div className="w-full  text-center mb-2 ">
                        <p className="text-white italic font-light text-xs sm:text-lg">
                            Edita solo los campos que te gustaría modificar
                        </p>
                    </div>

                    <div className="relative ring-2 ring-white bg-white  w-5/6 rounded-t-xl flex flex-col items-center max-w-screen-lg lg:h-3/4 md:h-full">
                        <div className="flex flex-col h-5/6 justify-center lg:flex-row lg:w-10/12">
                            <div className="flex flex-col mt-16 lg:mt-20 lg:mx-3">
                                <h2 className="text-secondary text-center font-bold text-lg mb-8 ">
                                    {' '}
                                    Configuración de perfil
                                </h2>

                                <ImageContainer
                                    src={user.imageUrl}
                                    alt="Profile picture"
                                    className=" self-center w-28 h-28 mt-3 ring-4 rounded-full ring-accent mx-auto lg:w-56 lg:h-56 lg:self-center bg-slate-700"
                                    rounded
                                />
                            
                                <div className="flex flex-col-reverse self-center w-4/6 ml-4 mt-8 space-y-reverse text-white font-medium group">
                                    <input
                                        className="cursor-pointer border-2 border-accent rounded-full text-gray-700 bg-white "
                                        type="file"
                                        name="picture"
                                        id="picture"
                                        
                                    />
                                   
                                </div>

                            </div>

                            <form
                                className="mt-5 h-3/4 text-center flex flex-col space-y-2 text-secondary font-medium lg:w-6/12 lg:my-36 lg:mx-14"
                                onSubmit={onSubmit}
                            >
                                <InputContainer>
                                    <InputGroup
                                        placeholder=""
                                        type="text"
                                        identifier="name"
                                        minLength={2}
                                        maxLength={20}
                                        label={{ text: 'Nombre' }}
                                        className="bg-gray-300"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputGroup
                                        placeholder=""
                                        type="text"
                                        identifier="lastname"
                                        minLength={2}
                                        maxLength={19}
                                        label={{ text: 'Apellido' }}
                                        className="bg-gray-300"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputGroup
                                        placeholder=""
                                        type="password"
                                        identifier="password"
                                        minLength={8}
                                        maxLength={20}
                                        label={{ text: 'Contraseña' }}
                                        className="bg-gray-300"
                                    />
                                </InputContainer>
                                <div className="w-auto text-center">
                                    <button type="submit" className="btn btn-primary mt-3 lg:mt-6">
                                        Actualizar
                                    </button>
                                </div>
                            </form>
                        </div>
                        <UserFooter name={{text:user.name}} />
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default SettingsUser;
