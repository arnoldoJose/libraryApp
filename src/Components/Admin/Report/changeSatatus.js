import clienteAxios from "../../../Config/config";

export const changeState = async (id,bookId,setStatus,Swal) => {

    let data = await clienteAxios.post(`update/reservation/${id}/?bookI=${bookId}`);
    if (data.data.message) {
      Swal.fire(`${data.data.message}`, "You clicked the button!", "success");
      setStatus(true);
    } else if (data.data.messageError){
      Swal.fire({ icon: 'error', title: 'Oops...', text: `${data.data.messageError}` });
    }
    return;
  }