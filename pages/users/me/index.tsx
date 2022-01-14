import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import { ImageContainer } from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { FC } from 'react';

const InputContainer:FC =({children})=>(
    <div className="flex flex-col-reverse space-y-2 space-y-reverse text-secondary font-medium group">
        {children}
    </div>
)

const UserFooter:FC=()=>(
    <div className="bg-secondary w-full ">
        <p>Hola</p>
    </div>
)


const SettingsUser: NextPage = () => (
    <>
        <Head>
            <title>Settings</title>
        </Head>    

        <Layout showFooter showNav>

            <section  className="mt-2 pb-6 h-full  flex flex-col items-center space-y-2 ">

                <div className="w-full  text-center ">  
                     <p className='text-white italic font-light text-xs'>Edita solo los campos que te gustaría modificar</p>
                </div>
                <div className="bg-white h-5/6 w-5/6 rounded-xl flex flex-col items-center">
                    <h2 className="text-secondary text-center font-bold text-lg mt-5"> Configuración de perfil</h2>
                    <ImageContainer src="/img/empty.png" alt='Profile picture' className="w-28 h-28 mt-6 ring-4 rounded-full ring-accent" rounded />
                    <form className="mt-5 text-center flex flex-col space-y-3  text-secondary font-medium">
                        <InputContainer>
                            <InputGroup
                                placeholder=""
                                type="text"
                                identifier="name"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Nombre' }}
                                className="bg-gray-300"
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputGroup
                                placeholder=""
                                type="text"
                                identifier="lastname"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Apellido' }}
                                className="bg-gray-300"
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputGroup
                                placeholder=""
                                type="text"
                                identifier="password"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Contraseña' }}
                                className="bg-gray-300"
                            />
                        </InputContainer>
                        <InputContainer>

                            <InputGroup
                            placeholder="00219820@uca.edu.sv"
                            type="text"
                            identifier="email"
                            required
                            minLength={19}
                            maxLength={19}
                            label={{ text: 'Email' }}
                            className="bg-gray-300"
                            />
                        </InputContainer>
                        <div className="w-full text-center">
                            <button type="submit" className="btn btn-primary">
                                Actualizar
                            </button>
                        </div>    

                        </form>  
                        <div className="bg-secondary w-full" >
                            
                        </div>       
                </div>
            </section>

        </Layout>

    </>

);

export default SettingsUser;
