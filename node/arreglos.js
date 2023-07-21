/* let leguajes=["python","Javascript","java","php","c#","Ruby","Go"]; */
/* for (let i = 0; i < leguajes.length; i++) {
    console.log (i+"=>"+leguajes[i]);
} */

/* let meses =["Enero","Febrero","Marzo","Abril","Mayo","Juino","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for(let e=0;e<meses.length;e++){
    console.log (e+" "+meses[e+1])
} */

/* let anio=[2000,2001,2002,2004,2005,2006,2007,2008,2009,2010]

for (let index = 0; index < anio.length; index++) {
    let anioStr = anio[index].toString();
    let tipo=anioStr.typeof
    console.log (tipo)
    
} */


/* let programacion=[]; */

/* programacion.push("python","Javascript","java","php","c#","Ruby","Go")
programacion.pop(7)
console.log(programacion) */


let texto = require("readline-sync");
let persona = texto.question("Ingrese una persona: ");

let tipo = texto.question("Qué desea eliminar? (1: Identificacion, 2: nombre, 3: notas , 4: todo): ");

function eliminar(objeto, propiedad) {
  if (objeto && objeto.hasOwnProperty(propiedad)) {
    delete objeto[propiedad];
    console.log(`Se eliminó la propiedad "${propiedad}" del objeto.`);
  } else {
    console.log(`El objeto no tiene la propiedad "${propiedad}".`);
  }
}

let estudiantes = [
  {
    "Identificacion": 123,
    "nombre": "Luis",
    "notas": { "nota1": 3.0, "nota2": 4.0, "nota3": 4.5 }
  },
  {
    "Identificacion": 124,
    "nombre": "Mauricio",
    "notas": { "nota1": 3.0, "nota2": 4.0, "nota3": 4.5 }
  }
];

if (tipo == 1) {
  eliminar(estudiantes[persona], "Identificacion");
} else if (tipo == 2) {
  eliminar(estudiantes[persona], "nombre");
} else if (tipo == 3) {
  eliminar(estudiantes[persona], "notas");
}else if(tipo==4){
    estudiantes.splice(persona,estudiantes.length)
}

console.log(estudiantes);
