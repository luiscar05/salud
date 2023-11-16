let calificar = document.getElementById("calificar");

const GenerarCalificacion = () => {
  let calificacion = document.getElementById("estrellas").value;

  let estrellas = document.querySelector(".calificacion");
  estrellas.innerHTML = "";
  
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(calificacion)) {
      let iconoCompleto = document.createElement("i");
      iconoCompleto.className = "fa-solid fa-star";
      estrellas.appendChild(iconoCompleto);
      iconoCompleto.style.color = "gold";
    } else if (calificacion >= Math.floor(calificacion)+0.5 && i === Math.floor(calificacion) ){
      let iconoCompleto = document.createElement("i");
      iconoCompleto.className = "fa-solid fa-star-half-alt";
      estrellas.appendChild(iconoCompleto);
      iconoCompleto.style.color = "gold";
    }else{
        //Estrellas libres
    let icono = document.createElement("i");
    icono.className = "fa-regular fa-star";
    estrellas.appendChild(icono);
    }
  }
};

calificar.addEventListener("click", () => {
  GenerarCalificacion();
});
