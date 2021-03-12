import React, { useEffect } from 'react'
// import ImgFont from '../Img/motorcycle-slider-1-motostring.jpg';
import SectionFont from './SectionFont';

import '../Css/estilonav.css';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const ContainerUl = styled.ul`
position: relative;
top: 0em;
li{
  font-size: 1.2em;
}
a{
  text-decoration:none;
  color:white;
}
`;

const ContainerTitle = styled.div`
  text-align: center;
  color: #ffffff;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    color:white;
    font-size: 3em;
    opacity: 10;
    margin-top: 0.3em;
    text-shadow: 1px 2px 11px rgb(0.1, 0.1, 0.1, 5);
    text-decoration: none;
  }
  p{
    font-size:1.3em;
    font-family:'Playfair Display SC',serif;
      text-shadow: 1px 2px 11px rgb(0.1, 0.1, 0.1, 5);
  }
`;
const Header = ({location}) => {
  
  let {pathname} = location;

  useEffect(() => {
    document.querySelector("header").scrollIntoView({block:"start",behavior:"smooth"})
    if (pathname === "/libraryApp/"){
      setTimeout(() => {
        document.querySelector(".title-sistem").style.display = "block"
      }, 900);
    }else{
      document.querySelector("header").style.height = "85px"
    }
  },[pathname])

  return (
    <header className="header">
        <nav className="navbar">
          <ContainerUl>
          <li><Link to="/libraryApp"> Inicio</Link> </li>
          <li><Link to="/history">Historia</Link> </li>
          <li><Link to="/authors"> Autores</Link> </li>
           <li><Link to="/news"> Noticias</Link> </li>
          </ContainerUl>
        </nav>
      {(pathname === "/libraryApp/") ?
          (<>
            <SectionFont />
            <div className="container-font">
              <ContainerTitle className="title-sistem">
                <h1>Biblioteca Publica la Merced</h1>
              <p>Totogalpa Madriz</p>
                {(pathname === "/books") ? null : <Link to={"/books"} className="btn btn-outline-secondary btn-books">Encuentra tu Libro</Link>}
              </ContainerTitle>
            </div>
          </>
        )
      : null }
      
    </header>
  );
}

export default withRouter(Header)
