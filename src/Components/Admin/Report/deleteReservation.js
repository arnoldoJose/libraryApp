import clienteAxios from "../../../Config/config";

export const deleteReservation = async (id,setStatus) => {
    let data = await clienteAxios.post(`delete/loan/${id}`);
    if(data.status === 200) setStatus(true);
  }