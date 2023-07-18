console.log("validacion de fecha")
console.log ("obtener fecha y hora del navegador")
let TimeGTM = new Date();
console.log(TimeGTM)
let timeGTMsrc =TimeGTM.toString();
console.log("fecha y hora en string")
console.log(timeGTMsrc)
console.log("Dia de la semana")
let TimeGTMday=TimeGTM.getDay();
let diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
console.log("hoy es "+diaSemana[TimeGTMday])

console.log("mes actual")
let TimeGTMmes=TimeGTM.getMonth();
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julios","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log(meses[TimeGTMmes])

console.log("año actual")
let TimeGTMyear=TimeGTM.getFullYear();
console.log(TimeGTMyear)

console.log("fecha y hora desfragmentada")
let currenTime=new Date;
console.log("dia de la semana "+currenTime.getDay())
console.log("mes del año "+currenTime.getMonth())
console.log("dia del mes "+currenTime.getDate())
console.log("año actual "+currenTime.getFullYear())
console.log("horas "+currenTime.getHours())
console.log("minutos "+currenTime.getMinutes())
console.log("segundos "+currenTime.getSeconds())
console.log("milisegundos "+currenTime.getMilliseconds())

console.log("Estableciendo diferencia de  horas")
let newYear2024=new Date("january 1, 2024")
let fecha_actual=new Date();
let newYear2024ms=newYear2024.getTime();
let fecha_actualms=fecha_actual.getTime();

let miliSecDif=newYear2024ms-fecha_actualms
let diaDif=miliSecDif/(1000 * 60 * 60  * 24)
/* console.log(diaDif) */
console.log("Faltan " + Math.floor(diaDif) + " dias para año nuevo")


console.log("fecha y horas")

/* console.log("segundos faltantes "+diaVot/1000)
console.log("Minutos faltantes "+diaVot/(1000*60))
console.log("Horas faltantes "+diaVot/(1000*60*60))
console.log("Dias faltantes "+diaVot/(1000*60*60*24)) */

calcularTiempoVotaciones();
function calcularTiempoVotaciones() {
    let InitVot=new Date("July 2 , 2023  08:00:00")
    let InitVotns = InitVot.getTime();
    let diaVot = InitVotns-fecha_actualms
    let diasRestantes= Math.floor(diaVot/(1000 * 60 * 60 * 24))
 /*    let DiasRestantesSms= Math.floor(diasRestantes%24) */
    let horasRestantes = Math.floor(diaVot/(1000 * 60 * 60));
    let HorasRestantesSms = Math.floor(horasRestantes % 24)
    let minutosRestantes = Math.floor(diaVot/(1000 * 60))
    let MinutosRestantesSms = Math.floor(minutosRestantes % 60)
    
    console.log("faltan "+diasRestantes+" Dias " + HorasRestantesSms + " horas " + MinutosRestantesSms + " Minutos. Para las Votaciones")
}







/*  */
/*  */
/*  */
/* validacion_fecha.js (salud) */

let fechaLimiteMs=fechaLimite.getTime();
let fechaActualMs=fechaActual.getTime();
let tiempoRestante=fechaLimiteMs-fechaActualMs
let dias=Math.floor(tiempoRestante/(1000 * 60 * 60 *24)) 
let horasRestantes = Math.floor(tiempoRestante/(1000 * 60 * 60));
let HorasRestantesSms = Math.floor(horasRestantes % 24)
let minutosRestantes = Math.floor(tiempoRestante/(1000 * 60))
let MinutosRestantesSms = Math.floor(minutosRestantes % 60)
alert ("faltan "+dias + " dias " + HorasRestantesSms + " horas y " + MinutosRestantesSms+ " Minutos para finalizar la fecha de entrega " )


/*  */
/*  */
/*  */
/* codigo anterior */

let fecha = document.getElementById("fechas")
let hora_vencimiento=document.getElementById("horas");
let boton=document.getElementById("boton");
let fechaVencimiento=fecha.value
boton.addEventListener("click",function () {

    let fechastr=fecha.value


    /* alert(horastr) */
    let fecha_Vencimiento=new Date(fechastr)
    let anio=fecha_Vencimiento.getFullYear()
    let mes=fecha_Vencimiento.getMonth()
    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let dia=fecha_Vencimiento.getDate()+1

   
        

     let horario=new Date(hora_vencimiento.value )
    let hora=horario.getHours()
    let minutos=horario.getMinutes()
    let segundos=horario.getSeconds() 

    /* alert(`la fecha es ${meses[mes]} ${dia} ${anio} y la hora es ${hora}` ) */
   let fechaLimite = new Date(`${anio} ${meses[mes]} , ${dia}    ${hora_vencimiento.value}`)
/*   alert(`${meses[mes]} ${dia} , ${anio}` ) */
    let fechaActual=new Date() 
/*      alert (fechaActual.toString())  */
    if (fechaLimite.toString() > fechaActual.toString() ) { 
        let tiempoRestante = fechaLimite.getTime() - fechaActual.getTime();
        let segundos = Math.floor(tiempoRestante / 1000) % 60;
        let minutos = Math.floor(tiempoRestante / (1000 * 60)) % 60;
        let horas = Math.floor(tiempoRestante / (1000 * 60 * 60)) % 24;
        let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        alert("Faltan " + dias + " días, " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos para la fecha de Finaclicacion.");

    }else{ 

        alert ("Lo siento La fecha ya paso. No puedes entregar tu archivo")
        
    } 
})




