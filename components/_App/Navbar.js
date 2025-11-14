import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from '../../utils/ActiveLink';
import Image from "next/image";
import { useRouter } from 'next/router';

const Navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const products = useSelector((state) => state.addedItems);
    const collapsed = useSelector((state) => state.collapsedState);
    const [scrollLogo, setScrollLogo] = useState(false);
    const [isEmpresaPage, setIsEmpresaPage] = useState(false);
    const [isServiciosPage, setIsServiciosPage] = useState(false);
    const [isContactoPage, setIsContactoPage] = useState(false);
    const [isPatrocinadoresPage, setIsPatrocinadoresPage] = useState(false);
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    function changeLogoOnScroll() {
        setScrollLogo(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeLogoOnScroll);
        return () => {
            window.removeEventListener('scroll', changeLogoOnScroll);
        };
    }, []);

    useEffect(() => {
        const pathname = router.pathname;
        setIsEmpresaPage(pathname === '/empresa');
        setIsServiciosPage(pathname === '/servicios');
        setIsContactoPage(pathname === '/contact');
        setIsPatrocinadoresPage(pathname === '/patrocinadores');
    }, [router.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollLogo(window.scrollY > 0);
            setIsTopOfPage(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        dispatch({
            type: 'COLLAPSED_STATE',
        });
    };

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <header className="header-area fixed-top">
            <div id="navbar" className={`navbar-area ${isEmpresaPage || isServiciosPage || isContactoPage || isPatrocinadoresPage|| scrollLogo || !isTopOfPage ? 'is-sticky' : ''}`}>
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link href="/" passHref={true} legacyBehavior>
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img src={scrollLogo ? '/img/hrlogo.png' : '/img/hrlogo.png'} alt="ARIOAC" />
                                    </a>
                                </Link>

                                <button
                                    onClick={toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active-link" passHref={true} legacyBehavior>
                                                <a className="nav-link">HR WEEK</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/empresa" activeClassName="active-link" passHref={true} legacyBehavior>
                                                <a onClick={toggleNavbar} className="nav-link">CONFERENCISTAS</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/servicios" activeClassName="active-link" passHref={true} legacyBehavior>
                                                <a onClick={toggleNavbar} className="nav-link">
                                                    PROGRAMA
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/patrocinadores" activeClassName="active-link" passHref={true} legacyBehavior>
                                                <a onClick={toggleNavbar} className="nav-link">PATROCINADORES</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active-link" passHref={true} legacyBehavior>
                                                <a onClick={toggleNavbar} className="nav-link">REGíSTRATE</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="others-option">
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: "30px" }}>
                                        <a href="https://www.facebook.com/arioacgdl?mibextid=ZbWKwL" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/facebook.png" alt="Facebook" width={35} height={35} />
                                        </a>
                                        <a href="https://www.instagram.com/arioacgdl?igsh=Z2YxemFpcTc2d3Zn" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/instagram.png" alt="Instagram" width={35} height={35} />
                                        </a>
                                   {/* Este es un comentario para borrar Youtube
                                        <a href="https://www.youtube.com/@maquilasysuplementos" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/youtube.png" alt="YouTube" width={35} height={35} />
                                        </a>
                                    */}
                                        <a href="https://www.linkedin.com/company/arioac/mycompany/" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/linkedin.png" alt="Linkedin" width={35} height={35} />
                                        </a>
                                        <a href="https://www.tiktok.com/@arioac?_t=8lTOZbPZmB4&_r=1" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/tiktok.png" alt="Tiktok" width={35} height={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Navbar;