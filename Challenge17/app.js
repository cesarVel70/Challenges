/*
Challenge17
El usuario ingresa 3 notas.
Por consola o alerta le mostramos el promedio y el mensaje si esta aprobado o desaprobado.
*/
let numero1 = parseInt(prompt("Ingrese la primera nota:"));
let numero2 = parseInt(prompt("Ingrese la segunda nota:"));
let numero3 = parseInt(prompt("Ingrese la tercera nota:"));
let promedio = Math.round((numero1 + numero2 + numero3)/3);
console.log("El promedio de las tres notas es " + promedio);
if (promedio >= 6) {
    console.log("Esta aprobado");
} else {
    console.log("Esta desaprobado");
}
