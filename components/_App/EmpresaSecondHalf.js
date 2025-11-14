import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const EmpresaSecondHalf = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/img/section/1.jpg",
    "/img/section/2.jpg",
    "/img/section/3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia este valor (en milisegundos) para ajustar el intervalo de cambio de imagen

    return () => clearInterval(interval);
  }, [images.length]);

  return <React.Fragment>

    <div className="element-container">
      <section className="element-section">
        <div className="element-image">
          <Image
            width={1920}
            height={700}
            className="imageYoutube"
            decoding="async"
            src={images[imageIndex]}
            alt="suplementos-alimenticios-youtube"
            loading="lazy"
          />
          <div
            className="element-content"
            style={{
              textAlign: "centert",
              maxWidth: "100%",
              marginRight: "30px",
            }}
          >
            <h3
              className="titleYoutube"
              style={{
                color: "#000",
                marginBottom: "5px",
                marginTop: "50px",
              }}
            ></h3>
            <img
              src="/img/redes-sociales/tik-02.svg"
              alt="youtube"
              width="300px"
              height="100px"
            />
            <p
              className="noneYoutube"
              style={{
                textAlign: "left",
                fontFamily: "Montserrat, sans-serif",
                marginTop: "20px",
                marginBottom: "40px",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <a
              href="https://www.tiktok.com/@arioac"
              target="_blank"
              className="element-button"
            >
              Visitar TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>
}

export default EmpresaSecondHalf;