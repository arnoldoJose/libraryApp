import React from 'react'
import styled from 'styled-components';
import '../Css/estilosLibraries.css';

const StyledH1 = styled.h1`
text-align:center;
font-family:'Playfair Display SC',serif;
`;
let imagesLibrary = 
[
  { name: 'Trinity College de Dublín', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg/1191px-Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg'},
  { name: 'El Diamante Negro en Copenhague', image: 'https://aws.traveler.es/prod/designs/v1/assets/630x418/61459.jpg'},
  { name: 'Biblioteca Pública de Estocolmo', image: 'https://pbs.twimg.com/media/EeC0LV9XgAE44kZ?format=jpg&name=900x900'},
  { name: 'Nueva Biblioteca Alexandrina de Alejandría', image: 'https://sarrauteducacion.com/wp-content/uploads/2020/08/nueva-biblioteca-alexandrina-de-alejandria_05c56f6b_1500x998-1024x681.jpg'},
  { name: 'biblioteca pública de Nueva York', image: 'https://i1.wp.com/conocenewyork.com/wp-content/uploads/2017/11/NYPL-by-@Darwin_nyc-e1509657168776.jpg?fit=750%2C465'},
  { name: 'Biblioteca de la Universidad Humboldt en Berlín', image: 'https://sarrauteducacion.com/wp-content/uploads/2020/08/biblioteca-de-la-universidad-humboldt-en-berlin_e6f6a9d5_1500x1000-1024x683.jpg'},
  { name: 'Biblioteca Apostólica Vaticana Ciudad del Vaticano', image: 'https://i.pinimg.com/originals/a4/30/28/a43028e1bfe26a7dd32ea7c264432878.jpg'},
  { name: 'Biblioteca Pública de Trømso', image: 'https://i.pinimg.com/originals/6b/30/79/6b3079c3dd4e9132024e00c398c3485e.jpg'},
  { name: 'Biblioteca de la Basílica de San Francisco Lima', image: 'https://c2.staticflickr.com/6/5014/5531523728_362c3b0eea_b.jpg'},
  { name: 'Biblioteca Nacional de Praga', image: 'https://www.lr21.com.uy/wp-content/uploads/2015/10/biblioteca-praga2.jpg'}
]
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
            <img src={imagesLibrary[0].image} className="d-block w-100" alt="..." height="300" />
            <div className="carousel-caption d-none d-md-block">
              <h5>{imagesLibrary[0].name}</h5>

            </div>
          </div>
          { imagesLibrary.map((item,index) => (
            <div className="carousel-item" key={`data-${index}`}>
              <img src={item.image} className="d-block w-100" alt="..." height="300" />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.name}</h5>

              </div>
            </div>
          ))}
          
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
