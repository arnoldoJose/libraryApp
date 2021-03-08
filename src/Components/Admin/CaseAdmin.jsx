import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../Css/estiloAdmin.css';
import Layaout from './Layaout';

import book from '../../Img/asset/book.png';
import loans from '../../Img/asset/calendar.png';
import clock from '../../Img/asset/clock.png';
import reservations from '../../Img/asset/calendar_book.png';

const CaseAdmin = () => {

  return (
    <Layaout>
    <div className="container-main-admin container">
     <div className="col-12  p-3 element-card-admin">
       <div className="col-sm-5 col-md-4 col-lg-2 element-image-admin">
         <div className="card">
         <NavLink to="/admin/books" >
                <div className="card-title text-center">
                  <h6>Libros</h6>
                </div>
                <img src={book} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer">

                </div>
         </NavLink>
      </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
         <div className="card">
           <NavLink to="/admin/loans">
                <div className="card-title text-center">
                  <h6>Prestamos</h6>
                </div>
                <img src={loans} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer">

                </div>
           </NavLink>
         </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
         <div className="card">
             <NavLink to="/admin/returns">
                <div className="card-title text-center">
                  <h6>Devoluciones</h6>
                </div>
                <img src={clock} alt="book" className="card-img-top" height="200" width="200" />
                <div className="card-footer">

                </div>
             </NavLink>
          </div>
       </div>
          <div className="col-sm-5 col-md-4 col-lg-2  element-image-admin">
            <div className="card">
              <NavLink to="/admin/reservations">
                <div className="card-title text-center">
                  <h6>Reservaciones</h6>
                </div>
                <img src={reservations} alt="book" className="card-img-top" height="200" width="200"  />
                <div className="card-footer">

                </div>
              </NavLink>
         </div>
          </div>
     </div>
    </div>
    </Layaout>
  )
}

export default CaseAdmin