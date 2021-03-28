import React,{useState} from 'react'
import Layaout from './Layaout';
import styled from 'styled-components'

import clienteAxios from '../../Config/config';

const StyleFormBook = styled.div`
display:flex;
align-items:center;
align-content:center;

.center-input-book{
  display:flex;
  align-items:center;
  align-content:center;
  border-style:none;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);
  width:60%; 
  margin-right:auto;
  margin-left:auto;
}

.bt-add{
  margin:9px;
}

.form-control {
  border: 1px solid rgba(48, 47, 47, 0.5)
}
.card-title h1{
  margin:0.5em;
  text-align:center;
}
.row{
  margin-right:auto;
  margin-left:auto;
}
`;

const FormAddBook = () => {

  const [book,setBook] = useState({name:'',autor:'',editorial:'',categoria:'',descripcion:'',amount: ''});
  const [fileCover,setFile] = useState("");

  const handelChange = (e) => {
    let {name,value} = e.target;
    setBook({
      ...book,
      [name] : value
    });
  }

  const formData = new FormData();
  formData.append("name",book.name);
  formData.append("autor",book.autor);
  formData.append("editorial",book.editorial);
  formData.append("categoria",book.categoria);
  formData.append("descripcion",book.descripcion);
  formData.append("amount",book.amount);
  formData.append("image",fileCover);

  const postBook = async () => {
    
    let data = await clienteAxios.post("create/book",formData);
    console.log(data);
  }

  return (
    <Layaout>

        <StyleFormBook>
          <div className="card center-input-book " >
            <div className="card-title">
              <h1>Agregar Nuevo Libro</h1>
            </div>
            <div className="row">
              
                <div className="col-6">
              <div className="mb-1">
                <label htmlFor="recipient-name" className="col-form-label">Nombre Libro:</label>
                <input type="text" onChange={handelChange} name="name" className="form-control" id="recipient-name" />
              </div>
                </div>
                <div className="col-6">
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Nombre Autor:</label>
                <input type="text" onChange={handelChange} name="autor" className="form-control"  />
              </div>
                </div>
              <div className="col-6">
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Editorial:</label>
                <input type="text" onChange={handelChange} name="editorial" className="form-control"  />
              </div>
              </div>
              <div className="col-6">

              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Imagen:</label>
                <input type="file" name="image" onChange={e => setFile(e.target.files[0])} className="form-control"  />
              </div>
              </div>

              <div className="col-6">
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Cantidad:</label>
                <input type="number" onChange={handelChange} name="amount" className="form-control"  />
              </div>
              </div>
              <div className="col-6">
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Categoria:</label>
                <select name="categoria" onChange={handelChange} className="form-control" id="">
                  <option >---Selecciones una categoria---</option>
                  <option value="novela">Novela</option>
                  <option value="poesia">Poesia</option>
                  <option value="documentales">Documentales</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              </div>
              <div className="mb-1">
                <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
              <textarea name="descripcion" onChange={handelChange} className="form-control"  cols="10" rows="2"></textarea>
                
              </div>
              
            </div>

            <button className="btn btn-success btn-lg bt-add" onClick={postBook}>+Agregar</button>
          </div>
        </StyleFormBook>
      
    </Layaout>
  )
}

export default FormAddBook
