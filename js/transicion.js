let Box,togol,togola
Box=document.getElementById('aletas');
togol=document.getElementById('activo');
togola=document.getElementById('cambio')
Box.addEventListener("click", function() {
    if (Box.classList.contains("box-3-old")){
        Box.classList.add("box-3-new")
        Box.classList.remove("box-3-old")
    }else{
        Box.classList.remove("box-3-new")
        Box.classList.add("box-3-old")
    }
})
togola.addEventListener("click",function (){
    if (togol.classList.contains("boton")/* &&(togola.classList.contains("boton-fondo")) */){
        togol.classList.add("boton-activo")
        togol.classList.remove("boton")
        togola.classList.add("boton-fondo-activo")
        togol.classList.remove("boton-fondo")
    }else{
        togol.classList.remove("boton-activo")
        togol.classList.add("boton")
        togola.classList.remove("boton-fondo-activo")
        togola.classList.add("boton-fondo")
    }      
})