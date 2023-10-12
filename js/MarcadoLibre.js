class autoMovil {
    constructor(marca, modelo,precio,imagen,anio,lugar,kilometros){
        this.marca = marca
        this.modelo = modelo 
        this.precio= precio
        this.imagen=imagen
        this.anio=anio
        this.lugar=lugar
        this.kilometros=kilometros

    }
}
let auto1 = new autoMovil("Mazda","TXL",256000000,`./img/Mazda.jpg`,2024,"Pitalto-Huila",0)
let productos=[auto1]
let inputBusqueda= document.getElementById("Busquedas");
let lupa=document.getElementById("lupa")
inputBusqueda.addEventListener("keydown",(event)=>{
    if (event.key == "Enter") {
        if (inputBusqueda.value="Mazda") {
            Producto(auto1);
        }else{
            error()
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
        boxImg.src=auto.imagen 
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
        Txtprecio=document.createElement('h3');
        BoxInfo.appendChild(Txtprecio)
        Txtprecio.setAttribute("class",'precio');
        Txtprecio.innerText="\n $ "+ new Intl.NumberFormat().format(auto.precio);
        // año
        txtanio=document.createElement('label');
        BoxInfo.appendChild(txtanio)
        txtanio.setAttribute("class",'anio');
        txtanio.innerHTML=auto.anio+" ";
        //lugar
        txtLugar=document.createElement('label');
        BoxInfo.appendChild(txtLugar)
        txtLugar.setAttribute("class",'lugar');
        txtLugar.innerHTML=" " + auto.lugar+" ";
        // kilometros
        txtKm=document.createElement('label');
        BoxInfo.appendChild(txtKm)
        txtKm.setAttribute("class",'kilometros');
        txtKm.innerHTML=+new Intl.NumberFormat().format(auto.kilometros)+'Km';

}
const error=()=>{
    let mainContent = document.getElementById("main-content");

    let errores=document.createElement('div');
    mainContent.appendChild(errores)
    errores.setAttribute("class","BoxError");
    errores.innerHTML=`
    <div class="container alert alert-danger d-flex align-items-center flex-column w-50 mt-5" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class=" colorText bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        <div class='h1 pt-3'>
            <p class="colorText">No se encontraron elementos</p>
        </div>
    </div>`;
}