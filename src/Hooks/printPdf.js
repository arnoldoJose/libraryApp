
import logo from '../Img/asset/flat-book.png';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; 

 export const generateReport = (miTable) => {
  
    let fecha = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    const doc = new jsPDF();

    doc.addImage(logo, 10, 10, 40, 40)
    doc.setFontSize(25);
    doc.text("Biblioteca Publica La Merced", 60, 30)

    doc.setFontSize(20);
    doc.text("Reporte Mensual Administrativo", 60, 55);

    doc.setFontSize(15);
    doc.text(`Fecha ${fecha}`, 85, 63);

    //bajar la table aun mas
    doc.autoTable({
      html: `#${miTable}`,
      margin: { top: 70 },
      styles: { fontSize: 15 }
    });
    doc.save("print.pdf")
  }