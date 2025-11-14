import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Section = () => {
  return (
  <React.Fragment>
    
    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>¡MOTIVOS PARA NO PERDÉRTELO!</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>5 años celebrando RH WEEK</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '17px', textAlign: 'justify' }} className="list-paragraph">
                 1. Encuentro de vinculación de Recursos Humanos e intercambio de experiencias y conocimientos.<br/>
                 2. Espacio de conferencias prácticas, modelos y networking.<br/>
                 3. Desarrollo y generación de estrategias en Recursos Humanos.<br/>
                 4. Mejoramiento del desempeño en la estrategia del Capital Humano.
              </p>

            </div>
            <div className='botonSeccionTop' style={{marginTop: "30px"}}>
              <Link href="/servicios" passHref={true} legacyBehavior>
                <a className="default-btn">
                  VER PROGRAMA
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12">
        <div>
          <div>
            <div>
              <div>
                <Image width={960} height={680} src='/img/section/motivosParaNoPerdertelo.png' alt='arioac' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gray-background" style={{marginTop: "30px", marginBottom: "30px"}}>
  <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
    <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
      <div style={{padding: "0", margin: "0"}}>
        <div style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", marginBottom: "auto"}}>
              <Image width={960} height={680} src='/img/section/20Coference.png' alt='arioac' loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-7 col-sm-12">
      <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
        <div className='seccionTitle'>
          <div>
            <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>
                                                                                  20
                                                                                  HR
                                                                                  CONFERENCE TALKS,
                                                                                  20 ESPECIALISTAS
                                                                                  DE DIVERSAS
                                                                                  PARTES DEL MUNDO
                                                                                  Y DE MÉXICO</h1>
            <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
            <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>6 países participantes, Espacio de interacción y vinculación ejecutiva, Problemática, sinergia y networking, Metrics & Analytics. </h3>
            <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
          </div>
          <div>
            <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}> 
            <img width="48" height="48" src="https://img.icons8.com/emoji/48/mexico-emoji.png" alt="mexico-emoji"/> México <br/>
            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=Halaubi1vvya&format=png&color=000000" alt="eua-emoji"/> E.U.A <br/>
            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=oBEl4fKQY7gE&format=png&color=000000" alt="chile-emoji"/> Chile <br/>
            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=ZGEFKpJoPdJQ&format=png&color=000000" alt="españa-emoji"/> España <br/>
            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=ibqKXaaqCBHo&format=png&color=000000" alt="argentina-emoji"/> Argentina <br/>
            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=15495&format=png&color=000000" alt="colombia-emoji"/> Colombia <br/>
            </p>
           </div>

          <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
            <Link href="/empresa" passHref={true} legacyBehavior>
                <a className="default-btn">
                    VER CONFERENCIAS
                </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};

export default Section;