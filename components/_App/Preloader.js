import React from 'react';

const Preloader = () => {
    return (
        <div className="loader-wrapper" style={{background: '#000'}}>
            <div className="lds-roller">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
};

export default Preloader;
