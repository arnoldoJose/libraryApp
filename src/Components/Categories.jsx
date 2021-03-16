import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import styled  from 'styled-components';
//images
import poe from '../Svg/me-gusta.svg';
import nove from '../Svg/book.svg';
import otros from '../Svg/google-docs.svg';
import doc from '../Svg/speech-bubble.svg';

const StyledCategories = styled.div`
text-align:center;
margin:auto;
padding:auto;
margin-top:1em;
h1 {
 font-family: 'Playfair Display SC', serif;
}
`;

const ContainerCategories = styled.div`
display:flex;
justify-content: center;

.cat {margin: 2.3em;}
@media (max-width: 780px) {
  .cat{
    margin: 0.6em;
    width: 5em;
  } 

  .cat > h4 {
    font-size: 0.8em;
   
  }

  .categories-card {
    width: 5em;
    height:5em;
  }

  @media (max-width: 420px) {
    
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;

  }

};
`;



const Categories = () => {
  
  return  (
    <StyledCategories>

      <h1>categorias</h1>
      <ContainerCategories className="container">


        <div className="cat">

          <Link to={`/novela`}>
          <div className="card categories-card">
            <picture>
              <img src={nove} alt="" width="40" height="50" className="card-img-top" />
            </picture>
          </div>
          </Link>
          <h4>Novelas</h4>
        </div>
        <div className="cat">
          <Link to={'/poema'}>
            <div className="card categories-card">
              <picture>
                <img src={poe} alt="" width="40" height="50" className="card-img-top" />
              </picture>
            </div>
          </Link>
          <h4>Poesia</h4>
        </div>
        
        <div className="cat">
         <Link to={"/documentales"}>
            <div className="card categories-card">

              <picture>
                <img src={doc} alt="" width="40" height="50" className="card-img-top" />
              </picture>

            </div>
         </Link>
          <h4>Documentales</h4>
        </div>
    
        <div className="cat">
          
          <Link to={"/otros"}>
            <div className="card categories-card">

              <picture>
                <img src={otros} alt="" width="40" height="50" className="card-img-top" />
              </picture>

            </div>

          </Link>
          <h4>Otros</h4>
        </div>
      </ContainerCategories>
    </StyledCategories>
  )
}

export default withRouter(Categories)
