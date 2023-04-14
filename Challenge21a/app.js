/*
Challenge21a
a) Resolverlo sin conectores lógicos contemplar que tanto valores a cero y mayores a 100 no pueden ser válidos).
Realizar un programa que dada la vida de un personaje, realice una acción.
- Si la vida está entre 0 y 20 que el personaje huya (escribir).
- Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo.
- Si la vida está entre 51 y 80 que el personaje se ponga en modo moderado.
- Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo.
*/
let vida = parseInt(prompt("Ingrese el valor de la vida del personaje (entre 0 y 100)"));
if (vida > 0) {
    if (vida <= 20) {
        console.log("El personaje huye");
    } else {
        if (vida <= 50) {
            console.log("El personaje se pone en modo defensivo");            
        } else {
            if (vida <= 80) {
                console.log("El personaje se pone en modo moderado");                 
            } else {
                if (vida <= 100) {
                    console.log("El personaje se pone en modo ofensivo");  
                } else {
                    console.log("Valor no válido. Debe se menor que 100");                   
                }
            }
        }
        
    }
} else {
    console.log("Valor no válido. Debe ser mayor que 0");
}