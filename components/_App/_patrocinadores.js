import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiciosPage = () => {
	const [filtro, setFiltro] = useState('*');
  
	const handleClick = (e, filter) => {
        e.preventDefault();
        setFiltro(filter);
        //console.log("Funciona correctamente");
      
        // Aplicar clase 'active-filter' al filtro seleccionado
        const links = document.querySelectorAll('.portfolio-filter li a');
        links.forEach(link => {
          link.classList.remove('active-filter');
        });
        e.target.classList.add('active-filter');
      
        // Mostrar las imágenes correspondientes al filtro seleccionado y ocultar las demás
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
          if (filter === '*' || item.classList.contains(filter.substr(1))) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      };

  return (
  <React.Fragment>

<section id="portfolio" className="portfolio portfolio-gallery portfolio-5col">
    <div className="container-fluid pr- pl-5">
        <div className="row portfolio-row">
            <div className="col-xs-12 col-sm-12 col-md-12 portfolio-filter" style={{cursor: "pointer"}}>
            <p className="heading--subtitle"></p>
            <h2 className="heading--title">CONFERENCIAS POR DÍA</h2>
                <ul className="list-inline mb-0">
             {/*   <li><a className={filtro === '*' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '*')}>Conferencias</a></li>   */} 
                <li><Link className={filtro === '.filter-17Junio' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '.filter-17Junio')}>17 Junio</Link></li>
                <li><Link className={filtro === '.filter-18Junio' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '.filter-18Junio')}>18 Junio</Link></li>
                <li><Link className={filtro === '.filter-19Junio' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '.filter-19Junio')}>19 Junio</Link></li>
                <li><Link className={filtro === '.filter-20Junio' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '.filter-20Junio')}>20 Junio</Link></li>
                <li><Link className={filtro === '.filter-21Junio' ? 'active-filter' : ''} href="#" onClick={(e) => handleClick(e, '.filter-21Junio')}>21 Junio</Link></li>
                </ul>
            </div>
        </div>

        {/* Contenedor de las imágenes */}
        <div className="row portfolio-items filter-conferencias">
            {/* Imágenes */}
            <div className="col-xs-12 col d-flex flex-wrap justify-content-center">
                {/* Primera imagen */}
                <div className="portfolio-item filter-17Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
                                        <h4><a href="#">Estrategias en LinkedIn: Potenciando tu marca empleadora y personal</a></h4>
										<h5><a href='#'>Dunnia Vargas González, 9 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Repite este bloque para cada imagen */}

				<div className="portfolio-item filter-17Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Tecnología e Innovación en la Gestión del Talento</a></h4>
									<h5><a href='#'>Juan David Gómez, 10 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-17Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">De la adolescencia a la madurez organizacional: cómo crear ambientes con un mayor nivel de consciencia</a></h4>
									<h5><a href='#'>Héctor Munguía, 11 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-17Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Mejora la experiencia en tus procesos de atracción y selección de talento operativo</a></h4>
									<h5><a href='#'>Genaro Hurtado, Director General Brivé y Ángel Nava, Director de Negocios Brivé, 12 PM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-18Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Integración de Calidad, Seguridad y Bienestar</a></h4>
									<h5><a href='#'>Erika Chavero, 9 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-18Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Empoderando Voces: Comunicación Asertiva en el Liderazgo Femenino</a></h4>
									<h5><a href='#'>Valeria Ramírez, 10 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-18Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Diversidad e inclusión en México desafio organizacional</a></h4>
									<h5><a href='#'>Jerico Jaramillo, 11 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-18Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Tendencias de Capacitación y Desarrollo Humano</a></h4>
									<h5><a href='#'>Fernando Hernández Chávez, 11:30 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			 	<div className="portfolio-item filter-18Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Bienestar financiero de los colaboradores en México</a></h4>
									<h5><a href='#'>Jimena Flores, 12 PM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

				<div className="portfolio-item filter-19Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">People Analytics - El Futuro de RRHH</a></h4>
									<h5><a href='#'>Alberto Murillo, 9 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-19Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">¿Qué pueden enseñarnos los niños sobre la colaboración y el propósito en las empresas?</a></h4>
									<h5><a href='#'>Andrea Vega, 10 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-19Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Herramientas para la gestión de la Diversidad LGBTI+: Indicadores para una mejor cultura</a></h4>
									<h5><a href='#'>Emilio Maldonado Quevedo, 11 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-19Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Liderando a las nuevas generaciones en el panorama laboral actual</a></h4>
									<h5><a href='#'>Denisse Linares Ahuejote, 12 PM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-20Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Quédate Conmigo. Las 3 Principales Causas de la Rotación de Personal</a></h4>
									<h5><a href='#'>Daniel Garza Leal, 9 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-20Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">La Inteligencia Artificial en tu trabajo futuro</a></h4>
									<h5><a href='#'>Yami Hagg, 10 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-20Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Creando Empresas Magnéticas, atrae y fideliza el talento que necesita tu organización</a></h4>
									<h5><a href='#'>Rubén Montesinos, 11 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-20Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">People Analytics: Análisis de datos aplicado a Recursos Humanos</a></h4>
									<h5><a href='#'>Marcos Alonso, 12 PM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-21Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">El liderazgo disruptivo que transforma: Inspirar, no intimidar</a></h4>
									<h5><a href='#'>Pablo Martínez del Castillo, 9 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-21Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">El microlearning salvación de R.H. y todos los demás</a></h4>
									<h5><a href='#'>Humberto Gutiérrez, 10 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-21Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Bienestar Integral en el Lugar de Trabajo: Estrategias Holísticas para Optimizar el Desempeño y la Salud de los Empleados</a></h4>
									<h5><a href='#'>Emmanuel Cervantes Rodríguez, 11 AM</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			{/* 	<div className="portfolio-item filter-21Junio">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>Brivé, 11:30 AM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                    <div className="portfolio--pdf">
                                        <a href="/path/to/your/file.pdf" className="btn btn-primary" target="_blank">Descargar material</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>

        <button  style={{alignItems: "center", margin: "0 auto", justifyContent: "center", display: "flex"}}>
                <a className="btn btn--primary" href="https://bit.ly/HRWEEK2024" target="_blank" style={{alignItems: "center", justifyContent: "center", fontFamily: "Roboto, sans-serif"}}>ÚNETE EN VIVO</a>
        </button>
</section>


    {/* VIDEO SECTION */}

  <div className="video-container" style={{marginTop: "20px"}}>
  {/* Video de fondo */}
    <video autoPlay loop muted playsInline className="background-video">
      <source src="/uploads/maquilas-y-suplementos.mp4" type="video/mp4" />
      <source src="/uploads/maquilas-y-suplementos.webm" type="video/webm" />
      <source src="/uploads/maquilas-y-suplementos.ogg" type="video/ogg" />
      Tu navegador no soporta el elemento de video.
    </video>
    {/* Fondo oscuro semitransparente */}
    <div className="video-overlay"></div>
    {/* Contenido */}
    <div className="content">
      <div className="title-container">
        <h3 className="title"></h3>
      </div>
      <div className="subheading">
        <h1 className="subheading-text"></h1>
      </div>
      <div className="description">
        <p className="description-text"></p>
      </div>
      <div className="button">
        <a href="https://share.hsforms.com/1HupIgxJyRuK3lu6qDPtB7gq5t92" target="_blank" className="button-link">Inscribirse</a>
      </div>
    </div>
  </div>

    </React.Fragment>
  )
}

export default ServiciosPage