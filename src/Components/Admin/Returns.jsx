import React, { useState,useEffect } from 'react'
import Layaout from './Layaout';
import Spinner from '../../Styled/Spinner';
import '../../Css/estiloAdmin.css';

import clienteAxios from '../../Config/config';

import {
  CheckOutlined,
  DeleteFilled,
  NotificationFilled
} from '@ant-design/icons';

const Returns = () => {

  const [returns,saveReturns] = useState("");

  useEffect(() => {
    const callAPI = async () => {
      let data = await clienteAxios.get("get/returns");
      saveReturns(data.data);
    }
    callAPI();
  }, [])

  return (
    <Layaout>
      {(!returns) ? <Spinner/> : (
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
                <th scope="col">Enviar Aviso</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>

            <tbody >
              {returns.map((Item) => (
                <tr key={`${Item._id}`}>

                  <td>
                    <picture>
                      <img src={`${Item.image_book}`} height="100" width="100" alt="cover-book" />
                    </picture>

                  </td>
                  <td>{`${Item.name_book}`}</td>
                  <td>{`${Item.name_user}`}</td>
                  <td>{`${Item.mobile_user}`}</td>
                  <td>{`${Item.date_loan}`}</td>
                  <td>{`${Item.return_date}`}</td>
                  <td>
                    <button className="btn btn-success"><CheckOutlined /></button>
                  </td>
                  <td>
                    <button className="btn btn-warning"><NotificationFilled /></button>
                  </td>
                  <td>
                    <button className="btn btn-danger"><DeleteFilled /></button>
                  </td>
                </tr>
              )) }
            </tbody>

          </table>
        </div>
      )}
    </Layaout>
  )
}

export default Returns
