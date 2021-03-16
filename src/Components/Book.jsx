import React, { useEffect,useState,useContext } from 'react'
import clienteAxios from '../Config/config';
import { CRMContext } from '../Context/Provider';

import Header from './Header';
import CardBook from './CardBook';
import  '../Css/estiloBook.css';
import Spinner from '../Styled/Spinner';

const Book = ({match}) => {

  const { verifyStatus } = useContext(CRMContext)
  const [book,getBook] = useState("");

  let { id } = match.params;


  useEffect(() => {

    if(id){
      let consultarBook = async () => {
        const data = await clienteAxios.get(`get/book/${id}`);
        getBook(data.data.data);

        // document.querySelector("header").scrollIntoView({ block: "start", behavior: "smooth" })
      }

      consultarBook();
      verifyStatus(true);
    }

  },[id,verifyStatus]);

  return (
    <>
     <Header/>
     {(!book) ? <Spinner/>: (
        <div className="container container-book">
          <div className="col-10">
            <CardBook book={book} />
          </div>
        </div>
     )}
    </>
  )
}

export default Book


/**
 * 
 */