import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <a href="mailto:hello@ston.com">
                                    <i className="bx bx-envelope"></i>
                                    Email: hello@ston.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+61-821-456">
                                    <i className="bx bx-phone-call"></i>
                                    Call Us: +61-821-456
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeader;