class autoMovil {
    constructor(marca, modelo,precio){
        this.marca = marca
        this.modelo = modelo 
        this.precio= precio

    }
}
let auto1 = new autoMovil("Mazda","TXL",256000000)
let inputBusqueda= document.getElementById("Busquedas");
inputBusqueda.addEventListener("keydown",(event)=>{
    if (event.key == "Enter") {
        if (inputBusqueda.value== 'toyota') {
            Producto(auto1);
        }else{
            console.log('error no se encontro el objeto')
        }
    }
    
})
const Producto = (auto)=>{
        let mainContent = document.getElementById("main-content");
       /* Creando contenedor para el veiculo */
        let boxAuto=document.createElement('div')
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto") 
        /* Crear contenedor para el vehiculo */
        let boxImg=document.createElement('img');
        boxAuto.appendChild(boxImg);
        boxImg.setAttribute('class','box-img');
        boxImg.src=`./img/${toyota}`
        /* Crear contenedor para la info */
        let BoxInfo=document.createElement('div')
        BoxInfo.setAttribute("class","box-info");
        boxAuto.appendChild(BoxInfo);
        let TxtMarca=document.createElement("label");
        BoxInfo.appendChild(TxtMarca)
        /* crear informacion texto */
        TxtMarca.innerText = auto.marca+'\n ';
        let Txtmodelo=document.createElement('label');
        BoxInfo.appendChild(Txtmodelo);
        Txtmodelo.innerText = ' '+auto.modelo+'\n';
        Txtprecio=document.createElement('label');
        BoxInfo.appendChild(Txtprecio)
        Txtprecio.setAttribute("class",'precio');
        Txtprecio.innerText="\n $ "+ new Intl.NumberFormat().format(auto.precio);
}