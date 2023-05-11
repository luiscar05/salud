let leftArrow=document.getElementById("leftArrow");
let rightArrow=document.getElementById("rightArrow");

let MainImg=document.getElementById("paisaje1");
let MainImg2=Document.getElementById("paisaje2");
let MainImg3=document.getElementById("paisaje3");
let contador=0;
alert("hola");
leftArrow.addEventListener("click",function(){
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
    
    /* 
       */ 
    

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