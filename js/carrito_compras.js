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
    BoxMini1.classList.add("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.remove("box-img-mini")
    BoxMini1.classList.add("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini2.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-2(1).jpg"); 
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.add("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.remove("box-img-mini") 
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.add("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini3.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-3.jpg");  
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.add("box-img-mini")
    BoxMini4.classList.remove("box-img-mini")
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.add("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini4.addEventListener("click",function () {
    imgPrincipal.setAttribute("src","img/image-product-4.jpg");
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.add("box-img-mini")
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.add("img-mini-activo")
})
/* botones de aumentar y disminuir compra */
let btnRestar=document.getElementById("restaObj")
let btnSumar=document.getElementById("sumaObj")
let contObj=document.getElementById("cantidad_obj")
let cantBox=document.getElementById("cantBox")
let numElementos= document.getElementById("numeroElement")
let CostoProducto=document.getElementById("costoPro")

btnRestar.addEventListener("click",function(){
    
    let numElementosTxt=document.getElementById("numeroElement").innerHTML
    let CostoProductoTxt=document.getElementById("costoPro").innerHTML
    
    if (numElementosTxt>0) {
        numElementos.innerHTML=""
        let elemntInt=parseInt(numElementosTxt)
        let totalElementosInt=elemntInt-1
        let totalElementosTxt=totalElementosInt.toString()
        numElementos.innerHTML=totalElementosTxt 

        let CostoProductoInt= parseInt(CostoProductoTxt)
        let TotalProductoInt= 85000*totalElementosInt
        let totalProductoTxt=TotalProductoInt.toString()
        totalProductoTxt="$"+ new Intl.NumberFormat().format(totalProductoTxt)
        CostoProducto.innerHTML=totalProductoTxt


    }
})
btnSumar.addEventListener("click",function(){
    let numElementosTxt=document.getElementById("numeroElement").innerHTML
    let CostoProductoTxt=document.getElementById("costoPro").innerHTML
    if (numElementosTxt<10) {
        numElementos.innerHTML=""
        let elemntInt=parseInt(numElementosTxt)
        let totalElementosInt=elemntInt+1
        let totalElementosTxt=totalElementosInt.toString()
        numElementos.innerHTML=totalElementosTxt  


        let CostoProductoInt= parseInt(CostoProductoTxt)
        let TotalProductoInt= 85000*totalElementosInt
        let totalProductoTxt=TotalProductoInt.toString()
        totalProductoTxt= "$ "+new Intl.NumberFormat().format(totalProductoTxt)
        CostoProducto.innerHTML=totalProductoTxt
    }
})
let ConfirCompra=document.getElementById("ConfirCompra")
let ProductAdd = document.getElementById("Product-add") 
let CantPro=document.getElementById("numeroElement").innerHTML
ConfirCompra.addEventListener("click",function(){
    alert ("Producto Agregado Al Carrito")
    ProductAdd.classList.remove("product-add")
    ProductAdd.classList.add("product-add-activo")
    ProductAdd.innerHTML=CantPro
})