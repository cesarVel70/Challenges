/*
Challenge21b
b) Resolverlo con conectores lógicos (contemplar que tanto valores a cero y mayores a 100 no pueden ser válidos).
- Si la vida está entre 0 y 20 que el personaje huya (escribir).
- Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo.
- Si la vida está entre 51 y 80 que el personaje se ponga en modo moderado.
- Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo.
*/
let vida = parseInt(prompt("Ingrese el valor de la vida del personaje (un número entre 0 y 100)"));
if (vida > 0 || vida < 100) {
    if (vida <= 20) {
        console.log("El personaje huye");     
    } else {
        if (vida <= 50) {
            console.log("El personaje se pone en modo defensivo");        
        } else {
            if (vida <= 80) {
                console.log("El personaje se pone en modo moderado"); 
            } else {
                console.log("El personaje se pone en modo ofensivo");
            }
        }
    }
} else {
    console.log("Valor no válido. Debe ser un número entre 0 y 100");    
}