

  
  export const sumAllBooks = (data) => {
    let numBook = data.reduce((acc, el) => acc + +el.amount,0);
    return numBook;
  }

  export const filterBooksNotAvailable = (data) => {
    let result = data.filter(dt => dt.amount === 0);
    return result.length;
  }

  export const filterBookAvailable = (data) => {
    let numBook = data.reduce((acc, el) => acc + +el.amount,0);
    return numBook;
  }
//crear nueva propiedad en la coleccion libros "numero de copias"