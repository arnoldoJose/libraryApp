import clienteAxios from '../../../Config/config';
 export const getIds = async (datos) => {
  // let data = datos.filter(dt => console.log(document.getElementById(`${dt.book_id}`)))
  let trs = document.querySelector('.table tbody').children;
  let data = [...trs];
  data.filter((dt) => {
    dt.id === '601b62cb8a7a4824381fb278' ? console.log(dt) : null
    console.log(dt)
  })
  
    // let dt = [];
    // datos.forEach((Item) => {
    //   let data = clienteAxios.get(`get/book/${Item.book_id}`);
    //   dt.push(data);
    // });

    // let doc = await Promise.all(dt);

    // doc.forEach((it) => {
    //   datos.forEach((Item) => {
    //     if (Item.book_id === it.data.data._id && it.data.data.amount === 0) {
    //       let tr = document.getElementById(`${Item.book_id}`);
    //       tr.children[6].textContent = "No disponible";
    //       tr.children[6].style.background = "lightcoral";
    //       console.log(tr)
    //     } else if (Item.book_id === it.data.data._id && it.data.data.amount !== 0) {
    //       let tr = document.getElementById(`${Item.book_id}`);
    //       tr.children[6].textContent = "disponible";
    //       tr.children[6].style.background = "lightgreen"
    //     }
    //   });
    // });
  };