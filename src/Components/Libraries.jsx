import React from 'react'
import styled from 'styled-components';

import biblioteca1 from '../Img/imageLibraries/biblioteca1.jpg';
import biblioteca2 from '../Img/imageLibraries/biblioteca2.jpg';
import biblioteca3 from '../Img/imageLibraries/biblioteca3.jpg';
import biblioteca4 from '../Img/imageLibraries/biblioteca4.jpg';
import biblioteca5 from '../Img/imageLibraries/biblioteca5.jpg';
import biblioteca6 from '../Img/imageLibraries/biblioteca6.jpg';
import biblioteca7 from '../Img/imageLibraries/biblioteca7.jpg';
import biblioteca8 from '../Img/imageLibraries/biblioteca8.jpg';
import biblioteca9 from '../Img/imageLibraries/biblioteca9.jpg';
import biblioteca10 from '../Img/imageLibraries/biblioteca10.jpg';
import '../Css/estilosLibraries.css';

const StyledH1 = styled.h1`
text-align:center;
font-family:'Playfair Display SC',serif;
`;

const Libraries = () => {
  return (
    <div>
      <StyledH1>bibliotecas del mundo</StyledH1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active indicator" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="indicator" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="indicator" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={biblioteca1} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trinity College de Dublín</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca2} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>El Diamante Negro en Copenhague</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca3} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca Pública de Estocolmo</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca4} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nueva Biblioteca Alexandrina de Alejandría</h5>

            </div>
          </div>

          <div className="carousel-item">
            <img src={biblioteca5} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>biblioteca pública de Nueva York</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca6} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca de la Universidad Humboldt en Berlín</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca7} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca Apostólica Vaticana Ciudad del Vaticano</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca8} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca Pública de Trømso</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca9} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca de la Basílica de San Francisco Lima</h5>

            </div>
          </div>
          <div className="carousel-item">
            <img src={biblioteca10} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Biblioteca Nacional de Praga</h5>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev controls" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next controls" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Libraries
