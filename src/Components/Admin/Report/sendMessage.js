import clienteAxios from "../../../Config/config";

export const sendMessage = async (mobil, name,Swal) => {
    let data = await clienteAxios.post(`send/message?phone=${mobil}&name=${name}`);
    console.log(data)
    if (data.status === 200) {
      Swal.fire(`El usuario ${name} a sido notificado`, "You clicked the button!", "success");
    }
  }