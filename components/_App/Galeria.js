import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const Galeria = () => {
	const countingRefPaises = useRef(null);
	const countingRefSpeakers = useRef(null);
	const countingRefDays = useRef(null);
	const countingRefPremios = useRef(null);
	const countingRefConfe = useRef(null);
	const countingRefAño = useRef(null);
  
	useEffect(() => {
	  const startCounting = (countingElement, target) => {
		let count = 0;
  
		const timer = setInterval(() => {
		  count++;
		  countingElement.text(count);
		  if (count === target) clearInterval(timer);
		}, 200); // Adjust the speed of counting here
	  };
  
	  startCounting($(countingRefSpeakers.current), 20);
	  startCounting($(countingRefPremios.current), 15);
	  startCounting($(countingRefConfe.current), 20);
	}, []);

	useEffect(() => {
		const startCountingSlower = (countingElement, target) => {
		  let count = 0;
	
		  const timer = setInterval(() => {
			count++;
			countingElement.text(count);
			if (count === target) clearInterval(timer);
		  }, 850); // Adjust the speed of counting here
		};
	
		startCountingSlower($(countingRefPaises.current), 6);
		startCountingSlower($(countingRefDays.current), 5);
		startCountingSlower($(countingRefAño.current), 5);
	  }, []);

  return (
    <React.Fragment>

		<section id="counter3" className="counter counter-dark bg-overlay bg-overlay-dark2 bg-section text-center" style={{backgroundColor: "#061F3A"}}>
			
		<div className="container mx-auto">
		<div className="row justify-content-center">
					
			<div className="col-xs-6 col-sm-2 col-md-2">
			<div className="count-box text-center">
				<div className="count-icon">
					<img className='imagesCounter' src='/img/iconosCounter/paises.svg' alt='paises' />
				</div>
				<div className="counting" ref={countingRefPaises}></div>
				<div className="count-title">Países Participantes</div>
			</div>
			</div>

			<div className="col-xs-6 col-sm-2 col-md-2">
				<div className="count-box text-center">
					<div className="count-icon">
						<img className='imagesCounter' src='/img/iconosCounter/speakers.svg' alt='speakers' />
					</div>
					<div className="counting" ref={countingRefSpeakers}></div>
					<div className="count-title">Speakers Internacionales</div>
				</div>
			</div>

			<div className="col-xs-6 col-sm-2 col-md-2">
				<div className="count-box text-center">
					<div className="count-icon">
						<img className='imagesCounter' src='/img/iconosCounter/dias.svg' alt='dias' />
					</div>
					<div className="counting" ref={countingRefDays}></div>
					<div className="count-title">Días de Conocimiento y Networking</div>
				</div>
			</div>

			<div className="col-xs-6 col-sm-2 col-md-2">
				<div className="count-box text-center">
					<div className="count-icon">
						<img className='imagesCounter' src='/img/iconosCounter/premios.svg' alt='premios' />
					</div>
					<div className="counting" ref={countingRefPremios}></div>
					<div className="count-title">Participa por Premios</div>
				</div>
			</div>

			<div className="col-xs-6 col-sm-2 col-md-2">
				<div className="count-box text-center">
					<div className="count-icon">
						<img className='imagesCounter' src='/img/iconosCounter/conferencias.svg' alt='conferencias' />
					</div>
					<div className="counting" ref={countingRefConfe}></div>
					<div className="count-title">Conferencias Virtuales</div>
				</div>
			</div>

			<div className="col-xs-6 col-sm-2 col-md-2">
				<div className="count-box text-center">
					<div className="count-icon">
						<img className='imagesCounter' src='/img/iconosCounter/años.svg' alt='años' />
					</div>
					<div className="counting" ref={countingRefAño}></div>
					<div className="count-title">Años Celebrando RH WEEK</div>
				</div>
			</div>


			</div>
		</div>
		</section>
    </React.Fragment>
  )
}

export default Galeria