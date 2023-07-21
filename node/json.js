/* let persona={
    "identificacion":"1083869916",
    "nombre":"Luis Carlos Peña",
    "telefono":"3133979124"
}  */
let json=[
    {"identificacion":"1083869916",
    "nombre":"Luis Carlos Peña",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"83028730",
    "nombre":" Carlos Peña",
    "telefono":"3125338180",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"52852368",
    "nombre":"francia abella",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"12345",
    "nombre":"Mauricio peña",
    "telefono":"3133979124",
    "notas":{"nota1":5.0,"nota2":2.5,"nota43":1.6}
    },
    {"identificacion":"6789",
    "nombre":"tatiana vargas",
    "telefono":"3133979124",
    "notas":{"nota1":4.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"108386917",
    "nombre":"pepito peres",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":2.5,"nota43":2.6}
    },
    {"identificacion":"108386918",
    "nombre":"Enrrique Abella",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"108386919",
    "nombre":"wilson Vargas",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"108386920",
    "nombre":"Nayibis Diaz",
    "telefono":"3133979124",
    "notas":{"nota1":3.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"108386921",
    "nombre":"Samuel Villagomez",
    "telefono":"3133979124",
    "notas":{"nota1":5.0,"nota2":4.5,"nota43":4.6}
    },
    {"identificacion":"108386921",
    "nombre":"Ana Martinez",
    "telefono":"3133979124",
    "notas":{"nota1":5.0,"nota2":5.0,"nota43":5.0}
    },
]
for (let i = 0; i < json.length; i++) {
   
        console.log (i,"  ",json[i].nombre)
        let notas1=parseFloat(json[i].notas.nota1)
        let notas2=parseFloat(json[i].notas.nota2)
        let notas3=parseFloat(json[i].notas.nota43)
        let promedio=(notas1+notas2+notas3)/3
        
        console.log("la Definitiva es ", promedio.toFixed(2))
        if (promedio>=3) {
            
            console.log("Felicidades Aprobo","\n")
        }/* else{
            console.log("Lo siento reprobo","\n")
        } */
}
