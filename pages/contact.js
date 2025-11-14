import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                homePageUrl="/"
                imgClass="bg-3"
                pageTitle=""
            /> 
            <ContactForm />
            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;