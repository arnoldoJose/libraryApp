import React from 'react'

import Layaout from './Layaout';
import '../../Css/estiloAdmin.css';
import Title from './Title';
import Spinner from '../../Styled/Spinner';
import Swal from 'sweetalert2';

import {fechDataReservation} from '../Admin/Report/fechDataReservation';
import {  changeState } from '../Admin/Report/changeSatatus';
import { sendMessage  } from '../Admin/Report/sendMessage';
import {  deleteReservation } from './Report/deleteReservation';
import { searchReservation } from './Report/searchAndStatus';
import { useSearch } from '../../Hooks/useSearch';

import {
  CheckOutlined,
  NotificationFilled,
  DeleteFilled,
  } from '@ant-design/icons';

const Reservations = () => {

  let { setStatus,reservations,saveReservations } = fechDataReservation();

  let inputSearch = useSearch({type:'text'},setStatus);

  return (
   <Layaout>
     {(!reservations.length) ? <Spinner title="No hay Reservaciones"/> : (
       <>
       <div className="container">
         <Title title="Reservaciones"/>
       </div>
          <div className="container-search ">
            <div className="content-search d-flex col-sm-12 col-md-9 col-lg-4">
            <input type="text" name="name" {...inputSearch} className="form-control" placeholder="Ingresa el nombre del usuario" />
              {/* <input type="text" onChange={() => handelReservation(e,setStatus)} name="name" className="form-control" placeholder="Ingresa el nombre del usuario" /> */}
              <button className="btn btn-primary mx-3" onClick={() => searchReservation(inputSearch.value,saveReservations,Swal)}>buscar</button>
            </div>
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
                  <th scope="col">Aprobar</th>
                  <th scope="col">Enviar Aviso</th>
                  <th scope="col">Eliminar</th>
                 
                </tr>
              </thead>

              <tbody >
                {reservations.map((item) => (
                  

                  <tr key={`${item.dt._id}`} id={item.dt.book_id}>
                    <td>
                      <picture>
                        <img src={`${item.dt.image_book}`} height="100" width="100" alt="cover-book" />
                      </picture>

                    </td>
                    <td>{`${item.dt.name_book}`}</td>
                    <td>{`${item.dt.name_user}`}</td>
                    <td>{`${item.dt.mobile_user}`}</td>
                    <td>{`${item.dt.date_loan}`}</td>
                    <td>{`${item.dt.return_date}`}</td>
                    {
                    item.amount === 0 ? 
                    <td style={{background: 'lightcoral'}}>No disponible</td>
                    :
                    <td style={{background: 'lightgreen'}}>Disponible</td>
                   }
                    <td>
                      <button className="btn btn-success" onClick={() => changeState(item.dt._id,item.dt.book_id,setStatus,Swal)}><CheckOutlined /></button>
                    </td>
                    <td>
                      <button className="btn btn-warning" title="enviar aviso" onClick={() => sendMessage(item.dt.mobile_user, item.dt.name_user,Swal)}><NotificationFilled /></button>
                    </td> 
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteReservation(item.dt._id,setStatus)} ><DeleteFilled /></button>
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

export default Reservations
