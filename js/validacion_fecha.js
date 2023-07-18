let fecha = document.getElementById("fechas");
let hora_vencimiento = document.getElementById("horas");
let boton = document.getElementById("boton");
let fechaVencimiento = fecha.value;

boton.addEventListener("click", function() {
  let fechastr = fecha.value;
  let horastr = hora_vencimiento.value;

  console.log("Fecha ingresada:", fechastr);
  console.log("Hora ingresada:", horastr);

  let fecha_Vencimiento = new Date(fechastr);
  let anio = fecha_Vencimiento.getFullYear();
  let mes = fecha_Vencimiento.getMonth();
  let dia = fecha_Vencimiento.getDate();

  let [hora, minutos] = horastr.split(":");

  console.log("Fecha construida:", anio, mes, dia);
  console.log("Hora construida:", hora, minutos);

  let fechaLimite = new Date(anio, mes, dia, hora, minutos);
  let fechaActual = new Date();

  console.log("Fecha límite:", fechaLimite);
  console.log("Fecha actual:", fechaActual);

  if (!fecha.value || !hora_vencimiento.value) {
    alert("Debes Ingresar una Fecha o una Hora")
  }else{
    if (fechaLimite.getTime() > fechaActual.getTime()) {
      let tiempoRestante = fechaLimite.getTime() - fechaActual.getTime();
      let segundos = Math.floor(tiempoRestante / 1000) % 60;
      let minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
      let horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
      let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      alert(
        "Faltan " +
          dias +
          " días, " +
          horas +
          " horas, " +
          minutos +
          " minutos y " +
          segundos +
          " segundos para la fecha de finalización."
      );
    } else {
      alert("Lo siento, la fecha ya pasó. No puedes entregar tu archivo.");
    }
  }
 
});

