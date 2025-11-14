import React, { useState, useEffect, useRef } from 'react';

const WhatsAppIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsHovered(false); // Oculta el mensaje al hacer scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+523315194508';
    const message = 'Hola, quiero más información.';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={whatsappButtonRef}
      className="whatsapp-icon"
      onClick={handleWhatsAppClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '40px',
        zIndex: 1000,
      }}
    >
      <img
        src="/img/whats.svg"
        alt="WhatsApp"
        className='whatsapp-image'
        style={{
          borderRadius: '50%',
          background: "#fff",
          cursor: 'pointer',
        }}
        priority="true"
      />
      {isHovered && (
        <div className='mensaje-whats' style={{ 
          position: 'absolute', 
          bottom: '12px', 
          right: '60px',
          backgroundColor: '#25D366', 
          padding: '5px', 
          borderRadius: '10px',
          color: '#fff',
          display: 'inline-block', /* Mostrar como bloque en línea */
          width: '100px', /* Ajustar el ancho máximo del contenedor */
        }}>
          <p className='texto-mensaje-whats' style={{ 
            margin: 0,
            whiteSpace: 'nowrap', /* Evitar que el texto se rompa en varias líneas */
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            textAlign: "center",
            fontSize: "14px",
          }}>Whats App</p>
          <div style={{
            position: 'absolute', /* Posicionar absolutamente el triángulo */
            bottom: '-10px', /* Ajustar posición vertical */
            right: '0', /* Alinear a la derecha */
            borderTop: '20px solid transparent', /* Triángulo transparente en la parte superior */
            borderRight: '15px solid #25D366', /* Lado derecho del triángulo */
            borderBottom: '15px solid transparent', /* Triángulo transparente en la parte inferior */
            borderRadius: "5px",
          }}></div>
        </div>

      )}
    </div>
  );
};

export default WhatsAppIcon;
