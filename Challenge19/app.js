/*
Challenge19
Realice un programa que dada la vida de un personaje, indique una acción: 
∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
∙ la poción de vida chica cura 25 y la grande 50.
*/
const VidaChica = 25;
const VidaGrande = 50;
let vida = parseInt(prompt("Ingrese la vida del personaje: "));
if (vida < 50) {
    let vidaActual = vida + VidaGrande;
    console.log(`La vida actual es ${vidaActual}`);
} else {
    if (vida < 75 ) {
        let vidaActual = vida + VidaChica;
        console.log(`La vida actual es ${vidaActual}`);
    } else {
        console.log("El personaje no ha sido curado");
    }
}



