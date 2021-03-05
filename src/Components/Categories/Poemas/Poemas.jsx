import React, { useState, useEffect } from 'react'

import Header from '../../Header';
import Spinner from '../../../Styled/Spinner';
import CategorieSearch from '../CategorieSearch';
import CardBooks from '../../CardBooks';

import '../../../Css/estiloCategoria.css';
import '../../../Css/estilosBooks.css';

import clienteAxios from '../../../Config/config';

const Poemas = ({location}) => {
  
  let categoria = location.pathname.split("/")[1];

  const [catBook, setCategoriaBook] = useState("");
  const [messageError, saveMessage] = useState("")


  useEffect(() => {

    const callApi = async () => {
      let data = await clienteAxios.get(`get/categorybook?category=${categoria}`);
      setCategoriaBook(data.data.book)
      saveMessage();
    }
    callApi();
  }, [categoria])

  return (!catBook) ? <Spinner /> : (
    <>
      <Header />
      <div className="container-category-element">
        <div className="container-search-categories col-9 d-flex">
          <CategorieSearch categoria={categoria} />
        </div>
        <div className="container-message ">
          {(!messageError) ? null : (<div className="error">{messageError}</div>)}
        </div>
        <div className="container-books">
          <div className="col-12 d-flex row container-card">
            {catBook.map((item) => (
              <CardBooks item={item} key={item._id} />
            ))}
            <h1>Books</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poemas
