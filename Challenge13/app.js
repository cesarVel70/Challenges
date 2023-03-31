/*
1- A través de document.write concatena un saludo almacenado en 2 variables.
2- Ejercicio a continuacion del que realizamos en clases. (Les adjunto los dos para que puedan realizarlo y lo revisamos en clases).
3- Crear 3 variables y asignarles un valor numérico a las primeras dos, y mostrar por consola la suma, la resta, el producto, la división y observar si son par o no (de los primeros números). A la tercera variable asignarle un valor y sumarla a la suma anterior, multiplicarla por el producto anterior y restarsela a la resta anterior. 
*/
let saludo1 = "Hola ";
let saludo2 = "mundo";
document.write(saludo1 + saludo2);

let variable1 = 6;
let variable2 = 3;
console.log(variable1 + variable2);
console.log(variable1 - variable2);
console.log(variable1 * variable2);
console.log(variable1 / variable2);
console.log(variable1 %2);
console.log(variable2 %2);
let variable3 = 2;
console.log((variable1 + variable2) + variable3);
console.log((variable1 * variable2) * variable3);
console.log((variable1 - variable2) - variable3);
