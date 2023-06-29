/* 
function Hora() {
let fecha= new Date();
let horaDia=fecha.getHours();
let MinutosDia=fecha.getMinutes();
let SegundosDia=fecha.getSeconds();

  horaDia = horaDia < 10 ? "0" +  horaDia :  horaDia;
  MinutosDia = MinutosDia < 10 ? "0" + MinutosDia : MinutosDia;
  SegundosDia = SegundosDia < 10 ? "0" + SegundosDia : SegundosDia;

let HoraActual= horaDia + ":" + MinutosDia + ":" + SegundosDia;
document.getElementById("horas").innerHTML=HoraActual
}setInterval(hora,1000) */
function mostrarHora() {
    // Obtén la hora actual
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    // Formatea la hora para que siempre tenga dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    // Construye la cadena de texto con la hora
    if (hora>=12) {
        var horaActual = hora + ":" + minutos + ":" + segundos+" P.M"
    }else{
        var horaActual = hora + ":" + minutos + ":" + segundos+" A.M"
    }

    
  
    // Actualiza el contenido del elemento HTML con la hora
    document.getElementById("hora").innerText = horaActual;
  }
  
  // Actualiza la hora cada segundo (1000 milisegundos)
  setInterval(mostrarHora, 1000);
  