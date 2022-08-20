import React from 'react'
import Layaout from './Layaout'
import '../../Css/report.css';

import ReportPrincipal from './Report/ReportPrincipal';
import ReportBook from './Report/ReportBook';
import ReportLoans from './Report/ReportLoans';
import ReportReturn from './Report/ReportReturn';
import ReportReservation from './Report/ReportReservation';
import Spinner from '../../Styled/Spinner';

import { viewPrincipal,changeView,viewLoan,viewReturn,viewReservation } from './Report/funcionalidadR'
import { useCount  } from '../../Hooks/useCount'

const ReportAdmin = () => {
  const { allData } = useCount();

  return (
 <Layaout>
    <>
    <div className="container-title">
      <h2>Administracion y Generacion de Reportes</h2>
    </div>
    <div className="container content-opt">
      <div className="container-options">
        
      <ul>
              <li onClick={viewPrincipal} className="firsChil" id="rep-principal">
                <p>Reporte General</p>
              </li>
              <li className="quitB" id="rep-libro" onClick={changeView}>
                <p>Reportes Libros</p>
              </li>
              <li className="quitB" id="repor-loan" onClick={viewLoan}>
                <p>Reportes Prestamos</p>
              </li>
              <li className="quitB" id="repor-return" onClick={viewReturn}>
                <p>Reportes Devoluciones</p>
              </li>
              <li className="quitB" id="repor-reservation" onClick={viewReservation}>
                <p>Reporte Reservacion</p>
              </li>

      </ul>
      </div>
    </div>
     
     {
      (!allData.length) ? <Spinner/>
      :
      <>
      <ReportPrincipal/>
       < ReportBook data={allData[0].data}/>
       <ReportLoans data={allData[1].data}/>
       <ReportReturn data={allData[2].data}/>
       <ReportReservation data={allData[3].data}/>
       </>
     }  

    </>
 </Layaout>
  )
}

export default ReportAdmin
