
// //funcion con parametros

// let nombres = prompt("ingrese un nombre")
// let edad = parseInt(prompt("ingrese su edad"))

// function vecinosInvasores(nombres, edad, aprobado=true){

  
//     if(aprobado){

//         alert("el nombre del usuario es: " + nombres + " y su edad es:" + edad)
//         console.log("promedio suma 48")

//     }else {
//         alert("Error de sistema")
//     }
   

//     return 10

// }


// vecinosInvasores(nombres,edad,false)


// console.log(4+5)

// let suma = 4+5

// if(suma>8){

// }



function suma(numeroA,numeroB){

    return numeroA + numeroB

}

suma(5,10)

let valorSuma1 = suma(4,5)
let valorSuma2 = suma(10,10)

console.log(valorSuma1)

function validarEdad(edad){


    if(edad>=18){

        return true
    } else {

        return false
    }

    
}

let valorValidar = validarEdad(19)

//funcion que recibe por parametro un dato literal, un segundo dato literal, 
function aprobados(nombre,apellido,valorSuma1,edad){

    if(edad){

        console.log(nombre)
        console.log(apellido)
        console.log(edad)
    }
    

}

aprobados("carlos","zapata",25,valorValidar)
aprobados("miguel","negle",25,validarEdad(15))

// console.log(suma(4,4))












