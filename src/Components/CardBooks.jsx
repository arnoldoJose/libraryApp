import React from 'react'
import { Link } from 'react-router-dom';

const CardBooks = ({item}) => {
  return (
    <div className="col-sm-5 col-md-4 col-lg-3" >
      <div className="card card-books">
        <img src={item.image} alt="" height="380" width="200" className="card-img-top image-books" />
        <div className="card-footer">
          <Link to={`/book/${item._id}`} className="btn btn-outline-secondary">Mas Informacion</Link>
        </div>
      </div>
    </div>
  )
}

export default CardBooks
