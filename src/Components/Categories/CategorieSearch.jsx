import React, { useState,useContext } from 'react'
import clienteAxios from '../../Config/config';


import { CRMContext } from '../../Context/Provider';


const CategorieSearch = ({ categoria, setCategoriaBook, saveMessage}) => {

  const { verifyStatus } = useContext(CRMContext)
  const [categoryBook,saveCategoryBook] = useState("");


  const handelSubmit = async () => {
    const data = await clienteAxios.get(`get/categorybook?name=${categoryBook.name}&category=${categoria}`)
    if(data.data.message){
      saveMessage(data.data.message);
      return;
    }else{
      saveMessage("")
      setCategoriaBook(data.data.book);
    }
  }


  const handelChange = (e) => {
    const { name,value } = e.target;

    saveCategoryBook({
      ...categoryBook,
      [name] : value
    });

    if(!value.length){
      verifyStatus(true)
    }else{
      handelSubmit();
    }

  }

  return (
    <>

      <div className="input-group">
        <input type="text" onChange={handelChange}  name="name" className="form-control mx-3 " placeholder="Buscar Libro" />
      </div>
      <input type="button" className="btn btn-outline-secondary" value="Buscar" />

    </>
  )
}

export default CategorieSearch
