import { useEffect, useState } from "react";
import clienteAxios from "../../../Config/config";

export const fechDataReservation = () => {
  const [reservations, saveReservations] = useState([]);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (status) {
      const callAPI = async () => {
        let data = await clienteAxios.get("/get/filterReservation");
      
        saveReservations(data.data);
        //  getIds(data.data)
      };
      callAPI();
      setStatus(false);
    }
  }, [status]);

  return {setStatus,reservations,saveReservations }
};
