import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { motion } from 'framer-motion';

const MyApp = ({ Component, pageProps: { session, dehydratedState, ...pageProps }, router }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                <SessionProvider session={session}>
                    <motion.div
                        key={router.route}
                        initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                        }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </SessionProvider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
