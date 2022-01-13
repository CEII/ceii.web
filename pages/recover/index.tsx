import { ImageContainer } from '@components/ImageContainer';
import InputGroup from '@components/Inputs/InputGroup';
import Layout from '@components/Layout';
import Spinner from '@components/Spinner';
import { COMPONENT_STATUS } from '@constants/states';
import useDelay from '@hooks/useDelay';
import { NextPage } from 'next';
import Head from 'next/head';
import Blob from '@components/Icons/Blob';
import { useMutation } from 'react-query';
import { requestRecover } from '@services/identity/identityService';
import toast from 'react-hot-toast';
import { LONG_NOTIFICATION } from '@constants/notify';

const Recover: NextPage = () => {
    const [loadStatus, show, hide] = useDelay(500);
    const { mutateAsync } = useMutation((body: any) => requestRecover(body));

    async function onSubmit(e) {
        show();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData);

        await mutateAsync(body);
        toast.success('¡De acuerdo, revisa tu correo!', LONG_NOTIFICATION);
        hide();
    }

    return (
        <>
            <Head>
                <title>Recupera tu contraseña</title>
            </Head>
            <Layout showFooter>
                {loadStatus !== COMPONENT_STATUS.UNLOADED && (
                    <Spinner className={loadStatus === COMPONENT_STATUS.UNLOADING && 'animate-leave'} />
                )}
                <div className="w-screen h-full flex items-center justify-center text-white">
                    <Blob className="fixed z-[-10] top-0 left-0 w-[200vw] h-auto md:w-[175vw] md:-translate-x-44 lg:w-[150vw] xl:w-screen xl:-translate-x-0 xl:-translate-y-52" />
                    <form className="space-y-5 w-8/12 text-sm md:w-1/2 lg:w-1/3 xl:w-1/5" onSubmit={onSubmit}>
                        <ImageContainer
                            className="w-32 h-32 mx-auto my-12 -mt-20 lg:w-36 lg:h-36 hover:scale-110 smooth-transition"
                            src="/img/fido.png"
                            alt="fido"
                            rounded
                        />
                        <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="00019618@uca.edu.sv"
                                type="email"
                                identifier="email"
                                required
                                minLength={19}
                                maxLength={19}
                                label={{ text: 'Introduce tu correo' }}
                            />
                        </div>
                        <div className="w-full text-center">
                            <button type="submit" className="btn btn-primary">
                                Recuperar
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default Recover;
