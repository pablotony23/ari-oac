import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="error-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="error-content-wrap">
                        <h1>
                            <span className="a">4</span>
                            <span className="red">0</span>
                            <span className="b">4</span>
                        </h1>
                        <h3>¡Oops! Página no encontrada pero esto es una prueba para ver si puedo subir a prod</h3>
                        <p>No se ha podido encontrar la página que buscabas.</p>

                        <Link href="/" legacyBehavior>
                            <a className="default-btn two">
                                Volver a la página de inicio
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom404;