import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);

    const handleMouseEnter = (link) => {
        setActiveLink(link);
    };

    const handleMouseLeave = () => {
        setActiveLink(router.pathname);
    };

    return (
        <React.Fragment>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Primer código */}
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="footer-widget">
                                <div className="container">
                                    <div className="row align-items-center">
                                        {/* Logotipo y Enlaces */}
                                        <div className="col-xs-12 col-sm-12 col-md-14">
                                            <div className="footer--widget-title d-flex justify-content-between align-items-end">
                                                {/* Logotipo */}
                                                <div>
                                                    <Link href="/" passHref={true} legacyBehavior>
                                                        <a className="footer-brand">
                                                            <img src='/img/hrlogo2.png' alt="arioac" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                {/* Enlaces */}
                                                <div className="d-flex">
                                                    <Link href="/" passHref={true} legacyBehavior>
                                                        <h3 className='nomargin' style={{ color: activeLink === '/' ? "#1C9CD9" : "#fff", margin: "0", fontSize: "18px", fontWeight: "600" }}>
                                                            <a
                                                                style={{ cursor: "pointer" }}
                                                                onMouseEnter={() => handleMouseEnter('/')}
                                                                onMouseLeave={handleMouseLeave}
                                                            >
                                                                HR WEEK
                                                            </a>
                                                        </h3>
                                                    </Link>
                                                    
                                                    <div className="d-flex">
                                                        <Link href="/empresa" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/empresa' ? "#1C9CD9" : "#fff", margin: "0 20px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/empresa')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    CONFERENCISTAS
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="d-flex">
                                                        <Link href="/servicios" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/servicios' ? "#1C9CD9" : "#fff", marginRight: "40px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/servicios')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    PROGRAMA
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="d-flex">
                                                        <Link href="/patrocinadores" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/patrocinadores' ? "#1C9CD9" : "#fff", marginRight: "60px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/patrocinadores')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    PATROCINADORES
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="d-flex">
                                                        <Link href="/contact" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/contact' ? "#1C9CD9" : "#fff", margin: "0 -20px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/contact')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    REGÍSTRATE
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo código */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xs-12 col-md-12" style={{ backgroundColor: "#333333", margin: "0 auto" }}>
                            <div className="row" style={{ padding: "0 auto", margin: "0 auto", alignItems: "center" }}>
                                <div className="col-xs-12 col-md-6 redes" style={{ marginTop: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <span style={{ color: "#fff", letterSpacing: "1px", fontSize: "16px", fontFamily: "Montserrat, sans-serif", marginBottom: "20px", textAlign: "center"}}>
                                        &copy; {currentYear} ARIOAC - Asociación de Recursos Humanos. Manuel Acuña #2760 Esq. Rubén Darío Piso 2 Despacho 204, Col. Prados Providencia C.P. 44670 Guadalajara, Jalisco Tels. (01-33)38-11-2221 Fax.(01.33)31-24-6991
                                    </span>
                                    <div style={{ position: 'absolute', left: '10px', bottom: '-45px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                                        <a href="https://www.facebook.com/arioacgdl?mibextid=ZbWKwL" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/face-02.svg" alt="Facebook" width={35} height={35} />
                                        </a>
                                        <a href="https://www.instagram.com/arioacgdl?igsh=Z2YxemFpcTc2d3Zn" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/insta-02.svg" alt="Instagram" width={35} height={35} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/arioac/mycompany/" target='_blank' style={{ margin: "-5px 5px"}}>
                                            <Image src="/img/redes-sociales/link-02.svg" alt="Linkedin" width={45} height={45} />
                                        </a>
                                        <a href="https://www.tiktok.com/@arioac?_t=8lTOZbPZmB4&_r=1" target='_blank' style={{ margin: '0 10px' }}>
                                            <Image src="/img/redes-sociales/tik-02.svg" alt="Tiktok" width={35} height={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </React.Fragment>
    );
}

export default Footer