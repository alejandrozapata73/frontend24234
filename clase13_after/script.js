


// let capturaTitulo = document.getElementById("titulo")

// console.log(capturaTitulo)

// console.log(capturaTitulo.textContent)


// alert(capturaTitulo.textContent)


// var hola ="hola"

// var nombres = ['juan','miguel']
// var apellido = ['perez',"rodriguez"]

// //atributos... 
// /*

// nombre:
// apellido:
// edad:
// dni:
// direccion:
// precio:
// estado:

// */

// //objetos literales--Json
// let estudiantes =  {

//     nombre:"juan",
//     apellido:"perez",
//     edad: 19,
//     estado: true,

//     hablar : function(){
//         console.log("hola puedo hablar")
//     },

//     cantar: function(cancion){
//         console.log("puedo cantar: " + cancion)
//     }
// }

// console.log(hola)
// console.log(nombres[0])
// console.log(estudiantes.nombre)
// console.log(estudiantes.edad)

// estudiantes.hablar()
// estudiantes.cantar("hola a todos vamos a cantar")


// console.log("probando")


let listados = document.getElementsByClassName("clases")

console.log(listados)

console.log(listados[0].textContent)
console.log(listados[5].textContent)

for(var i=0; i<listados.length;i++){
    console.log(listados[i].textContent)

    
    listados[i].textContent = "hola"
    listados[i].style.backgroundColor = "red"


}


let titulo = document.getElementById("titulo")


let navOscuro = document.getElementById("navOscuro")
console.log(navOscuro)
let divOscuro = document.getElementById("divOScuro")


function modoOscuro() {

    console.log(navOscuro)
    navOscuro.classList.add("oscuro")
    
   
}







