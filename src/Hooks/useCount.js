import { useEffect, useState } from "react";

import clienteAxios from "../Config/config";

export const useCount = () => {
    const [countBoook, saveCountBook] = useState(0);
    const [countLoans, saveCountLoans] = useState(0);
    const [countReturn, saveCountReturn] = useState(0);
    const [countReservation, saveCountReservations] = useState(0);

  useEffect(() => {

    let call = async () => {
      const [primerGet, segundoGet,tercerGet,cuartoGet] = await Promise.all([
        clienteAxios.get("get/books"),
        clienteAxios.get("get/reservations"),
        clienteAxios.get("get/returns"),
        clienteAxios.get("get/loans"),
      ]);

      saveCountBook(primerGet.data.book.length);
      saveCountReservations(segundoGet.data.length);
      saveCountReturn(tercerGet.data.length);
      saveCountLoans(cuartoGet.data.length);
    };
    call();
  }, []);


  return {
    countBoook,
    countLoans,
    countReturn,
    countReservation,
  };
};
