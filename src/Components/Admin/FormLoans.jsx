import React, {useState,useEffect} from 'react'
import Layaout from './Layaout';
import styled from 'styled-components';
import Spinner from '../../Styled/Spinner';
import Swal from 'sweetalert2';
import clienteAxios from '../../Config/config';

const StyleForm = styled.div`
display:flex;
align-items:center;
align-content:center;

.center-input{
  display:flex;
  align-items:center;
  align-content:center;
  border-style:none;
  box-shadow: 1px 2px 11px 2px rgba(150, 150, 150, 0.5);
  width:60%;
  margin-right:auto;
  margin-left:auto;
}

.btn-lg{
  margin:9px;
}
.form-control {
  border: 1px solid rgba(48, 47, 47, 0.5)
}
.card-title h1{
  margin:0.5em;
  text-align:center;
}
`;
const FormLoans = ({match}) => {

  const [loanAdmin,setLoanAdmin] = useState("");
  const [dataUser,setDataUser] = useState("");//crear objeto con los nombre de los inputs

  useEffect(() => {
    let call = async () => {
      let data = await clienteAxios.get(`get/book/${match.params.id}`);
      setLoanAdmin(data.data.data);
    }
    call();
  }, [match.params.id]);

  const handelChange = (e) => {
    let {name,value} = e.target;
    setDataUser({
      ...dataUser,
      [name] : value
    })
  }

  const senData = async () => {
  if(dataUser === ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "llena todos los campos",
    });
    return;
  }else{
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    );

    let createLoan = await clienteAxios.post("")
  }
  }

  let getMont = new Date().getMonth()+1;
  let lastDate = `${new Date(new Date().getFullYear(), getMont, 0).getDate()}`

  return (
  <Layaout>
    {(!loanAdmin) ? <Spinner/> : (

        <StyleForm>
          <div className="card col-12 center-input " >
            <div className="card-title">
              <h1>Nuevo Prestamo</h1>
            </div>
            <div className="content-form col-10">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Nombre Usuario:</label>
                  <input type="text" onChange={handelChange} name="name_user" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Numero de Telefono:</label>
                  <input type="text" onChange={handelChange} name="mobile_user" className="form-control" id="recipient-mobile" />
                </div>
                <div className="container-label">
                  <label htmlFor="">Asigna un dia para devolver el Libro</label>
                </div>
                <div className="container-date">
                  <input type="date" onChange={handelChange} className="form-control" name="return_loan" id="date" min={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${new Date().getDate()}`} max={`${new Date().getFullYear()}-${(getMont <= 9) ? ("0" + getMont) : (getMont)}-${lastDate}`}/>
                </div>
              </form>
            </div>
        
            <button className="btn btn-success btn-lg"  onClick={senData}>Prestar</button>
          </div>
        </StyleForm>
    )}
  </Layaout>
  )
}

export default FormLoans
