// console.log("hola probando")


// let usuario = Number(prompt("ingrese un valor"))



// if(usuario=="pepe"){
//     document.write("funciona")
// }else{
//     document.write("no es usuario")
// }


// if(pass=="123456") {
//     document.write("es correcto")
// }else{
//     document.write("es el pass incorrecto")
// }


//operadores logicos
/* And --- y

true and true   = true
true and false  = false
false and true  = false
false and false = false

1 && 1 = 1
0 && 1 = 0
1 && 0 = 0
0 && 0 = 0


*/

console.log(4<3)//false
console.log(10<10)//false
//...........false  false = 
console.log((4<3)&&(10<9))
//         true       true = true
console.log((5>3) && (6>4))

//         false     true = false
 console.log((4>6)&&(5>3))


 const usuarioBD = "ale"
 const passBD = "123456"


 console.log(usuarioBD == usuario)//false

 let usuario = prompt("ingrese su usuario")
 let pass = prompt("ingrese su pass")

//............ale      == ale ... true
 console.log(usuarioBD == usuario)//false true
 

//.......1

/*

usuarioBD  && usuario =
"ale"      &&   "ale"  = true

*/



 if((usuario == usuarioBD) && (pass==passBD)){
    alert("ingresaste al sistema!!!!")
 }else{
    alert("no tiene el ingresooooo")
 }

 //prueba de escritorio....

let checkRobot = true


 if((correo == netflixBDusuario) && (pass == netflixBDpass)){
    console.log("puede ver algo")
 }

 //operadores logicos
/* OR --- 

true or true   = true
true or false  = true
false or true  = true
false or false = false

1 && 1 = 1
0 && 1 = 0
1 && 0 = 0
0 && 0 = 0


*/

//...........................1........................and.........1
//...()...1................or...........1...........) and (........1....)
if( ((correo == correoBD) or (telefono == telefonBD)) && (pass == passBD)){


}


console.log((1>2)) false
console.log(1>3) false
console.log(4>3)//trure