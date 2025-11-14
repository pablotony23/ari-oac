import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, imgClass, parrafo }) => {
    return (
        <div className={`page-title-area ${imgClass}`}>
            <div className="container">
                <div className="page-title-content" style={{paddingTop: "100px"}}>
                    <h1 className='titleBanner' style={{fontSize: "50px", color: "#fff"}}>{pageTitle}</h1>
                   
                    <p className='parrafoBanner' style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "normal", marginLeft: "200px", marginRight: "200px", textAlign: "center", color: "#fff", fontSize: "16px", textTransform: "initial", marginTop: "20px"}}>{parrafo}</p>

                    <ul>
                        <li>
                            <Link href={homePageUrl} passHref={true} legacyBehavior>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li className="active">{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;