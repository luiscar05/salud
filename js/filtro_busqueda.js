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