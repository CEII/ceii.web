import type { NextPage } from 'next';
import Layout from '@components/Layout';
import Head from 'next/head';
import UserFooter from '@components/UserFooter';
 

const SettingsUser: NextPage = () => (
    <>
        <Head>
            <title>Settings</title>
        </Head>    
        <Layout showFooter showNav>
           
                <div className="w-full bg-slate-600 text-center mb-0">
                    <p className='text-white italic font-light text-xs'>Edita solo los campos que te gustaría modificar</p>
                </div>
           <section  className="mt-2  h-full bg-gray-50 flex flex-col items-center space-y-2 ">
                <div className=" h-full w-3/4 rounded-md">
                    <h2 className="text-secondary text-center font-bold text-sm mt-2"> Configuración de perfil</h2>
                </div>
           </section>

        </Layout>

    </>

);

export default SettingsUser;
