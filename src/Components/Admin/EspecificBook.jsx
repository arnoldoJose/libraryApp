import React, {useState,useEffect} from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';
import { NavLink } from 'react-router-dom';

//crear un solo componente para la tabla y pasarle como argumento
//la data que retorna la api
const EspecificBook = () => {

  const [datos,saveDatos] = useState("");
  // name
  // autor
  // editorial
  // descripcion
  // fecha
  // categoria
  // genero
  // img

  
  useEffect(() => {
    const consultarApi = async () => {
      let data = await clienteAxios.get("get/books");
      saveDatos(data.data.book);
    }
    consultarApi();
  }, [])

  return  (
    
     <Layaout>
      {(!datos) ? (<Spinner />) :(
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
        
      )}
   
    </Layaout>
  )
}

export default EspecificBook
