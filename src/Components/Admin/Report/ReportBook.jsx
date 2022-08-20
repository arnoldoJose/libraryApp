import React from 'react'

import { sumAllBooks,filterBooksNotAvailable,filterBookAvailable } from '../../../Utils/functionalReport'
import { generateReport } from '../../../Hooks/printPdf';
 const ReportBook = ({data}) => {

  let numBook = sumAllBooks(data);
  let resultNotAvailable = filterBooksNotAvailable(data);
  let availableBooks = filterBookAvailable(data)


  return (
   <>
      <div className="container-loan-table report-book" style={{ display: 'none' }}>
        <div className="content-btn-print">
          <button className="btn btn-primary" onClick={() => generateReport('miTable2')} >
            Generar reporte
          </button>
        </div>
        <div className="container"><h2 className="text-center">Reporte Libros</h2></div>
        <div className="table">
          <table className="table table-success table-striped" id="miTable2">
            <thead>
              <tr className="tr">
                <th scope="col">Datos</th>
                <th scope="col">Total</th>

              </tr>
            </thead>
            <tbody>
              <tr className="tr-data">
                <th scope="row">Libros</th>
                <td>{numBook}</td>
              </tr>
             
              <tr className="tr-data">
                <th scope="row">Libros disponibles</th>
                <td>{availableBooks}</td>
              </tr>
              <tr className="tr-data">
                <th scope="row">Libros no disponibles</th>
                <td>{resultNotAvailable}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
   </>
  )
}

export default ReportBook
