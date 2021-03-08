import React from 'react'
import Layaout from './Layaout';
import '../../Css/estiloAdmin.css';

import {
  CheckOutlined,
  DeleteFilled 
  } from '@ant-design/icons';

const Reservations = () => {
  return (

   <Layaout>
      <div className="asing-scroll">
        <table className="table table-striped">
          <thead>
            <tr>

              <th scope="col">Imagen</th>
              <th scope="col">Nombre</th>
              <th scope="col">Autor</th>
              <th scope="col">Aprobar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>

          <tbody >
            <tr>

              <td>
                <picture>
                  <img src="" height="100" width="100" alt="cover-book" />
                </picture>

              </td>
              <td>lorem</td>
              <td>lorem</td>
              <td>
                <button className="btn btn-success"><CheckOutlined /></button>
              </td>
              <td>
                <button className="btn btn-danger"><DeleteFilled /></button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
   </Layaout>
  )
}

export default Reservations
