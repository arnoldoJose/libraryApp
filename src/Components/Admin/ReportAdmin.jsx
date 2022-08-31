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
      
    </div>
     
     {
      (!allData.length) ? <Spinner/>
      :
      <>
      <ReportPrincipal/>
       {/* < ReportBook data={allData[0].data}/>
       <ReportLoans data={allData[1].data}/>
       <ReportReturn data={allData[2].data}/>
       <ReportReservation data={allData[3].data}/> */}
       </>
     }  

    </>
 </Layaout>
  )
}

export default ReportAdmin
