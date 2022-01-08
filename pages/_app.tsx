import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

const MyApp = ({ Component, pageProps: { session, dehydratedState, ...pageProps } }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
