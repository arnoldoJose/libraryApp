import React, { useState,useEffect } from 'react'
import clienteAxios from '../../../Config/config';

import '../../../Css/estiloBook.css';
import Header from '../../Header';


const Novela = ({match}) => {

  let { id } = match.params;
  
  const [book, saveBook] = useState("");

  useEffect(() => {

    let consultarBook = async () => {
      const data = await clienteAxios.get(`get/book/${id}`);
      saveBook(data.data.data);
      // verifyStorage();
      document.querySelector("header").scrollIntoView({ block: "start", behavior: "smooth" })
    }
    consultarBook();
  },[id])

  return (
    <>
      <Header />
      <div className="container container-book">
        <div className="col-10">

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
                  <button type="button"  className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Prestamo</button>

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
                              <input type="text" name="name_user" className="form-control" id="recipient-name" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="message-text" className="col-form-label">Numero de Telefono:</label>
                              <input type="text" name="mobile_user" className="form-control" id="recipient-name" />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button"  className="btn btn-primary btn-block">Realizar Prestamo</button>
                        </div>
                      </div>
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

export default Novela
/**
 * onClick={enviar}
 * onClick={callApi}
 */