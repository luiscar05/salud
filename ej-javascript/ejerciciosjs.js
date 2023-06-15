//ejercicio1 ejecutar el documento apenas se cargue la pestaña
alert("Bienvenidos al mundo de javascript")

//Ejercicio-2   crear dos variables de tipo string (Nombre y Apellido) y mostrar en consola
let Nombre="Luis"
let Apellido="Peña"
console.log ("Este es el ejercicio 2")
console.log(Nombre+" "+Apellido)


//Ejercicio-3. activando el modo strict
"use strict"
let NombreAprendiz="Luis Carlos"

alert(NombreAprendiz)
/* en este ejercicio con el modo strict evita utilizar variables sin ser creadas anteriormente */


//ejercicio4 

let num1Int=5
let num2Int=3
let Num3Srt="4"
let Num4Srt="8"
console.log("Este es el ejercicio 4")
console.log()
console.log("Suma de Enteros "+num1Int+num2Int)
console.log("Suma de string"+ Num3Srt+Num4Srt)
console.log("Suma de entro y strig"+ num1Int+Num4Srt)

//Ejercicio 5

/* De string a entero */
console.log("De string a entero")
let Num3Int= parseInt(Num3Srt)
let resultado = num1Int+Num3Int
console.log (resultado)
/* De entero a string */
console.log("De entero a  string")
 let num2Srt = num2Int.toString()
 console.log(Num3Srt+ num2Srt)
 /* de entero y estring a decimal */
 let Num1Float=parseFloat(num1Int);
 let Num2Float=parseFloat(Num4Srt);
 let Num3Float = 5.3;
 console.log("la suma de " + Num1Float + "+" + Num2Float + "+" + Num3Float);
 console.log("El resultado es: " + (Num1Float + Num2Float + Num3Float));

 /* De decimal a string */

 let Num6Int= Math.ceil(Num3Float)
 console.log ("Conversion de decimal " + Num3Float+" A entero con ajuste hacia el techo " + Num6Int)
