import React, { useState, useEffect, useContext } from 'react'
import clienteAxios from '../../../Config/config'

import Header from '../../Header';
import Spinner from '../../../Styled/Spinner';
import CategorieSearch from '../CategorieSearch';
import CardBooks from '../../CardBooks';
import Footer from '../../Footer';
import { CRMContext } from '../../../Context/Provider';

import '../../../Css/estiloCategoria.css';
import '../../../Css/estilosBooks.css';

const Documentaries = ({location}) => {

  let categoria = location.pathname.split("/")[1];

  const { status, verifyStatus } = useContext(CRMContext)
  const [catBook, setCategoriaBook] = useState("");
  const [messageError, saveMessage] = useState("")

  useEffect(() => {

    if (status) {
      const callApi = async () => {
        let data = await clienteAxios.get(`get/categorybook?category=${categoria}`);
        setCategoriaBook(data.data.book)

      }
      callApi();
      verifyStatus(false)
    }
  }, [categoria, status, verifyStatus])

  return (!catBook) ? <Spinner /> : (
    <>
      <Header />
      <div className="container-category-element">
        <div className="container-search-categories col-9 d-flex">
          <CategorieSearch categoria={categoria} setCategoriaBook={setCategoriaBook} saveMessage={saveMessage} />
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
      <Footer />
    </>
  )
}

export default Documentaries
