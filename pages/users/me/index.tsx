import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ImageContainer } from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { FC } from 'react';
import UserFooter from '@components/UserFooter';
import Pencil from '@components/Icons/Penciledit';
import Protected from '@components/Protected';
import { GoogleProps } from 'interfaces/props';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';
import { Updateuser } from '@services/edit/Editprofile';
import { useRouter } from 'next/router';

import toast from 'react-hot-toast';
import useDelay from '@hooks/useDelay';
import { LONG_NOTIFICATION } from '@constants/notify';

const InputContainer:FC =({children})=>(
    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-secondary font-medium group">
        {children}
    </div>
)

const verification: NextPage<GoogleProps> = () => {
   const { data: session } = useSession();
    
    if(!session)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );


       

};

const SettingsUser: FunctionComponent = () => {
    const [pic, setPic] = useState(typeof window !== "undefined" ? localStorage.getItem("image") : null);
    // const [pic, setPic] = useState(typeof window !== "undefined" ?)
    const router = useRouter();

    const [loadStatus, show, hide] = useDelay(500);

    const { id }=router.query;
    const { mutateAsync } = useMutation((body: any) => Updateuser(body,id as string));

    async function onSubmit(e) {
        show();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData);

        if (body.name != 'test1' ) {
            toast.success('si');
            return;
        }

        try {
            await mutateAsync(body);

            toast.success('Actualizados', LONG_NOTIFICATION);
            hide();
        } catch (err: any) {
            if (err.status === 401) {
                toast.error(
                    'Error',
                    LONG_NOTIFICATION
                );
                hide();
            }
        }
    }

            
        return(
        <>
            <Head>
                <title>Settings</title>
            </Head>    

            <Layout showFooter showNav>

                <section  className="mt-2 pb-6 h-full  flex flex-col items-center  ">

                    <div className="w-full  text-center mb-2 ">  
                        <p className='text-white italic font-light text-xs sm:text-lg'>Edita solo los campos que te gustaría modificar</p>
                    </div>

                    <div className="ring-2 ring-white bg-white  w-5/6 rounded-t-xl flex flex-col items-center lg:h-3/4 md:h-full">
                    
                        <div className="flex flex-col h-5/6 justify-center lg:flex-row lg:w-10/12 lg:gap-20" >
                            <div className="mt-16 lg:mt-20 lg:mx-3">
                                <h2 className="text-secondary text-center font-bold text-lg mb-8 "> Configuración de perfil</h2>

                                <ImageContainer src={pic} alt='Profile picture' className=" w-28 h-28 mt-3 ring-4 rounded-full ring-accent mx-auto lg:w-56 lg:h-56 lg:self-center bg-slate-700" rounded />

                                <div className=' relative bottom-32 left-40 z-10 group lg:bottom-60 lg:left-48 '>
                                    <button className="  w-9 h-6 px-3  bg-gray-300 rounded-full   font-bold text-xs group-hover:bg-slate-500 group-hover:text-slate-600 "><Pencil className='w-4 h-4'/> </button>

                                </div>

                            </div>
                            
                            <form className="mt-5 h-3/4 text-center flex flex-col space-y-2 text-secondary font-medium lg:w-6/12 lg:m-14"
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
                                <InputContainer>

                                    <InputGroup
                                    placeholder="00219820@uca.edu.sv"
                                    type="email"
                                    identifier="email"
                                    minLength={0}
                                    maxLength={0}
                                    label={{ text: 'Email' }}
                                    className="bg-gray-400 "
                                    disabled
                                    />
                                </InputContainer>
                                <div className="w-auto text-center">
                                    <button type="submit" className="btn btn-primary mt-3 lg:mt-6">
                                        Actualizar
                                    </button>
                                </div>    

                                </form> 
                        </div> 
                    </div>

                        <UserFooter />
                    
                </section>

            </Layout>

        </>
   );
};


export default SettingsUser;
