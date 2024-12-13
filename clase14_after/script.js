


//objetos....

//DOM....

let heroe = {

    nombre: "batman",
    superPoder: "serMillo",
    color: "negro",
    volar: true,
   

}


console.log(heroe.nombre)




let heroes = [

    {

        id: 1,
        nombre: "batman",
        superPoder: "serMillo",
        color: "negro",
        volar: true,
        descripcion: "es un super heroe... solitario..."
       
    
    },
    {

        id: 2,
        nombre: "superman",
        superPoder: "serMillo",
        color: "negro",
        volar: true,
        descripcion: "es un super heroe... solitario..."
       
    
    },
    {

        id: 3,
        nombre: "aquaman",
        superPoder: "serMillo",
        color: "negro",
        volar: true,
        descripcion: "es un super heroe... solitario..."
       
    
    },
    {

        id: 4,
        nombre: "wonderwoman",
        superPoder: "serMillo",
        color: "negro",
        volar: true,
        descripcion: "es un super heroe... solitario..."
       
    
    }


]

console.log(heroes)

console.log(heroes[0])

console.log(heroes[0].nombre)


let nombreHeroeCaptura = document.getElementById("nombreHeroe")
let botonInfo = document.getElementById("mostrarInfo")
let descript = document.getElementById("descrip")

console.log(nombreHeroeCaptura)
console.log(botonInfo.textContent)




botonInfo.addEventListener("click", function(){
    console.log("hola un listener.....")

    nombreHeroeCaptura.textContent = heroes[0].nombre
    descript.textContent = heroes[0].descripcion

})


let tdNombres = document.getElementById("mostrarNombresArrayObjetos")


tdNombres.innerHTML = "<h3>hola probando</h3>" 

tdNombres.innerHTML = "hola probando"


//crear un elemento que no esta en la estructura original

const div = document.createElement("div")

div.innerHTML = "<li>hola</li>"




 console.log("imprimiendo atributos array de objetos")

 for(var i=0;i<heroes.length;i++){

    const div = document.createElement('li')

    div.innerHTML = heroes[i].nombre

    tdNombres.appendChild(div)
    

   
}




