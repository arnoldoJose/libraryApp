import React from 'react'

import Spinner from '../../../Styled/Spinner';
import { dataReport } from '../Funtion/dataReport';
import { generateReport } from '../../../Hooks/printPdf';

const ReportPrincipal = () => {

  let { allBook, allLoans, allReturns, allReservation } = dataReport();


  return (
    <>
    {
      (!allBook) ? <Spinner/>
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
                <tr className="tr">
                  <th scope="col">Datos</th>
                  <th scope="col">Total</th>

                </tr>
              </thead>
              <tbody>
                <tr className="tr-data">
                  <th scope="row">Libros</th>
                  <td>{allBook}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Prestamos</th>
                  <td>{allLoans}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Devoluciones Pendientes</th>
                  <td>{allReturns}</td>

                </tr>
                <tr className="tr-data">
                  <th scope="row">Reservaciones</th>
                  <td>{allReservation}</td>

                </tr>

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
