

// // function alejoCartelito(){

// //     alert("hola probando")
// //     console.log("estoy sumando + +++")
// // }

// // function spamPublicidad(){
// //     var nombre = prompt("ingrese su numero de targ credit")

// //     console.log("tu nombre es: " + nombre)

// //     alert("estas escribiendo tu nombre " + nombre)

// //     alert("te gasnaste un premio pres here!!!")

    
// // }

// // var contadorA = 1000000

// // function contador(){

    
// //     contadorA++
// //     console.log(contadorA)

// // }


// //
// let capturaH1 = document.getElementById("titulo")

// let capturaH2 = document.getElementById("elemento2")

// console.log(capturaH2)
// console.log(capturaH2.textContent)





//    ingresoEdad = parseInt(prompt("ingrese una edad"))



// if(ingresoEdad>=18){

//  capturaH2.textContent = "probando de a uno!!!"

// }

// // function retornarObjeto() {

// //     console.log(capturaH1.textContent)
// // }

// // function cambiarValor(){

// //     document.getElementById("titulo").textContent = "Voila!!!!"

// // }

// // //id = 1 elemento

// // function eliminarElemento(){

// //     document.getElementById("titulo").textContent = "Voila!!!!"

// // }


// // //pidiendo que retorne algo....
// // console.log(document.getElementById("titulo"))
// // //
// // console.log(document.getElementById("titulo").textContent)

let capturaInputA = document.getElementById("inputA")
let capturaInputB = document.getElementById("inputB")
let capturaCartel3 = document.getElementById("pruebaListener")




function mostrarValor(){

    console.log(capturaInputA.value)
    console.log(capturaInputB.value)
    var suma = capturaInputA.value + capturaInputB.value
    console.log(suma)
   
    capturaCartel3.textContent = suma

}



console.log(capturaInputA)

console.log(capturaInputA.textContent)


