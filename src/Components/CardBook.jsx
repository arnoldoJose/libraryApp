import React, { useState,useRef } from 'react'
import {  callApi,  dataLocal } from './Function/function'
import { getMont,getDate,lastDate } from './Admin/Funtion/FunctionalData'
const CardBook = ({book}) => {

 
  const [loanData, setLoanData] = useState("");
  const name = useRef("");
  const phone = useRef("");

  const handelChange = (e) => {
    let { name, value } = e.target;

    setLoanData({
      ...loanData,
      [name]: value,
    });
  };

  let dataLoan;

  if (!dataLocal()) {
    dataLoan = {
      book_id: book._id,
      name_user: loanData.name_user,
      mobile_user: loanData.mobile_user,
      image_book: book.book_cover,
      name_book: book.name,
      return_loan: loanData.return_loan,
    };
  } else {
    dataLoan = {
      book_id: book._id,
      name_user: name.current.defaultValue,
      mobile_user: phone.current.defaultValue,
      image_book: book.book_cover,
      name_book: book.name,
      return_loan: loanData.return_loan,
    };
  }

//name.current.defaultValue
  return (

    <>
    <h2 className="name-autoLine">
        {`${book.name}`}
    </h2>
      <div className="card mb-3 content-all">
        <div className="row g-0 Row">
          <div className="col-sm-8 col-md-5 col-lg-3">
            <img src={book.book_cover} alt="..." width="340" height="320" className="card-img-book" />
          </div>
          <div className="col-md-7 content-book">
            <div className="card-body card-content">
              <div className="card-text">
                

                <p>{`${book.autor}`}</p>

                <p>{`${book.editorial}`}</p>
                <p>
                  {`${book.descripcion}`}
                </p>
              </div>
            </div>
            <div className="content-loan">
              <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Prestamo</button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">

                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                      {(localStorage.getItem("data") ? (
                        <form>
                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Tu Nombre:</label>
                            <input type="text" name="name_user" disabled={true} defaultValue={dataLocal().name_user} ref={name} className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Numero de Telefono:</label>
                            <input type="text" name="mobile_user" disabled={true} defaultValue={`${dataLocal().mobile_user}`} ref={phone} className="form-control" id="recipient-mobile" />
                          </div>
                        </form>
                      ) : (

                        <form id="form-loan">
                          <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Tu Nombre:</label>
                            <input type="text" onChange={handelChange} name="name_user" className="form-control" id="recipient-name" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Numero de Telefono:</label>
                            <input type="text" onChange={handelChange} name="mobile_user" className="form-control" id="recipient-mobile" />
                          </div>
                        </form>
                      ))}
                    </div>
                    <div className="container-label">
                      <label htmlFor="">Marca el Dia Para Devolver el Libro</label>
                    </div>
                    <div className="container-date">
                      <input type="date" onChange={handelChange} className="form-control" name="return_loan" id="date" min={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${(getDate <= 9) ? ("0" + getDate) : (getDate)}`} max={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${lastDate}`} />
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={() => callApi(dataLoan)} className="btn btn-primary btn-block btn-api">Realizar Prestamo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CardBook
