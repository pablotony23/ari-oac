import React, { useState, useEffect } from "react";
import patrocinadores from "../../utils/data/patrocinadores.json"; 
import Link from "next/link";
import Image from "next/image";


const SponsorLinks = ({ links }) => (
  <div className="member-social-links gap-2 fs-3 d-flex justify-content-center">
    {links.map(({ url, icon, alt, type }, idx) => (
      <Link href={url} target="_blank" key={type || idx} aria-label={alt}>
        <img src={icon} alt={alt} style={{ width: 32, height: 32 }} />
      </Link>
    ))}
  </div>
);
const SponsorCard = ({ sponsor }) => (
  <div className="col-12 col-md-6 col-lg-4">
    <div className="member">
      <div className="member-img">
        <img src={sponsor.image} alt={sponsor.name} />
        <div className="member-overlay">
          <div className="member-social-links gap-2 fs-3 d-flex justify-content-center">
            <SponsorLinks links={sponsor.links} />
          </div>
        </div>
      </div>
    </div>
    
  </div>
);

export default function PatrocinadoresPage() {
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
  return (
    <section id="team4" className="team team-4 bg-white pt-0 pb-0 mt-3">
      <div className="container-fluid pr-0 pl-0">
        <div className="row text-center mx-auto">
          {patrocinadores.map((sponsor, idx) => (
            <SponsorCard sponsor={sponsor} key={idx} />
          ))}
        </div>
      </div>
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
                src="/img/logoarioac.png"
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
              {/* 	<a
							href="https://www.tiktok.com/@arioac"
							target="_blank"
							className="element-button"
							>
							
							</a>  */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
