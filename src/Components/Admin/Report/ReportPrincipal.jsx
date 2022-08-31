import React, {useState,useEffect} from 'react'

import Spinner from '../../../Styled/Spinner';
import { dataReport } from '../Funtion/dataReport';
import { generateReport } from '../../../Hooks/printPdf';
import clienteAxios from '../../../Config/config';

const ReportPrincipal = () => {

  let { allBook, allLoans, allReturns, allReservation } = dataReport();

  const [loans, saveLoans] = useState([]);
  const [status,setStatus] = useState(true);
  useEffect(() => {
    if(status){
      const consultarAPI = async () => {
        let data = await clienteAxios.get("get/loans");
        saveLoans(data.data);
      }
      consultarAPI();
      setStatus(false);
    }
   }, [status]);
 

  return (
    <>
    {
          (!loans.length) ? <Spinner/> 
      : 
      (
        <div className="container-loan-table" >
              <div className="content-btn-print">
                <button className="btn btn-primary" onClick={() => generateReport('miTable1')}>
                  Generar reporte
                </button>
              </div>
          <div className="container"><h2 className="text-center">Reporte Principal</h2></div>
          <div className="table">
            <table className="table table-success table-striped" id="miTable1">
              <thead>
              <tr>
                <th scope="col" style={{color: 'black'}}>Nombre</th>
                <th scope="col" style={{color: 'black'}}>Nombre Usuario</th>
                <th scope="col" style={{color: 'black'}}>Telefono Usuario</th>
                <th scope="col" style={{color: 'black'}}>Fecha Prestamo</th>
                <th scope="col" style={{color: 'black'}}>Fecha Devolucion</th>
                <th scope="col" style={{color: 'black'}}>Estado</th>
              </tr>
              </thead>
              <tbody >
              {loans.map((item) => (
                <tr key={`${item._id}`} className="tr-data">
                 
                  <td>{`${item.name_book}`}</td>
                  <td>{`${item.name_user}`}</td>
                  <td>{`${item.mobile_user}`}</td>
                  <td>{`${item.date_loan}`}</td>
                  <td>{`${item.return_date}`}</td>
                  {(item.return_state === "assigned") ? 
                    (<td className="return">Devuelto</td>)
                    :
                    (<td className="notreturn">No devuelto</td>)
                  }
               
                </tr>
              ))}
            </tbody>

            </table>
          </div>
        </div>
      )
    }
    </>
  )
}

export default ReportPrincipal
