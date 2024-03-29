import React, { useState,useEffect,useContext } from 'react'
import Layaout from './Layaout';
import Title from './Title';
import Spinner from '../../Styled/Spinner';
import '../../Css/estiloAdmin.css';

import { DeleteFilled } from '@ant-design/icons'
import clienteAxios from '../../Config/config';

import { CRMAuthContext } from '../../Context/AuthProvider'

const Prestamos = () => {
  
  const [loans, saveLoans] = useState([]);
  const [status,setStatus] = useState(true);
  const { auth } = useContext(CRMAuthContext);
  useEffect(() => {
   if(status){
     const consultarAPI = async () => {
       let data = await clienteAxios.get("get/loans",{
        headers:{
          'Authorization': `Bearer ${auth.token}`
        }
      });
       saveLoans(data.data);
     }
     consultarAPI();
     setStatus(false);
   }
  }, [status]);

 console.log(auth);
  const deleteLoan = async (id) => {
    let data = await clienteAxios.post(`delete/loan/${id}`);
    if(data.status === 200) setStatus(true);
  }
 
  return (
      <Layaout>
      {(!loans.length) ? <Spinner title="No hay Prestamos"/> : (
        <>
          <div className="container">
            <Title title="Prestamos" />
          </div>
        <div className="asing-scroll">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Nombre Usuario</th>
                <th scope="col">Telefono Usuario</th>
                <th scope="col">Fecha Prestamo</th>
                <th scope="col">Fecha Devolucion</th>
                <th scope="col">Estado</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody >
              {loans.map((item) => (
                <tr key={`${item._id}`}>
                  <td>
                    <picture>
                      <img src={`${item.image_book}`} height="100" width="100" alt="cover-book" />
                    </picture>
                  </td>
                  <td>{`${item.name_book}`}</td>
                  <td>{`${item.name_user}`}</td>
                  <td>{`${item.mobile_user}`}</td>
                  <td>{`${item.date_loan}`}</td>
                  <td>{`${item.return_date}`}</td>
                  {(item.return_state === "assigned") ? 
                    (<td className="return">Devuelto</td>)
                    :
                    (<td className="notreturn">No devuelto</td>)
                  }
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteLoan(item._id)}><DeleteFilled /></button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        </>
        )}
      </Layaout>
  );
}
export default Prestamos