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
import { recoverPassword } from '@services/identity/identityService';
import toast from 'react-hot-toast';
import { LONG_NOTIFICATION } from '@constants/notify';
import { useRouter } from 'next/router';

const RecoverFull: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loadStatus, show, hide] = useDelay(500);
    const { mutateAsync } = useMutation((body: any) => recoverPassword(body, id as string));

    async function onSubmit(e) {
        show();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData);

        if (body.password !== body.passwordConfirmation) {
            toast.error('¡Las contraseñas deben coincidir!', LONG_NOTIFICATION);
            hide();
            return;
        }

        try {
            await mutateAsync(body);

            toast.success('¡De acuerdo, ahora iniciemos sesión!', LONG_NOTIFICATION);
            hide();
            router.push('/login');
        } catch (err: any) {
            if (err.status === 400) {
                toast.error(
                    'Tu plazo para recuperar contraseña ha expirado, intenta desde el inicio...',
                    LONG_NOTIFICATION
                );
                hide();
            }
        }
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
                                placeholder="Contraseña nueva"
                                type="password"
                                identifier="password"
                                required
                                minLength={8}
                                label={{ text: 'Introduce tu nueva contraseña' }}
                            />
                        </div>
                        <div className="flex flex-col-reverse space-y-2 space-y-reverse text-white font-medium group">
                            <InputGroup
                                placeholder="Confirma tu contraseña"
                                type="password"
                                identifier="passwordConfirmation"
                                required
                                minLength={8}
                                label={{ text: 'Confirma tu nueva contraseña' }}
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

export default RecoverFull;
