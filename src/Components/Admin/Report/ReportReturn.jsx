import React from 'react'
import { generateReport } from '../../../Hooks/printPdf';

const ReportReturn = ({data}) => {
 
  return (
    <>
    <div className="container-loan-table report-return" style={{ display: 'none' }}>
        <div className="content-btn-print">
          <button className="btn btn-primary" onClick={() => generateReport('miTable4')}>
            Generar reporte
          </button>
        </div>
        <div className="container"><h2 className="text-center">Reporte Devolucion</h2></div>
      <div className="table">
        <table className="table table-success table-striped" id="miTable4">
          <thead>
            <tr className="tr">
              <th scope="col">Datos</th>
              <th scope="col">Total</th>

            </tr>
          </thead>
          <tbody>
            

              <tr className="tr-data">
                <th scope="row">Devoluciones</th>
                <td>{data.length}</td>
              </tr>
            <tr className="tr-data">
              <th scope="row">Devoluciones Pendientes</th>
              <td>{data.length}</td>

            </tr>

              <tr className="tr-data">
                <th scope="row">Devoluciones Retresadas</th>
                <td>{data.length}</td>

              </tr>
           

          </tbody>

        </table>
      </div>
    </div>
    </>
  )
}

export default ReportReturn
