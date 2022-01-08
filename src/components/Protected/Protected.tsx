import CenteredContainer from '@components/Containers/CenteredContainer';
import BackpackFido from '@components/Icons/BackpackFido';
import { ProtectedProps } from 'interfaces/props';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const Protected: FC<ProtectedProps> = ({ message, link: { redirectTo, pageNameOrMessage } }) => (
    <>
        <Head>
            <title>¡Alto ahí!</title>
        </Head>
        <CenteredContainer className="w-full h-screen space-y-10">
            <p className="text-white font-bold text-xl w-80 text-center">{message}</p>
            <BackpackFido className="w-40 h-auto" />
            <Link href={redirectTo}>
                <a className="btn btn-primary">{pageNameOrMessage}</a>
            </Link>
        </CenteredContainer>
    </>
);

export default Protected;
