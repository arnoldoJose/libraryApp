


  let quitar = () => {
    document.querySelector(".container-prestamos").style.display = "none";
    document.querySelector(".container-specific").style.display = "block";
  };

  let ver = () => {
    document.querySelector(".container-prestamos").style.display = "block";
    document.querySelector(".container-specific").style.display = "none";
  };
  
  module.exports = { quitar, ver }