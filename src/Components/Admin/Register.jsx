import React, { useState, useContext} from 'react'

import Layaout from './Layaout';
import styled from 'styled-components';
import Swal from 'sweetalert2'; 

import clienteAxios from '../../Config/config';

import { CRMAuthContext } from '../../Context/AuthProvider'

import user from '../../Img/user.png';
import '../../Css/register.css';
const CenterContent = styled.div`
display:flex;
align-items:center;
align-content:center;

.card{
  margin-right:auto;
  margin-left:auto;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);

}

.card-title{
  text-align:center;
}
`;

const InputForm = styled.div`
margin: 1em;
.form-group{
  margin:0.8em;
}
`;

const ContainerLog = styled.div`
height: 6em;
display:flex;
align-items:center;

.title-register{
text-align:center;
width:100%;
}
.img-register{
padding: 0 7px 38px;
}
.image-r{
position: relative;
display:flex;
border-radius:50%;
 
}`;

const Register = () => {

  const [dataAdmin,setDataAdmin] = useState( {name:"",email:"",password:""} );
  const { auth } = useContext(CRMAuthContext);

  const handelClick = async (e) => {
    e.preventDefault();

    let datos = document.querySelectorAll(".form-control");
    
    if(!datos[0].value || !datos[1].value || !datos[2].value){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena todos los campos!',
      });
      return;
    }else{
      
    if(auth.user.typeUser === 'admin'){
      const data = await clienteAxios.post("register/typeadmin",dataAdmin,{
        headers:{'Authorization': `Bearer ${auth.token}`}
      });

      if(data.status === 200) Swal.fire(`${data.data.msj}`,'','success')
    
      return;
    }  
  

    const data = await clienteAxios.post("register",dataAdmin)
 
    if(data.status === 200) Swal.fire(`${data.data.msj}`,'','success')
  
  }
    document.querySelector("#form-c").reset();
  }

  const handelChange = (e) => {
    const {name,value} = e.target;
    setDataAdmin({
    ...dataAdmin,
    [name] : value  
    });

  }
 
  return (
    <Layaout>
    <div className="container-register-admin">
      <CenterContent>
          
          <div className="card col-sm-12 col-md-5 col-lg-5">
            <ContainerLog className="conteiner-logo">
              
              <div className="img-register">
                <img src={user} width="40" height="40" className="image-r" alt="" />
              </div>
               
              <div className="title-register">
                <h3>Registrar usuario</h3>
              </div>
            </ContainerLog>
            
            <InputForm>
              <form id="form-c">
                <div className="form-group">
                  <label htmlFor="">Nombre</label>
                  <input type="text" onChange={handelChange} name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Correo</label>
                  <input type="text" onChange={handelChange} name="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Contraseña</label>
                  <input type="text" onChange={handelChange} name="password" className="form-control" />
                </div>
                {
                  (auth.user.typeUser === "admin") ?
                  (
                      <div className="form-group">
                        <label htmlFor="">tipo usuario</label>
                        <select className='form-control' onChange={handelChange} defaultValue="------Asigne el tipo de usuario------" name="typeUser">
                          <option disabled>------Asigne el tipo de usuario------</option>
                          <option value="admin">Administrador</option>
                          <option value="user">Usuario</option>
                        </select>
                      </div>) : 
                      ( null )
                }
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={handelClick}>+Agregar</button>
                </div>
              </form>
            </InputForm>
        
          </div>
        
      </CenterContent>
    </div>
    </Layaout>
  )
}

export default Register
