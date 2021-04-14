import React, {useState,useEffect} from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import Swal from 'sweetalert2';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';
import { NavLink } from 'react-router-dom';

const EspecificBook = () => {

  const [status,setStatus] = useState(true);
  const [datos,saveDatos] = useState("");
  const [nameBook,setNameBook] = useState("");
  
  useEffect(() => {
    if(status){
      const consultarApi = async () => {
        let data = await clienteAxios.get("get/books");
        saveDatos(data.data.book);
      }
      consultarApi();
      setStatus(false)
    }
  }, [status]);

  

  const getBook = async () => {
    let data = await clienteAxios.get(`get/book?name=${nameBook.name}`);
    if(!data.data.message){
      saveDatos(data.data.book);
    }else{
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.message}` });
      return;
    }
  }

  const saveName = (e) => {
    let {name,value} = e.target;
    setNameBook({
      ...nameBook,
      [name] : value
    });

    if (!value.length){
      setStatus(true)
    }
    
  }

  return  (
    
     <Layaout>
      {(!datos) ? (<Spinner />) :(
     <>
      <div className="container-search ">
      <div className="content-search d-flex col-sm-12 col-md-9 col-lg-4">
              <input type="text" name="name" onChange={saveName} className="form-control" />
              <button className="btn btn-primary mx-3" onClick={getBook}>buscar</button>
      </div>
      </div>
          <div className="asing-scroll">
            <table className="table table-striped">
              <thead>
                <tr>

                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Aciones</th>
                </tr>
              </thead>

              <tbody >
                {datos.map((item) => (
                  <tr key={item._id}>

                    <td>
                      <picture>
                        <img src={item.book_cover} height="100" width="100" alt="" />

                      </picture>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.autor}</td>
                    <td>

                      < NavLink
                        to={`/admin/loan/${item._id}`}
                        className="btn btn-primary">
                        Prestar
                      </NavLink>

                      <button className="btn btn-info">Editar</button>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </>
      )}
   
    </Layaout>
  )
}

export default EspecificBook
