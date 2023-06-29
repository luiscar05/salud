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






