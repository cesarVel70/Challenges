/*
Challenge20
-Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y escriba el mayor, el menor y la media aritmética.
-Se recuerda que la media aritmética de un conjunto de valores es la suma de esos valores dividida por la cantidad de valores.
*/

 
/*
let cantidad = parseInt(prompt("Ingrese la cantidad de número a ingresar:"));
let listaNumeros = [];
let suma = 0;

for (i=0; i< cantidad; i++) {
    let numero = parseInt(prompt("ingresar número"));
    listaNumeros.push(numero)
    suma += numero;
}

//el meotodo apply es para buscar dentro del array

let mayor = Math.max.apply(null,listaNumeros);

let menor = Math.min.apply(null,listaNumeros);

let media = suma / cantidad;

console.log(`el mayor número es ${mayor}, el menor es ${menor} y la media es ${media}` )
*/
//Alternativa 
let cantidad = parseInt(prompt("Cuantos numeros va a introducir ?"));
let listaNumeros = [];
let suma = 0;
//proceso
for(let i = 0 ; i < cantidad ; i++){
    listaNumeros [i] = parseInt(prompt("Ingrese un numero: "));
    suma = (suma + listaNumeros[i]);
}
let maximo = Math.max(...listaNumeros);
let minimo = Math.min(...listaNumeros);
let media = suma / cantidad;
//salida

console.log(`El número mayor es ${maximo}`);
console.log(`El número menor es ${minimo}`);
console.log(`La media aritmetica es de = ${media}`);