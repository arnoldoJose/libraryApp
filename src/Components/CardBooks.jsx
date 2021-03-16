import React from 'react'
import { Link } from 'react-router-dom';

import Spinner from '../Styled/Spinner';
//hacer condicional para poner el spiner si n viene un libro
//si hay libro cargar solo el componente y no toda la pagina
//y hacer lo mismo con el cardbook
const CardBooks = ({item}) => {
  return (
   <>
   {(!item) ? <Spinner/> : (
          <div className="col-sm-5 col-md-4 col-lg-3" >
            <div className="card card-books">
              <img src={item.book_cover} alt="" height="380" width="200" className="card-img-top image-books" />
              <div className="card-footer">
                <Link to={`/book/${item._id}`} className="btn btn-outline-secondary">Mas Informacion</Link>
              </div>
            </div>
          </div>)}
   </>
  )
}

export default CardBooks
