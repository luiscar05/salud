function mostrarHora() {
    // Obtén la hora actual
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    // Formatea la hora para que siempre tenga dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    
  
    // Construye la cadena de texto con la hora
    if (hora>=12) {
        var horaActual = hora + ":" + minutos + "P.M"
    }else{
        var horaActual = hora + ":" + minutos + " A.M"
    }

    
  
    // Actualiza el contenido del elemento HTML con la hora
    document.getElementById("hora").innerText = horaActual;
  }
  
  // Actualiza la hora cada segundo (1000 milisegundos)
  setInterval(mostrarHora, 1000);
  