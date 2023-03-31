/*
1- Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

let numero1 = parseInt(prompt("Ingrese un número:"));
let numero2 = parseInt(prompt("Ingrese otro número:"));
document.write(`La resta de ${numero1} menos ${numero2} es ${numero1 - numero2}`);
/*
2- El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no).

let nombre = prompt("Ingresar nombre:");
let apellido = prompt("Ingresar apellido:");
let aBandera = 0;
let mBandera = 0;
for (let index = 0; index < nombre.length; index++) {
    if ((nombre.charAt(index)).toLowerCase() === "a") {
        aBandera = 1;
    }
    if ((nombre.charAt(index)).toLowerCase() === "m") {
        mBandera = 1;
    }
}
if (aBandera === 1 && mBandera === 1) {
    console.log(`${nombre} si contiente la letra 'a' y la letra 'm'.`);
} else {
    console.log(`${nombre} no contiente la letra 'a' y la letra 'm'.`);
}

for (let index = 0; index < apellido.length; index++) {
    if ((apellido.charAt(index)).toLowerCase() === "a") {
        aBandera = 1;
    }
    if ((apellido.charAt(index)).toLowerCase() === "m") {
        mBandera = 1;
    }
}
if (aBandera === 1 && mBandera === 1) {
    console.log(`${apellido} si contiente la letra 'a' y la letra 'm'.`);
} else {
    console.log(`${apellido} no contiente la letra 'a' y la letra 'm'.`);
}
/*
3- Crear una variable y asignarle el siguiente valor : (' Pablito-clavo-un-clavito')
Investigar a través de que método podemos quitar los guiones y reemplazar por espacios.
*/
let frase = ' Pablito-clavo-un-clavito';
let nuevaFrase = frase.replace("-"," ");
console.log(nuevaFrase);

