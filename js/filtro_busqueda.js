let question=document.getElementById("Question");
let MeinBoxOne=document.getElementById("MainBoxOne");
let MainBoxtwo=document.getElementById("MeinBoxTwo");

let X=document.getElementById("elimanar");

question.addEventListener("click",()=>{
    MeinBoxOne.classList.remove("menu");
    MeinBoxOne.classList.add("menu-inactivo");
    MainBoxtwo.classList.remove("menu-Busqueda-inactivo");
    MainBoxtwo.classList.add("menu-Busqueda")
    
    X.addEventListener("click",()=>{
    MeinBoxOne.classList.add("menu");
    MeinBoxOne.classList.remove("menu-inactivo");
    MainBoxtwo.classList.add("menu-Busqueda-inactivo");
    MainBoxtwo.classList.remove("menu-Busqueda")
    })
})

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
    var periodo = hora >= 12 ? "P.M" : "A.M";
    if (hora > 12) {
        hora = hora - 12; // Convierte la hora a formato de 12 horas
    } else if (hora === 0) {
        hora = 12; // 00:00 se muestra como 12:00 AM
    }

    var horaActual = hora + ":" + minutos + " " + periodo;
  
    // Actualiza el contenido del elemento HTML con la hora
    document.getElementById("hora").innerText = horaActual;
}
  
// Actualiza la hora cada segundo (1000 milisegundos)
setInterval(mostrarHora, 1000);


const slider= document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".box-slider");
let sliderSectionLast=sliderSection[sliderSection.length-1];
const btnLeft=document.querySelector(".icon-arrow-left");
const btnRigth=document.querySelector(".icon-arrow-right");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst=document.querySelectorAll(".box-slider")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(() => {
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft="-100%";
    }, 500);
};
function moverIzquierda() {
    let sliderSection=document.querySelectorAll(".box-slider");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0%";
    slider.style.transition="all 0.5s";
    setTimeout(() => {
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft="-100%";
    }, 500);
};
btnRigth.addEventListener("click",function () {
    moverDerecha();
});
btnLeft.addEventListener("click",function () {
    moverIzquierda();
});


let Form_ana=document.getElementById("form-ana");
let btnCerrar=document.getElementById("close");
let Form_ana_inactivo=document.querySelector(".form-ana-inactivo")
btnCerrar.addEventListener("click",()=>{
    let boton=document.querySelector(".exit-style")
    if(boton.innerHTML==="Ana"){
        boton.innerHTML="x"
        boton.style.width="45px"
        boton.style.borderRadius = "50%";
        boton.style.fontSize = "2em";
        boton.style.transition="all 0.5s";
    }else{
        boton.innerHTML="Ana";
        boton.style.width="150px"
        boton.style.borderRadius = "7px";
        boton.style.transition="all 0.5s";
    }
})
btnCerrar.addEventListener("click",()=>{
    if (Form_ana.classList.contains("form-ana")) {
        Form_ana.classList.add("form-ana-inactivo")
        Form_ana.classList.remove("form-ana")
    }else{
        Form_ana.classList.remove("form-ana-inactivo")
        Form_ana.classList.add("form-ana") 
        
    }
    
})