


// // let capturaTitulo = document.getElementById("titulo")

// // console.log(capturaTitulo)

// // console.log(capturaTitulo.textContent)


// // alert(capturaTitulo.textContent)


// // var hola ="hola"

// // var nombres = ['juan','miguel']
// // var apellido = ['perez',"rodriguez"]

// // //atributos... 
// // /*

// // nombre:
// // apellido:
// // edad:
// // dni:
// // direccion:
// // precio:
// // estado:

// // */

// // //objetos literales--Json
// // let estudiantes =  {

// //     nombre:"juan",
// //     apellido:"perez",
// //     edad: 19,
// //     estado: true,

// //     hablar : function(){
// //         console.log("hola puedo hablar")
// //     },

// //     cantar: function(cancion){
// //         console.log("puedo cantar: " + cancion)
// //     }
// // }

// // console.log(hola)
// // console.log(nombres[0])
// // console.log(estudiantes.nombre)
// // console.log(estudiantes.edad)

// // estudiantes.hablar()
// // estudiantes.cantar("hola a todos vamos a cantar")


// // console.log("probando")


// let listados = document.getElementsByClassName("clases")

// console.log(listados)

// console.log(listados[0].textContent)
// console.log(listados[5].textContent)

// for(var i=0; i<listados.length;i++){
//     console.log(listados[i].textContent)

    
//     listados[i].textContent = "hola"
//     listados[i].style.backgroundColor = "red"


// }


// let titulo = document.getElementById("titulo")


// let navOscuro = document.getElementById("navOscuro")
// console.log(navOscuro)
// let divOscuro = document.getElementById("divOScuro")


// function modoOscuro() {

//     console.log(navOscuro)
//     navOscuro.classList.add("oscuro")
    
   
// }


//listener----"escuchadores"

// function algo(){
//     soy una funcion 
// }

//que tipo de funcion ...



let titulo = document.getElementById("titulo")

console.log(titulo)

titulo.addEventListener("click", function(){

    console.log("estoy escuchando algoooooo")

} )


titulo.addEventListener("dblclick", function(){
    alert("hola otro listener")
})


/*

titulo.addEvenlisterner("evento",funcion)

*/




//sumar data productos

let inputA = document.getElementById("inputA")

// inputA = Number(inputA)

let inputB = document.getElementById("inputB")


let botonSumar = document.getElementById("sumar")

let cartel = document.getElementById("pruebaListener")


console.log(cartel)

console.log(botonSumar)

botonSumar.addEventListener("click", function(){

    alert("esto funciona")
    console.log(inputA.value)

    var numeroA = Number(inputA.value)
    var numeroB = Number(inputB.value)

    var suma = numeroA + numeroB

    alert("suma total: " + suma)

    console.log(cartel.textContent)

    cartel.textContent = suma


})


var numero = 0

inputA.addEventListener("change", function(){


    numero++

    cartel.textContent = numero

    console.log(numero)

    if(numero>5){
        cartel.classList.add("oscuro")
    }
})


let nombre = "maria"
let nombres = ["maria","juan"]


//objetos literales

let nombreObjeto = {

    //key-----valor
    nombre : "Alex",
    apellido: "ubago",
    edad: 29,
    profesion: "cantante",
    cantar: function(){
        console.log("puedo cantar lalalal")
    }
}

console.log(nombreObjeto.nombre)

//localStorage...

localStorage.clear()

//......................key............valor


let capturaInputLS = document.getElementById("usuarioLS")

let nombreUsuario = "Alejandro Local Storage"

// let correo = "alejandroZapata73@out"

localStorage.setItem("usuarioTalento",nombreUsuario)
// localStorage.setItem("usuarioCorreo",correo)

// localStorage.setItem("usuarioTalento","papa")

console.log(localStorage.getItem("usuarioTalento"))


let nombreLS = localStorage.getItem("usuarioTalento")

capturaInputLS.textContent = nombreLS


const producto = {
    nombre: "oreo",
    precio: 1500
}

localStorage.setItem("productoA",producto.nombre)
localStorage.setItem("precioProductoA",producto.precio)



localStorage.clear()

// Swal.fire({
//     title: "هل تريد الاستمرار؟",
//     icon: "question",
//     iconHtml: "؟",
//     confirmButtonText: "نعم",
//     cancelButtonText: "لا",
//     showCancelButton: true,
//     showCloseButton: true
//   });


