let texto=require("readline-sync")
console.log ("Bienvenido seleccione una opcion")
let menu ={
    "1":"Registrar",
    "2":"Eliminar",
    "3":" Listar Definitiva ",
    "4":" Perdieron ",
    "5":"Salir"
}
let estudiantes=[];

while (menu!=5) {
    let menu ={
        "1":"Registrar",
        "2":"Eliminar",
        "3":"Listar Usuarios",
        "4":"Lista Reprobados",
        "5":"Lista Definitivas",
        "6":"Salir"
    }
    console.table (menu)
    
    let opcion=texto.question("Seleccione Una Opcion ")
    if (opcion==1) {
        Registrar()
    }else if(opcion==2){
        let persona = texto.question("Ingrese una persona: ");
        console.log("seleccione que desea eliminar")
        let opciones={
            "1":"identificacion",
            "2":"nombre",
            "3":"Notas",
            "4":"Todo"
        }
        console.table(opciones)
        let tipo = texto.question("");
        if (tipo == 1) {
            eliminar(estudiantes[persona], "Identificacion");
          } else if (tipo == 2) {
            eliminar(estudiantes[persona], "nombre");
          } else if (tipo == 3) {
            eliminar(estudiantes[persona], "notas");
          }else if(tipo==4){
              estudiantes.splice(persona,estudiantes.length)
              console.log("Usuario Eliminado Exitosamente")
          }
    }else if(opcion==3){
        listar()
    }else if(opcion==4){
        reprobados()
    }else if(opcion==5){
        Definitiva()
    }else if(opcion==6){
        console.log("Buena Suerte Fue Un Gusto Ayudarte")
        break
    }  
    
    
    function Registrar() {
        let identificacion=texto.question("ingrese el ID: ")
        let nombreUser=texto.question("ingrese el nombre: ")
        let nota1=texto.question("ingrese la nota 1: ")
        let nota2=texto.question("ingrese la nota 2: ")
        let nota3=texto.question("ingrese la nota 3: ")
        estudiantes.push(
            {
                "Identificacion":identificacion,
                "nombre":nombreUser,
                "notas":{"nota1":nota1,"nota2":nota2,"nota3":nota3,}
            }
            
        )   
        return estudiantes
    }

    function eliminar(objeto,propiedad) {
        if (objeto && objeto.hasOwnProperty(propiedad)) {
            delete objeto[propiedad];
            console.log(`Se eliminó la propiedad "${propiedad}" del objeto.`);
          } else {
            console.log(`El objeto no tiene la propiedad "${propiedad}".`);
          }
    }
    function listar() {
        for (let i = 0; i < estudiantes.length; i++) {
   
            console.log (i,"  ",estudiantes[i])
            
    }
        
    }
    function reprobados() {
        for (let a = 0; a < estudiantes.length; a++) {
            let notas1=parseFloat(estudiantes[a].notas.nota1)
            let notas2=parseFloat(estudiantes[a].notas.nota2)
            let notas3=parseFloat(estudiantes[a].notas.nota3)
            let promedio=(notas1+notas2+notas3)/3
            if (promedio<=3) {
                console.log (a,"  ",estudiantes[a])
                console.log("la Definitiva es ", promedio.toFixed(2)) 
            }
        }
    }
    function Definitiva() {
        for (let i = 0; i < estudiantes.length; i++) {
            let notas1=parseFloat(estudiantes[i].notas.nota1)
            let notas2=parseFloat(estudiantes[i].notas.nota2)
            let notas3=parseFloat(estudiantes[i].notas.nota3)
            let promedio=(notas1+notas2+notas3)/3
            
            console.log(`"${estudiantes[i].nombre}" la Definitiva es "${promedio.toFixed(2)}"`) 
        }
    }
}

