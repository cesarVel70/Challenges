/*
1- A través de document.write concatena un saludo almacenado en 2 variables.
2- Pedirle el nombre al usuario y devolver un msj con saludo en el HTML.
3- Introducir un número y devolver el doble del mismo número.
4- Recibir el apellido del usuario, mostrar por consola la última letra.
*/
let saludo1 = "Hola";
let saludo2 = "mucho gusto.";
document.write(`${saludo1} ${saludo2}`);
document.write("<hr>");
let nombreUsuario = prompt("Ingresa tu nombre:");
document.write(`${saludo1} ${nombreUsuario} ${saludo2}`);
document.write("<hr>");
let numero = parseInt(prompt("Ingresa un número:"));
document.write(`El doble de ${numero} es ${numero*2}`);
document.write("<hr>");
let apellidoUsuario = prompt("Ingresa tu apellido:");
let ultimaLetra = apellidoUsuario.charAt(apellidoUsuario.length-1);
console.log(`La última letra de tu apellido es ${ultimaLetra}`);
