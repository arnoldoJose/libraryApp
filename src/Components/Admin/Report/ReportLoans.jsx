import React from 'react'
import { generateReport } from '../../../Hooks/printPdf';

const ReportLoans = ({data}) => {

  let result = data.filter(dt => dt.return_state === 'assigned');
  let notassigned = data.filter(dt => dt.return_state !== 'assigned')


  return (
    <>
    <div className="container-loan-table report-loan" style={{ display: 'none' }}>
        <div className="content-btn-print">
          <button className="btn btn-primary" onClick={() => generateReport('miTable3')}>
            Generar reporte
          </button>
        </div>
        <div className="container"><h2 className="text-center">Reporte Prestamos</h2></div>
      <div className="table">
        <table className="table table-success table-striped" id="miTable3">
          <thead>
            <tr className="tr">
              <th scope="col">Datos</th>
              <th scope="col">Total</th>

            </tr>
          </thead>
          <tbody>
            
            <tr className="tr-data">
              <th scope="row">Prestamos</th>
              <td>{data.length}</td>
              </tr>
              <tr className="tr-data">
                <th scope="row">Prestamos devueltos</th>
                <td>{result.length}</td>
              </tr>
              <tr className="tr-data">
                <th scope="row">Prestamos no devueltos</th>
                <td>{notassigned.length}</td>
              </tr>
          </tbody>

        </table>
      </div>
    </div>
    </>
  )
}

export default ReportLoans
