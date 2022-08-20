
import clienteAxios from "../../../Config/config";

export const searchReservation = async (name,saveReservations,Swal) => {

    let data = await clienteAxios.get(`get/reservation?name=${name}`);
    if(!data.data.message){
      saveReservations(data.data)
    console.log(data.data)
    }else{
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.message}` });
      return;
    }
  }

//   const handelReservation = (e,setStatus) => {
    
//     let {name,value} = e.target;

//     setReservation({
//       ...nameReservation,
//       [name] : value
//     });

//     if(!value.length){
//       setStatus(true);
//     }
//   }

