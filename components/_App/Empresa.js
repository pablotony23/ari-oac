import React, { useState, useEffect, useRef, useCallback } from "react";
import conferencistasFila1 from "../../utils/data/conferencistas.json";

const ConferencistaCard = ({ imgSrc, name, title, company, overlayText }) => {
  return (
    <div className="new-carousel-card">
      <div className="new-carousel-card-img-wrapper">
        <img src={imgSrc} alt={name} className="new-carousel-card-img" />
        <div className="new-carousel-card-overlay">
          <div className="new-carousel-card-overlay-content">
            <p>
              {overlayText || '"Pendiente"'}
            </p>
          </div>
        </div>
      </div>
      <div className="new-carousel-card-info">
        <h5 className="new-carousel-card-name">{name}</h5>
        <h6 className="new-carousel-card-title">{title}</h6>
        <h7 className="new-carousel-card-company">{company}</h7>
      </div>
    </div>
  );
};

const ModernCarousel = ({ items, itemsVisible = 4, carouselId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const trackRef = useRef(null);
  const firstItemRef = useRef(null);

  const calculateItemWidth = useCallback(() => {
    if (firstItemRef.current) {
      const style = window.getComputedStyle(firstItemRef.current);
      const marginRight = parseFloat(style.marginRight) || 0;
      const marginLeft = parseFloat(style.marginLeft) || 0;
      setItemWidth(firstItemRef.current.getBoundingClientRect().width + marginLeft + marginRight);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(calculateItemWidth, 50);
    window.addEventListener("resize", calculateItemWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateItemWidth);
    }
  }, [calculateItemWidth, items]);

  useEffect(() => {
    if (trackRef.current && itemWidth > 0) {
      const offset = currentIndex * itemWidth;
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex, itemWidth]);

  if (!items || items.length === 0) {
    return <p>No hay elementos para mostrar.</p>;
  }

  const numTotalItems = items.length;
  // Cuantos "pasos" de scroll hay. Si se muestran 3 items, y hay 5 items:
  // Paso 0: items 1,2,3
  // Paso 1: items 2,3,4
  // Paso 2: items 3,4,5
  // Entonces, numScrollSteps es 5 - 3 + 1 = 3. Índices 0, 1, 2.
  const numScrollSteps = Math.max(1, numTotalItems - itemsVisible + 1);
  // El último índice válido para currentIndex
  const maxIndex = numScrollSteps - 1;


  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Ajuste para que `itemsVisible` se use en la clase `new-carousel-item`
  // Esto permite que el CSS controle cuántos ítems se muestran visualmente.
  // La lógica de JS (numScrollSteps) debe estar al tanto de esto.
  // Por ahora, asumimos que CSS está alineado con `itemsVisible`.

  return (
    <div className="new-carousel-container">
      <div className="new-carousel-viewport">
        <div className="new-carousel-track" ref={trackRef}>
          {items.map((item, index) => (
            <div
              key={`${carouselId}-item-${item.id || index}`}
              className={`new-carousel-item new-carousel-item-visible-${itemsVisible}`} // Clase para controlar visibilidad
              ref={index === 0 ? firstItemRef : null}
            >
              <ConferencistaCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {numTotalItems > itemsVisible && ( // Solo mostrar controles si hay más items que los visibles a la vez
        <>
          <div className="new-carousel-arrow-controls">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="new-carousel-arrow prev"
              aria-label="Anterior"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="new-carousel-arrow next"
              aria-label="Siguiente"
            >
              ❯
            </button>
          </div>

          <div className="new-carousel-dots-container">
            {Array.from({ length: numScrollSteps }).map((_, idx) => (
              <button
                key={`${carouselId}-dot-${idx}`}
                className={`new-carousel-dot ${currentIndex === idx ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};


// --- Componente Principal: Empresa ---
const Empresa = () => {
  const ITEMS_PER_VIEW = 3; // Configura cuántos ítems quieres visibles por defecto

  return (
    <React.Fragment>
      {/* Estilos Globales para el Carrusel */}
      <style jsx global>{`
        /* --- Estilos para ConferencistaCard --- */
        .new-carousel-card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          text-align: left;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .new-carousel-card-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3.2; /* Un poco más alto */
          overflow: hidden;
        }

        .new-carousel-card-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-out;
        }

        .new-carousel-card:hover .new-carousel-card-img {
          transform: scale(1.03);
        }

        .new-carousel-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 80%);
          opacity: 0;
          transition: opacity 0.3s ease-out;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
        }

        .new-carousel-card:hover .new-carousel-card-overlay {
          opacity: 1;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.3) 100%);
        }

        .new-carousel-card-overlay-content p {
          color: white;
          font-size: 16px;
          text-align: center;
          margin: 0;
        }

        .new-carousel-card-info {
          padding: 12px 15px;
          flex-grow: 1;
        }

        .new-carousel-card-name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: #2c3e50; /* Un azul oscuro */
          line-height: 1.3;
        }

        .new-carousel-card-title {
          font-size: 0.8rem;
          color: #34495e; /* Un gris azulado */
          margin-bottom: 4px;
          line-height: 1.4;
          min-height: 3.2em; /* Aproximadamente 2-3 líneas */
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limita a 3 líneas */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .new-carousel-card-company {
          font-size: 0.75rem;
          color: #7f8c8d; /* Un gris claro */
          font-style: italic;
        }


        /* --- Estilos del Carrusel Moderno --- */
        .new-carousel-container {
          width: 100%;
          position: relative;
          margin-bottom: 40px;
        }

        .new-carousel-viewport {
          overflow: hidden;
          width: 100%;
        }

        .new-carousel-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .new-carousel-item {
          min-width: 0;
          box-sizing: border-box;
          padding: 0 10px; /* Espacio entre items (gutter) */
        }
        
        /* Control de cuántos items son visibles */
        .new-carousel-item-visible-1 { flex: 0 0 100%; }
        .new-carousel-item-visible-2 { flex: 0 0 50%; }
        .new-carousel-item-visible-3 { flex: 0 0 calc(100% / 3); }
        .new-carousel-item-visible-4 { flex: 0 0 25%; }
        /* ...y así sucesivamente si necesitas más opciones */


        /* --- Controles de Flechas --- */
        .new-carousel-arrow-controls {
          display: flex;
          justify-content: center; /* Centra las flechas si están debajo */
          align-items: center;
          margin-top: 15px; /* Espacio entre track y flechas */
        }

        /* Si quieres las flechas superpuestas, usa esto y ajusta: */
        /*
        .new-carousel-arrow-controls {
          position: absolute;
          top: calc(50% - 30px); // Ajusta según la altura de la tarjeta y flechas
          left: -15px; // Para que estén un poco fuera
          right: -15px;
          width: calc(100% + 30px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none; // Para que no bloqueen
        }
        .new-carousel-arrow { pointer-events: all; } // Reactivar para las flechas
        */
        

        .new-carousel-arrow {
          background-color: #fff;
          border: 1px solid #ccc;
          color: #333;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 8px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          transition: all 0.2s ease-in-out;
        }

        .new-carousel-arrow:hover:not(:disabled) {
          background-color: #f1f1f1;
          transform: scale(1.05);
        }

        .new-carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: scale(1);
        }


        /* --- Controles de Puntos --- */
        .new-carousel-dots-container {
          text-align: center;
          padding-top: 20px;
        }

        .new-carousel-dot {
          display: inline-block;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #cccccc;
          border: none;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .new-carousel-dot:hover {
          background-color: #aaaaaa;
        }

        .new-carousel-dot.active {
          background-color: #007bff; /* Tu color primario */
          transform: scale(1.2);
        }
        
        /* --- Media Queries para Responsividad --- */
        @media (max-width: 991.98px) { /* Tablets (Bootstrap md breakpoint) */
          .new-carousel-item-visible-3 { flex: 0 0 50%; } /* Muestra 2 en tablet si eran 3 */
          .new-carousel-item-visible-4 { flex: 0 0 50%; } /* Muestra 2 en tablet si eran 4 */
          
          /* Si quieres una configuración diferente para ITEMS_PER_VIEW en tablet, 
             tendrías que pasarla como prop y tener clases como .new-carousel-item-visible-tablet-2 */
        }

        @media (max-width: 767.98px) { /* Móviles (Bootstrap sm breakpoint) */
          .new-carousel-item { /* Aplica a todos por defecto */
            padding: 0 5px; /* Menos padding en móvil */
          }
          .new-carousel-item-visible-2,
          .new-carousel-item-visible-3,
          .new-carousel-item-visible-4 { 
            flex: 0 0 100%; /* Muestra 1 en móvil */
          }
          .new-carousel-card-name { font-size: 0.95rem; }
          .new-carousel-card-title { font-size: 0.75rem; min-height: 3em; -webkit-line-clamp: 2; }
          .new-carousel-arrow { width: 36px; height: 36px; font-size: 1rem;}
        }
      `}</style>

      <section id="team2-row1" className="team-2 team bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-2 text-center mb-50"> {/* Tus clases originales */}
                <h2 className="heading--title">CONFERENCISTAS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <ModernCarousel
                carouselId="fila1"
                items={conferencistasFila1}
                itemsVisible={ITEMS_PER_VIEW}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team2-row2" className=" bg-white" style={{ marginTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-2 text-center mb-50"> {/* Tus clases originales */}
                {/* <h2 className="heading--title">MÁS CONFERENCISTAS</h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Empresa;