// alert("clase repaso heavy...")



// let numero1 = 75//

// // ...........true.................&&    true.......= true/
// if((numero1 >= 0 || numero1 <= 50) && numero1 > 50){
//     console.log("probando condicional Trueee")
// } else {
//     console.log("probando otro codigo False")
// }



// let saldo = 200000

// let tarjetaCreditoGold = false
// let tarjetaCreditoSilver = false

// //    true      &&                          false............................= false
// //....true......&& (      False                 ||.........false..........)
// if(saldo>100000 && (tarjetaCreditoGold == true || tarjetaCreditoSilver == true)   ){

// //     alert("puede hacer la compra")

// // }else{
// //     alert("no puede hacer una compra ...")
// // }


// //not... !

// let verdad = true
// const funcionSCript = true


// console.log(!funcionSCript)

// if(!true){
//     console.log("usar not")
// }


// let nota1 = 6
// let nota2 = 6
// let nota3 = 6

// let presentismoVirtual = 75

// let cantidadNotas = 3

// const NOTAAPROBADO = 6
// const APROBADOVIRTUAL = 75

// let promedio = (nota1 + nota2 + nota3) / cantidadNotas

// if(promedio>=NOTAAPROBADO && presentismoVirtual>=APROBADOVIRTUAL){
//     alert("aprobado.. ")
//     alert("El promedio de notas es: " + promedio)
// }else {
//     alert("no aprobo")
//     alert("El promedio de notas es: " + promedio)
// }


let cantidadNotas = 0

let cantidadNotasIngre = parseInt(prompt("ingrese cantidad de notas a calificar"))


console.log(typeof cantidadNotas) 

while(cantidadNotas<cantidadNotasIngre){
    console.log("ciclo..."+ cantidadNotas)
    prompt("ingrese una nota")
    cantidadNotas++
}

