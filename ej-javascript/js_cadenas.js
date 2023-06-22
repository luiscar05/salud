console.log ("hola mundo")
let ciudad="pitalito"
/* Todo a mayusculas */
let ciudadUpper=ciudad.toUpperCase();
console.log(ciudadUpper)
/* Todo a minusculas */
let ciudadLow=ciudad.toLowerCase();
console.log(ciudadLow);
/* Primer letra a mayuscula */
let ciudadOracion=ciudad[0].toUpperCase()+ciudad.slice(1).toLowerCase();
console.log (ciudadOracion)
/*  Extraer partes de una cadena */
let anyo=2023;
let anyoStr=anyo.toString()
let anyoCard=anyoStr.slice(2,4)
console.log(anyoCard)


let nombre="luis Carlos Peña Abella"
let cantNombre=nombre.length
console.log ("longitud nombre "+cantNombre)
