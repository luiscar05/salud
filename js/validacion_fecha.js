/* let fecha=document.getElementById("fechas")
let hora=document.getElementById("horas").innerHTML
let boton=document.getElementById("boton")

let horaStr=hora.toString

boton.addEventListener("click",function () {

    alert(horaStr)
}) */
let fecha = document.getElementById("fechas")

let hora=document.getElementById("horas");
let boton=document.getElementById("boton");
boton.addEventListener("click",function () {
    /* alert(fecha.value +  "                    " + hora.value) */
   alert(fecha);
})

let fechaLimite = new Date("July 2 ,2023 12:00:00")
/* alert(fechaLimite); */
let fechaActual=new Date()

if (fechaActual<fechaLimite) {
    let fechaLimiteMs=fechaLimite.getTime();
    let fechaActualMs=fechaActual.getTime();
    let tiempoRestante=fechaLimiteMs-fechaActualMs
    let dias=Math.floor(tiempoRestante/(1000 * 60 * 60 *24)) 
    let horasRestantes = Math.floor(tiempoRestante/(1000 * 60 * 60));
    let HorasRestantesSms = Math.floor(horasRestantes % 24)
    let minutosRestantes = Math.floor(tiempoRestante/(1000 * 60))
    let MinutosRestantesSms = Math.floor(minutosRestantes % 60)
    console.log ("faltan "+dias + " dias " + HorasRestantesSms + " horas y " + MinutosRestantesSms+ " Minutos para finalizar la fecha de entrega " )
}else{
    console.log ("Lo siento La fecha ya paso. No puedes entregar tu archivo")
}


