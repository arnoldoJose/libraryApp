import React, { useEffect, useState,useContext } from 'react'
import clienteAxios from '../Config/config';

import Header from './Header';
import Spinner from '../Styled/Spinner';
import Search from './Search';
import CardBooks from './CardBooks';
import Footer from './Footer';

import { CRMContext } from '../Context/Provider';

import '../Css/estilosBooks.css';

const Books = () => {
  const { status, verifyStatus } = useContext(CRMContext)
  const [books,saveBooks] = useState("");
  const [messageError,saveMessage] = useState("")

  useEffect(() => {
    
    if(status){
      const consultarAPI = async () => {
        let data = await clienteAxios.get("get/books");
        saveBooks(data.data.book);
      }
      consultarAPI();
      verifyStatus(false);
    }
  },[status,verifyStatus]);

  return (!books) ? <Spinner/> : (
    <>
    
      <Header/>
    <div className="element-container mt-5">
        <div className="container-search d-flex col-9">
          
          <Search saveBooks={saveBooks} saveMessage={saveMessage} />
          {/**
           * crear una lista con todas la categorias y cargar los resultados
           * obtimizar los card para books y para book
           */}
        </div>
        <div className="container-message ">
          {(!messageError) ? null : ( <div className="error">{messageError}</div>  )}
     </div>
        <div className="container-books">
          <div className="col-12 d-flex row container-card">
            {books.map((item) => (
              <CardBooks item={item} key={item._id} />
            ))}
            
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Books
