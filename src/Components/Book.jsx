import React, { useEffect,useState,useContext } from 'react'
import clienteAxios from '../Config/config';
import { CRMContext } from '../Context/Provider';

import Header from './Header';
import CardBook from './CardBook';
import  '../Css/estiloBook.css';

const Book = ({match}) => {

  const { verifyStatus } = useContext(CRMContext)
  const [book,saveBook] = useState("");

  let { id } = match.params;


  useEffect(() => {

    let consultarBook = async () => {
      const data = await clienteAxios.get(`get/book/${id}`);
      saveBook(data.data.data);
      verifyStorage();
      document.querySelector("header").scrollIntoView({block:"start",behavior:"smooth"})
    }
    
    consultarBook();
    verifyStatus(true);
  },[id,verifyStatus]);



  const verifyStorage = () => {
    if(localStorage.getItem("data")){
      document.querySelector(".btn-outline-secondary").removeAttribute("data-bs-toggle");
    }
  }

  if(!book) return null;

  return (
    <>
     <Header/>
      <div className="container container-book">
        <div className="col-10">
          <CardBook book={book} />
        </div>
      </div>
    </>
  )
}

export default Book


/**
 * 
 */