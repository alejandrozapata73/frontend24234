// //funciones flecha....

// function saludo(mensaje){
//     return mensaje
// }




// let retornoFuncion = saludo("hola estoy probando")

// console.log(retornoFuncion)


// const saludoReducido = function (mensaje) {
//     return mensaje
// }

// const saludoReducido1 = (mensaje) => {
//     return mensaje }

// const saludoReducido2 = (mensaje,valor) => mensaje 
       

// saludoReducido("algun parametro X")



let alumnosTT = [
    {

        id: 1,
        nombre: "Rodrigo",
        apellido: "farias",
        curso: true
    },
    {

        id: 2,
        nombre: "Francisco",
        apellido: "farias",
        curso: true
    },
    {

        id: 3,
        nombre: "Roxana",
        apellido: "farias",
        curso: false
    },
]

//.............0...
let numeros = [10,20,30,40,50,60,80,90]

console.log("recorriendo el array con un for")
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

for(let i=0;i<alumnosTT.length;i++){
    console.log(alumnosTT[i])
}

//foreach

console.log("implementando foreach para recorrer un array!!!")
numeros.forEach(elemento =>console.log(elemento))

//recoriendo array con foreach
console.log("*****recorriendo array objetos con foreach***")
alumnosTT.forEach(elemento=>console.log(elemento.nombre))


//asincronismo....
/*



*/

let contenedorPersonajes = document.getElementById("contenedorPersonajes")
console.log(contenedorPersonajes)

//funcion fech me permite contectar con una API-end Point
fetch("https://rickandmortyapi.com/api/character")
//tranformo la info en formato json
.then((respuesta)=>respuesta.json())
//en datos tengo ya la estructura para mostrar en formato objeto
.then((datos)=>{
    console.log(datos)
    console.log(datos.results)
    console.log(datos.results[0])
    console.log(datos.results[0].name)

    datos.results.forEach((elemento)=>{
        // console.log(elemento)
        console.log(elemento.name)
        console.log(elemento.status)

        const contenedorCreado = document.createElement("div")

        contenedorCreado.innerHTML = `

            <h4>${elemento.name}</h4>
            <img src="${elemento.image}">

            `
            ;

        contenedorPersonajes.append(contenedorCreado)


    })

})

//traer info de archivo Json

let contenedorJson = document.getElementById("contenedorJson")
console.log(contenedorPersonajes)

//funcion fech me permite contectar con una API-end Point
fetch("empleados.json")
//tranformo la info en formato json
.then((respuesta)=>respuesta.json())
//en datos tengo ya la estructura para mostrar en formato objeto
.then((datos)=>{
    console.log(datos)
    console.log(datos[0])
    console.log(datos[0].nombre)
    // console.log(datos.results)
    // console.log(datos.results[0])
    // console.log(datos.results[0].name)

    datos.forEach((elemento)=>{
        // console.log(elemento)
        console.log(elemento.nombre)

        //crear Elemento
        const contenedorCreado = document.createElement("div")

        contenedorCreado.innerHTML =
         `

            <h4>${elemento.nombre}</h4>
            

            `
            ;

            contenedorJson.append(contenedorCreado)


    })

})



/*

1-mostrar datos de un array en html...
2-mostrar datos de una api
3-mostrar datos de un archivo json


*/




let usuarioPlataforma= "Martin G"
let apellidoPlataforma = "fernandez"

console.log("hola el usuario es: " + usuarioPlataforma + "y su apellido es: " + apellidoPlataforma + " ")

console.log("hola el usuario es: " , usuarioPlataforma)

console.log(`hola el usuario es: ${usuarioPlataforma} y su apellido es ${apellidoPlataforma}`)

let botonAparecerDatos = document.getElementById("botonMagico")

console.log(botonAparecerDatos)

//repasando listener......("evento","function Anonima / funcion tradicional")

function mostrarAlert(){
    alert("hola mostrando el Alert de prueba...CallBack")
}

botonAparecerDatos.addEventListener("click", insertarDatos)


// botonExtra.addEventListener("click", mostrarAlert)


/*


addEventListener("click", "hola")
addEventListener("click", "hola",12)
addEventListener("click", "hola",true)

addEventListener("click", mostrarAlert)

*/



//conexion con Random



let contenedorRan = document.getElementById("contenedorPersonajes2")
console.log(contenedorRan)



function insertarDatos() {
//funcion fech me permite contectar con una API-end Point
fetch("https://randomuser.me/api/")
//tranformo la info en formato json
.then((respuesta)=>respuesta.json())
//en datos tengo ya la estructura para mostrar en formato objeto
.then((datos)=>{
    console.log("******Mostrando Random****")
    console.log(datos)
    console.log(datos.results)
    console.log(datos.results[0].name)
    console.log(datos.results[0].name.first)
    // console.log(datos.results)
    // console.log(datos.results[0])
    // console.log(datos.results[0].name)

   
       

        //crear Elemento
        const contenedorCreado = document.createElement("div")

        contenedorCreado.innerHTML =
         `

            <h4>${datos.results[0].name.first}</h4>
            <img src="${datos.results[0].picture.large
            }">

            

            `
            ;

            contenedorRan.appendChild(contenedorCreado)


    })

}


