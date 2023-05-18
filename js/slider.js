let leftArrow=document.getElementById("leftArrow");
let rightArrow=document.getElementById("rightArrow");

let MainImg=document.getElementById("paisaje1");
let MainImg2=document.getElementById("paisaje2");
let MainImg3=document.getElementById("paisaje3");
let contador=1;
leftArrow.addEventListener("click",function () {
    if (MainImg.classList.contains("paisaje-1")) {
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg2.classList.remove("paisaje-2-hidden")
        MainImg2.classList.remove("paisaje-2-hidden-left")
        MainImg2.classList.add("paisaje-2")
    }else if(MainImg2.classList.contains("paisaje-2")){
        MainImg2.classList.remove("paisaje-2")
        MainImg2.classList.add("paisaje-2-hidden-left") 
        MainImg3.classList.add("paisaje-3")
        MainImg3.classList.remove("paisaje-3-hidden")
    }else if (MainImg3.classList.contains("paisaje-3")) {
        MainImg3.classList.remove("paisaje-3")
        MainImg3.classList.add("paisaje-3-hidden")
        MainImg.classList.add("paisaje-1")
        MainImg.classList.remove("paisaje-1-hidden")
    }
}) 
rightArrow.addEventListener("click",function () {
    if (MainImg.classList.contains("paisaje-1")) {
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg3.classList.add("paisaje-3")
        MainImg3.classList.remove("paisaje-3-hidden")
    }else if (MainImg3.classList.contains("paisaje-3")) {
        MainImg3.classList.remove("paisaje-3")
        MainImg3.classList.add("paisaje-3-hidden-left")
        MainImg2.classList.add("paisaje-2")
        MainImg2.classList.remove("paisaje-2-hidden")
    }else if(MainImg2.classList.contains("paisaje-2")){
        MainImg2.classList.remove("paisaje-2")
        MainImg2.classList.add("paisaje-2-hidden-left") 
        MainImg1.classList.add("paisaje-1")
        MainImg1.classList.remove("paisaje-1-hidden")
    }
}) 

/* const boxMarco=document.querySelector(".box-marco")
const puntos =document.querySelectorAll(".puntos")

puntos.forEach( (cadaPunto,i)=>{
    puntos[i].addEventListener("click",()=>{
        let posicion=i
        let operacion= posicion*-33

        boxMarco.style.transform= `translateX(${operacion}%)`
    })
})  */



/* leftArrow.addEventListener("click",function(){
    alert("si")
    if (contador===1) { 
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg2.classList.add("paisaje-2")
        MainImg2.classList.remove("paisaje-2-hadden")  
        MainImg3.classList.add("paisaje-3-hidden")
        contador=2  
    }
    else if (contador===2) {
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg2.classList.remove("paisaje-2")
        MainImg2.classList.add("paisaje-2-hidden") 
        MainImg3.classList.add("paisaje-3")
        MainImg3.classList.remove("paisaje-3-hidden")  
        contador=3  
    }
    if (contador===3) {
        MainImg3.classList.add("paisaje-3-hidden")
        MainImg3.classList.remove("paisaje-3")
        MainImg2.classList.remove("paisaje-2")
        MainImg2.classList.add("paisaje-2-hidden")
        MainImg.classList.add("paisaje-1")
        MainImg.classList.remove("paisaje-1-hidden")
        contador=1;    
    } 
})
  
    

/* rightArrow.addEventListener("click",function () {
    if (MainImg.classList.contains("paisaje-1")) { 
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg3.classList.add("paisaje-3")
        MainImg3.classList.remove("paisaje-3-hidden-left") 
    }else if ( MainImg2.classList.contains("paisaje-2")) {
        MainImg2.classList.remove("paisaje-2")
        MainImg2.classList.add("paisaje-2-hidden-left") 
        MainImg3.classList.add("paisaje-1")
        MainImg3.classList.remove("paisaje-1-hidden") 
    }else{
        MainImg.classList.remove("paisaje-1")
        MainImg.classList.add("paisaje-1-hidden")
        MainImg2.classList.add("paisaje-2")
        MainImg2.classList.remove("paisaje-2-hidden") 
    }
}) */

 