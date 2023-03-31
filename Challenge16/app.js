/*
Ejercicio descuento según marca y modelo del auto:
Le pedimos al usuario que ingrese marca y modelo del auto, en caso que el auto sea Ford fiesta el descuento que se aplica será del 5%, si es un Ford Focus el descuento será del 10%. Mostramos por consola el descuento que obtendrá.
*/
let marca = "";
let modelo = "";
marca = prompt("Ingrese la marca del auto:");
if (marca.toUpperCase() === "FORD") {
  modelo = prompt("Ingrese el modelo:");
  if (modelo.toUpperCase() === "FIESTA") {
    console.log("Ford Fiesta tiene un descuento del 5%.");
  } else {
    if (modelo.toUpperCase() === "FOCUS") {
      console.log("Ford Focus tiene un descuento del 10%.");
    } else {
      console.log("El modelo ingresado no tiene descuento.");
    }
  }
} else {
  console.log("La marca ingresada no tiene descuento.");
}
