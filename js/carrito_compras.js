let imgPrincipal=document.getElementById("imgBox")
let BoxMini1=document.getElementById("boxMini1")
let BoxMini2=document.getElementById("boxMini2")
let BoxMini3=document.getElementById("boxMini3")
let BoxMini4=document.getElementById("boxMini4")
let imgMini1=document.getElementById("imgMini1")
let imgMini2=document.getElementById("imgMini2")
let imgMini3=document.getElementById("imgMini3")
let imgMini4=document.getElementById("imgMini4")
let btnCerrar=document.getElementById("cerrar")
let LighBox= document.getElementById("lightBox")



btnCerrar.addEventListener("click",function () {
    LighBox.classList.add("ligh-hidden")
})
imgPrincipal.addEventListener("click",function () {
    LighBox.classList.remove("ligh-hidden")   
})
    

imgMini1.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-1.jpg"); 
    BoxMini1.classList.add("box-radio")
    BoxMini2.classList.remove("box-radio")
    BoxMini3.classList.remove("box-radio")
    BoxMini4.classList.remove("box-radio")
})
imgMini2.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-2(1).jpg"); 
    BoxMini1.classList.remove("box-radio")
    BoxMini2.classList.add("box-radio")
    BoxMini3.classList.remove("box-radio")
    BoxMini4.classList.remove("box-radio") 
})
imgMini3.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-3.jpg");  
    BoxMini1.classList.remove("box-radio")
    BoxMini2.classList.remove("box-radio")
    BoxMini3.classList.add("box-radio")
    BoxMini4.classList.remove("box-radio")
   
})
imgMini4.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-4.jpg");
    BoxMini1.classList.remove("box-radio")
    BoxMini2.classList.remove("box-radio")
    BoxMini3.classList.remove("box-radio")
    BoxMini4.classList.add("box-radio")
    /* BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.add("img-mini-activo") */
})


/* botones de aumentar y disminuir compra */
let btnRestar=document.getElementById("restaObj")
let btnSumar=document.getElementById("sumaObj")
let contObj=document.getElementById("cantidad_obj")
let cantBox=document.getElementById("cantBox")
let numElementos= document.getElementById("numeroElement")
let CostoProducto=document.getElementById("costoPro")

let ConfirCompra=document.getElementById("ConfirCompra")
let ProductAdd = document.getElementById("Product-add") 
contador=0;
btnRestar.addEventListener("click",function(){
    
    let numElementosTxt=document.getElementById("numeroElement").innerHTML
    let CostoProductoTxt=document.getElementById("costoPro").innerHTML
    
    if (numElementosTxt>0) {
        numElementos.innerHTML=""
        let elemntInt=parseInt(numElementosTxt)
        let totalElementosInt=elemntInt-1
        let totalElementosTxt=totalElementosInt.toString()
        numElementos.innerHTML=totalElementosTxt 
        ProductAdd.innerHTML=totalElementosTxt
        
        let CostoProductoInt= parseInt(CostoProductoTxt)
        let TotalProductoInt= 85000*totalElementosInt
        let totalProductoTxt=TotalProductoInt.toString()
        totalProductoTxt="$"+ new Intl.NumberFormat().format(totalProductoTxt)
        CostoProducto.innerHTML=totalProductoTxt


        
        
        
    }
    // let productRes=parseInt(totalElementosTxt)
    //     let totalProRes=productRes-1
    //     let TotalProducto=totalProRes.toString()
    //     ProductAdd.innerHTML=TotalProducto
    
   
})

btnSumar.addEventListener("click",function(){
    let numElementosTxt=document.getElementById("numeroElement").innerHTML
    let CostoProductoTxt=document.getElementById("costoPro").innerHTML
    if (numElementosTxt<10) {
        numElementos.innerHTML=""
        let elemntInt=parseInt(numElementosTxt)
        let totalElementosInt=elemntInt+1
        var totalElementosTxt=totalElementosInt.toString()
        numElementos.innerHTML=totalElementosTxt  


        let CostoProductoInt= parseInt(CostoProductoTxt)
        let TotalProductoInt= 85000*totalElementosInt
        let totalProductoTxt=TotalProductoInt.toString()
        totalProductoTxt= "$ "+new Intl.NumberFormat().format(totalProductoTxt)
        CostoProducto.innerHTML=totalProductoTxt

    }

    ProductAdd.innerHTML=totalElementosTxt
    btnRestar.addEventListener("click",function () {
        let productRes=parseInt(totalElementosTxt)
        let totalProRes=productRes-1
        let TotalProducto=totalProRes.toString()
        ProductAdd.innerHTML=TotalProducto
    })      
})


ConfirCompra.addEventListener("click",function(){
    alert ("Producto Agregado Al Carrito")
    ProductAdd.classList.remove("product-add")
    ProductAdd.classList.add("product-add-activo")  
})
let imagenes=['img/image-product-1.jpg','img/image-product-2(1).jpg','img/image-product-3.jpg','img/image-product-4.jpg']
let cont=0
let somb=0
function carrusel( contenedor ) {
    contenedor.addEventListener("click",e =>{
        let atras=contenedor.querySelector('.atras'),
         adelante=contenedor.querySelector('.adelante'),
         img =contenedor.querySelector('.img-main-ligh'),
         tgt =e.target;
        
        if (tgt==atras) {
            if (cont>0) {
                img.src=imagenes[cont-1]
                cont--
                
                
                
            } else {
               img.src=imagenes[imagenes.length-1] 
               cont=imagenes.length-1
               
              
            }
            somb--
            if (somb==0) {
                boxSecond1.classList.add("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.remove("box-radio")
                
        
            }else if (somb==1) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.add("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.remove("box-radio")
                
            }else if (somb==2) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.add("box-radio")
                boxSecond4.classList.remove("box-radio")
                
            }else if (somb==3) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.add("box-radio")
                
            }else{
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.add("box-radio")
               
                somb=3
            }  
        }if (tgt==adelante) {
            if (cont < imagenes.length-1) {
                img.src=imagenes[cont+1]
                cont++
                
            } else {
               img.src=imagenes[0] 
               cont=0
               
            }
            somb++
            if (somb==0) {
                boxSecond1.classList.add("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.remove("box-radio")
                
        
            }else if (somb==1) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.add("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.remove("box-radio")
               
            }else if (somb==2) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.add("box-radio")
                boxSecond4.classList.remove("box-radio")
               
            }else if (somb==3) {
                boxSecond1.classList.remove("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.add("box-radio")
               
            } else{
                boxSecond1.classList.add("box-radio")
                boxSecond2.classList.remove("box-radio")
                boxSecond3.classList.remove("box-radio")
                boxSecond4.classList.remove("box-radio")
                somb=0
                
            }   
        }
       
       
    })  
    
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor= document.querySelector('.lighbox')

    carrusel(contenedor)
})



let imgMainLigh=document.getElementById("imgMainLigh")
let btnAdelante=document.getElementById("btnadelante")
let btnAtras=document.getElementById("btnatras")
let imgSecundary=document.getElementById("imgSecundary")
let imgSecundaryOne=document.getElementById("imgSecundary-one")
let imgSecundaryTwo=document.getElementById("imgSecundary-two")
let imgSecundaryThree=document.getElementById("imgSecundary-three")
let imgSecundaryFour=document.getElementById("imgSecundary-four")
let boxSecond1=document.getElementById("boxImgSecond1")
let boxSecond2=document.getElementById("boxImgSecond2")
let boxSecond3=document.getElementById("boxImgSecond3")
let boxSecond4=document.getElementById("boxImgSecond4")
let imgMainLighInner=document.getElementById("imgMainLigh").innerHTML
boxSecond1.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-1.jpg");
    boxSecond1.classList.add("box-radio")
    boxSecond2.classList.remove("box-radio")
    boxSecond3.classList.remove("box-radio")
    boxSecond4.classList.remove("box-radio")
    
    
})
boxSecond2.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-2(1).jpg")
    boxSecond1.classList.remove("box-radio")
    boxSecond2.classList.add("box-radio")
    boxSecond3.classList.remove("box-radio")
    boxSecond4.classList.remove("box-radio")
    
})
boxSecond3.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-3.jpg");  
    boxSecond1.classList.remove("box-radio")
    boxSecond2.classList.remove("box-radio")
    boxSecond3.classList.add("box-radio")
    boxSecond4.classList.remove("box-radio")
   
})
boxSecond4.addEventListener("click",function(){
    imgMainLigh.setAttribute("src","img/image-product-4.jpg");
    boxSecond1.classList.remove("box-radio")
    boxSecond2.classList.remove("box-radio")
    boxSecond3.classList.remove("box-radio")
    boxSecond4.classList.add("box-radio")
    
}) 
