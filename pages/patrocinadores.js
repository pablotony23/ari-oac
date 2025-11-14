import React from 'react'
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import PageBanner from '../components/Common/PageBanner';
import PatrocinadoresPages from '../components/_App/PatrocinadoresPages';

const patrocinadores = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                homePageUrl="/"
                imgClass="bg-4"
            />

            <PatrocinadoresPages />

            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default patrocinadores