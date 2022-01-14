import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import UserFooter from '@components/UserFooter';
import { ImageContainer } from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
 

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
                <div className="bg-indigo-200 h-5/6 w-5/6 rounded-xl flex flex-col items-center">
                    <h2 className="text-secondary text-center font-bold text-lg mt-5"> Configuración de perfil</h2>
                    <ImageContainer src="/img/empty.png" alt='Profile picture' className="w-28 h-28 mt-6 ring-4 rounded-full ring-accent" rounded />
                    <div className="mt-5 text-center flex flex-col-reverse  space-y-reverse text-secondary font-medium group">
                            <InputGroup
                                placeholder="Nombre"
                                type="text"
                                identifier="name"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Nombre' }}
                            />
                        </div>           
                </div>
            </section>

        </Layout>

    </>

);

export default SettingsUser;
