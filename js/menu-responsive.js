let Desplegable=document.getElementById("menuclick")
let DespliegeVertical=document.getElementById("desplegable")
Desplegable.addEventListener("click",function(){
    if (DespliegeVertical.classList.contains("despliege-inactivo")){
        DespliegeVertical.classList.add("vertical")
        DespliegeVertical.classList.remove("despliege-inactivo")
    }else{
        DespliegeVertical.classList.add("despliege-inactivo")
        DespliegeVertical.classList.remove("vertical")  
    }
})

