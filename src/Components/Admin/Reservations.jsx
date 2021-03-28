import React, { useState,useEffect } from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';

import {
  CheckOutlined,
  DeleteFilled 
  } from '@ant-design/icons';

const Reservations = () => {
  
  const [reservations,saveReservations] = useState("");

  useEffect(() => {
    const callAPI = async () => {
      let data = await clienteAxios.get("get/reservations");
      saveReservations(data.data);
    }
    callAPI();
  }, []);

  return (
   <Layaout>
     {(!reservations) ? <Spinner/> : (
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
                <th scope="col">Aprobar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>

            <tbody >
              { reservations.map((item) => (
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
                  <td>
                    <button className="btn btn-success"><CheckOutlined /></button>
                  </td>
                  <td>
                    <button className="btn btn-danger"><DeleteFilled /></button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>)}
  </Layaout>
  )
}

export default Reservations
