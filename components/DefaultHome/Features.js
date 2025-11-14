import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="feature-area pb-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="col-lg-12">
                    <div className="feature-wrap d-flex justify-content-between align-items-center">
                        <div className="single-feature">
                            <p style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: "16px",
                                fontWeight: 600,
                                textAlign: "justify"
                            }}>¡Únete al RH WEEK y celebra con nosotros 4 años de excelencia en recursos humanos! Descubre las últimas tendencias y mejores prácticas en la gestión del talento. Con la participación de reconocidos speakers internacionales, exploraremos temas actuales que están transformando el mundo de los recursos humanos. Además, tendrás la oportunidad de ganar 10 premios exclusivos. ¡No te lo pierdas y sé parte de este emocionante evento en línea!</p>
                        </div>
                        <div className="d-flex mx-4">
                            <Link href="/empresa" passHref={true} legacyBehavior>
                                <a className="default-btn2">
                                    Conócenos
                                </a>
                            </Link>
                            <span className="mx-3"></span> {/* Espacio entre los botones */}
                            <Link href="/servicios" passHref={true} legacyBehavior>
                                <a className="default-btn3">
                                    Ver EVENTOS
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
