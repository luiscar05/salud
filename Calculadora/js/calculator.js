
let menos = document.getElementById("EliminarUnvalor");
let pantalla=document.getElementById('numeros');
let limpiar=document.getElementById("limpiar");
let igual=document.getElementById("igual")

/* Funciones Calculadora */
menos.addEventListener("click",()=>{
    pantalla.value=pantalla.value.slice(0,-1);
    if (pantalla.value==='') {
        pantalla.value = "0"
    }   
});

limpiar.addEventListener("click",()=>{
    pantalla.value=0;
})
    
igual.addEventListener("click",()=>{
    try {
        pantalla.value=eval(pantalla.value);
        if (pantalla.value == "undefined") {
        pantalla.value= "0"
            
        }
    } catch (error) {
        pantalla.value= "0"
    }
    
    
})
function addInput(valores) {
    if (pantalla.value=='0') {
        document.getElementById('numeros').value = valores;
    }else{
        document.getElementById('numeros').value += valores;
    }  
} 
/* funciones estilos */
let opcion1 = document.querySelector(".option-1")
let opcion2 = document.querySelector(".option-2")
let opcion3 = document.querySelector(".option-3")
let input1=document.getElementById("input1")
let hijoImput1=document.getElementById("hijo1")
let input2=document.getElementById("input2")
let input3=document.getElementById("input3")
let box2 = document.createElement("div");
let box=document.createElement("div")
let texto = document.querySelector(".dox-text")
let boxBotones=document.getElementById("boxNumeros")
let fondotemas=document.querySelector(".brc")
let fondotemas2=document.querySelector(".brc2")
let fondotemas3=document.querySelector(".brc3")
opcion1.addEventListener("click",()=>{
    input1.appendChild(hijoImput1)
    if (input2.contains(box2)) {
        input2.removeChild(box2);
    }
    
    if (input3.contains(box)) {
        input3.removeChild(box);
    }
    document.body.classList.add("cuerpo-estilizado");
    cambiarColorFondo(" rgb(59,70,100)")
    texto.style.color="white";
    opcion1.style.color="white"
    opcion2.style.color="white"
    opcion3.style.color="white"
    pantalla.style.background=" rgb(25,31,50)"
    pantalla.style.color="white"
    boxBotones.style.background="rgb(25,31,50)"
    fondotemas.style.background=" #252D44"
    fondotemas2.style.background=" #252D44"
    fondotemas3.style.background=" #252D44"
    document.body.style.transition = "all 1s";/* "#D3CDCD" */

})
opcion2.addEventListener("click",()=>{
    input2.appendChild(box2);
    box2.setAttribute("class", "bn bg-danger rounded-circle w-50 move-right");
    box2.setAttribute("style", "height: 10px;");
    if (input1.contains(hijoImput1)) {
        input1.removeChild(hijoImput1);
    }
    
    if (input3.contains(box)) {
        input3.removeChild(box);
    }

    document.body.classList.add("cuerpo-estilizado");
    cambiarColorFondo("#E6E6E6")
    texto.style.color="black";
    opcion1.style.color="black"
    opcion2.style.color="black"
    opcion3.style.color="black"
    pantalla.style.background="#EEEEEE"
    pantalla.style.color="black"
    boxBotones.style.background="#D3CDCD"
    fondotemas.style.background="#D3CDCD"
    fondotemas2.style.background=" #D3CDCD"
    fondotemas3.style.background=" #D3CDCD"
    document.body.style.transition = "all 2s";/* "#D3CDCD" */
       
})
opcion3.addEventListener("click",()=>{
    input3.appendChild(box)
    box.setAttribute("class","bn bg-dorado rounded-circle w-50")
    box.setAttribute("style","height: 10px;")
    
    if (input1.contains(hijoImput1)) {
        input1.removeChild(hijoImput1);
    }
    if (input2.contains(box2)) {
        input2.removeChild(box2);
    }
    document.body.classList.add("cuerpo-estilizado");
    cambiarColorFondo("#17062A")
    texto.style.color="#FFE541";
    opcion1.style.color="#FFE541"
    opcion2.style.color="#FFE541"
    opcion3.style.color="#FFE541"
    pantalla.style.background="#1E0836"
    pantalla.style.color="#FFE541"
    boxBotones.style.background="#1E0836"
    fondotemas.style.background="#1E0836"
    fondotemas2.style.background=" #1E0836"
    fondotemas3.style.background=" #1E0836"
    document.body.style.transition = "all 2s";/* "#D3CDCD" */
   /*  input1.removeChild(hijoIm
    put1) */
})
function cambiarColorFondo(color) {
    document.body.style.background = `${color} `;
    document.body.style.transition = "all 1s";
    
    
}



