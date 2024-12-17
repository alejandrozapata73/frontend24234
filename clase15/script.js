console.log("hola probando event listener")




localStorage.setItem("saludo","hola usuario")

localStorage.setItem("usuario","alejandro")

let nombreUsuario = localStorage.getItem("usuario")

console.log(nombreUsuario)

localStorage.removeItem("usuario")

console.log("luego de remover item")

nombreUsuario = localStorage.getItem("usuario")

console.log(nombreUsuario)

if(nombreUsuario==null){
    alert("El local Storage esta vacio")
}else{
    alert("tiene algo que lo llena")
}

localStorage.clear()




let botonB = document.getElementById("inputB")

botonB.addEventListener("click", function(){
    console.log("hola probando event listener")
})

botonB.addEventListener("keyup", function(event){
    console.log(event)
    var inputText = event.key ; 
    document.getElementById("textArea").innerHTML += inputText;
})

//analiza los cambios luego de salir del input
botonB.addEventListener("change", function(){
    console.log("estoy recibiendo cambios")
})

//es cuando pierde el foco
botonB.addEventListener("blur", function(){
    console.log("estoy recibiendo cambios de blur")
})

botonB.addEventListener("focus", function(){
    console.log("estoy recibiendo cambios de foco")
})


function suma(a){
    return a
}

let resultSuma = (a)=>  a

console.log(resultSuma(10))



/*

Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
Touch Events: touchstart, touchend, touchmove, touchcancel
Keyboard Events: keydown, keyup, keypress
Form Events: focus, blur, change, submit
Window Events: resize, scroll, load, unload, hashchange


*/


const paises = ["Argentina","Brasil"]

console.log("array antes de hacer un push: ")
console.log(paises)

paises.push("alemania")

console.log("array luego de hacer un push")

console.log(paises)



paises.unshift("Portugal")

console.log("array luego de ingresar en el centro con unshift:")

console.log(paises)

paises.shift()

console.log("array luego de eliminar el de inicio:")

console.log(paises)


const numeros = [1,2,4,5,6]

const numerosModificados = numeros.map(num => num + 1)

console.log(numeros)
console.log(numerosModificados)

const icrementoImpuesto = numeros.map(num => num + 10)

console.log(icrementoImpuesto)

console.log(numeros.map(num => num + 20))

//suma de elementos en un array
let sumaFor = 0

numeros.forEach(valorIndice => {

    sumaFor = sumaFor + valorIndice
})

console.log("valor total suma: ", sumaFor)


const contenedorPersonajes = document.getElementById("contenedorPersonajes")

console.log(contenedorPersonajes)

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{
    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos)=>{

        console.log(elementos.name)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
        <h4> ${elementos.name}</4>
        `;

        contenedorPersonajes.append(contenedorCreado)
    })
})

//contenedor Random

let contenedorRandom = document.getElementById("contenedorPersonajes2")

fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then(data=>{
    console.log(data)
    console.log(data.results[0])
    console.log(data.results[0].gender)
    console.log(data.results[0].name)
    console.log(data.results[0].name.first)
})


//contenedor Json

const contenedorJson = document.getElementById("contenedorJson")

console.log(contenedorJson)

fetch("empleados.json")
.then((response)=>response.json())
.then((datos)=>{
    console.log("+++++++++++json")
    console.log(datos)


    datos.forEach((elementos)=>{

        console.log(elementos.nombre)

        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML = `
        <h4> ${elementos.nombre}</4>
        `;

        contenedorJson.append(contenedorCreado)
    })
})
.catch(function (error){
    console.log("Error Asincronia", error)
})