import React, {useContext,useEffect} from 'react'

import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
import Libreries from './Libraries';

import '../Css/estilonav.css';
import { CRMContext } from '../Context/Provider';

const Main = () => {

  const { verifyStatus } = useContext(CRMContext);

  useEffect(() => {
    verifyStatus(true);
  }, [verifyStatus])
 
  return (
    <>
      <Header />
      <main>
        <div className="container-categories-books p-5">
          
          <Categories />
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container content-info">
            
            <p className="lead">
              Una biblioteca puede definirse, desde un punto de vista estrictamente etimológico,
              como el lugar donde se guardan libros. Sin embargo, en la actualidad esta concepción 
              se ha visto superada para pasar a referirse tanto a las colecciones bibliográficas y audiovisuales 
              como a las instituciones que las crean y las ponen en
               servicio para satisfacer las necesidades de los usuarios. 
               Desde el 24 de octubre de 1997 se celebra el Día de la biblioteca​

          </p>
          </div>
        </div>
 

        <div className="container-carrousel-books mt-5 container">
          <Libreries />
        </div>

      </main>
      <Footer/>
    </>
  );
}

export default Main
