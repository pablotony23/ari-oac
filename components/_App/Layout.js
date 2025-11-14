import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'
import Script from 'next/script';

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return(
        <>
            <Head>
                <title>Arioac</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="¡Únete al RH WEEK y celebra con nosotros 5 años de excelencia en recursos humanos! Descubre las últimas tendencias y mejores prácticas en la gestión del talento. Con la participación de reconocidos speakers internacionales, exploraremos temas actuales que están transformando el mundo de los recursos humanos. Además, tendrás la oportunidad de ganar 10 premios exclusivos. ¡No te lo pierdas y sé parte de este emocionante evento en línea!" />
                <meta name="og:title" property="og:title" content="ARIOAC"></meta>
                <meta property="og:locale" content="es_MX"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Arioac"></meta>
                <meta property="og:description" content=""></meta>
                <meta property="og:site_name" content="Arioac"></meta>
                <meta name="twitter:card" content="Asociación de Recursos Humanos"></meta>
                <link rel="canonical" href="https://ston-react.envytheme.com/"></link>
            </Head>

            {children}

            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="lazyOnload"
            />
            <Script strategy="lazyOnload" id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
                    page_path: window.location.pathname,
                });
                `}
            </Script>

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <ToastContainer transition={Slide} />
        </>
    );
}

export default Layout;