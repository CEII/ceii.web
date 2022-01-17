import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="es">
        <Head>
            <link rel="icon" href="/img/fido.png" />

            {/* <!-- Primary Meta Tags --> */}
            <meta name="title" content="CEII - UCA" />
            <meta name="description" content="Comunidad Estudiantil de Ingeniería Informática" />

            {/* <!-- Open Graph / Facebook -- > */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ceii-uca.com/" />
            <meta property="og:title" content="CEII - UCA" />
            <meta property="og:description" content="Comunidad Estudiantil de Ingeniería Informática" />
            <meta property="og:image" content="/img/meta/Meta.png" />

            {/* <!-- Twitter -- > */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://ceii-uca.com/" />
            <meta property="twitter:title" content="CEII - UCA" />
            <meta property="twitter:description" content="Comunidad Estudiantil de Ingeniería Informática" />
            <meta property="twitter:image" content="/img/meta/Meta.png" />
        </Head>
        <body className="bg-primary">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
