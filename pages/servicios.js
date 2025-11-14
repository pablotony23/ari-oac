import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import PageBanner from '../components/Common/PageBanner';
import ServiciosPage from '../components/_App/ServiciosPage';
 
const servicios = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                homePageUrl=""
                imgClass="bg-2"
            />

            <ServiciosPage />

            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default servicios;