import React from 'react';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/DefaultHome/HeroSlider';
import Footer from '../components/_App/Footer';
import Galeria from '../components/_App/Galeria';
import Section from '../components/_App/Section';
import Section2 from '../components/_App/Section2';
import Features from '../components/DefaultHome/Features';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
 
const Index = () => {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <Features />
            <Galeria />
            <Section />
            <Section2 />
            <WhatsAppIcon />
    
            <Footer />
        </React.Fragment>
    );
}

export default Index;