import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html lang="es">
        <Head>
            <link rel="icon" href="/img/fido.png" />
            <meta name="description" content="Comunidad Estudiantil de Ingeniería Informática - CEII UCA" />
        </Head>
        <body className="bg-primary">
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
