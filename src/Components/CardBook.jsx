import React, { useState } from 'react'
import { enviar, callApi } from './Function/function'

const CardBook = ({book}) => {

 
  const [loanData,setLoanData] = useState("");

  
  const handelChange = (e) => {
     let {name,value} = e.target;

     setLoanData({
       ...loanData,
       [name] : value
     })
  }

  let dataLoan = {
    name_user: loanData.name_user,
    mobile_user: loanData.mobile_user ,
    image_book: book.img,
    name_book: book.name,
    return_loan: loanData.return_loan
  }

  return (

    <div className="card mb-3 content-all">
      <div className="row g-0 Row">
        <div className="col-sm-8 col-md-5 col-lg-3">
          <img src={book.img} alt="..." width="340" height="320" className="card-img-book" />
        </div>
        <div className="col-md-7 content-book">
          <div className="card-body card-content">
            <div className="card-text">
              <p>{`${book.name}`}</p>

              <p>{`${book.autor}`}</p>

              <p>{`${book.editorial}`}</p>
              <p>
                {`${book.descripcion}`}
              </p>
            </div>
          </div>
          <div className="content-loan">
            <button type="button" onClick={enviar} className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Prestamo</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Tu Nombre:</label>
                        <input type="text"  onChange={handelChange} name="name_user" className="form-control" id="recipient-name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">Numero de Telefono:</label>
                        <input type="text"  onChange={handelChange} name="mobile_user" className="form-control" id="recipient-mobile" />
                      </div>
                    </form>
                  </div>
                    <div className="container-label">
                      <label htmlFor="">Marca el Dia Para Devolver el Libro</label>
                    </div>
                  <div className="container-date">
                    <input type="date" onChange={handelChange} className="form-control" name="return_loan" id="date"/>
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
  )
}

export default CardBook
