/*Challenge21ConSwicht
Alternativa resuelta con swicht (hackeado)
- Si la vida está entre 0 y 20 que el personaje huya (escribir).
- Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo.
- Si la vida está entre 51 y 80 que el personaje se ponga en modo moderado.
- Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo.
    */
let vida = parseInt(prompt("Ingrese el valor de la vida del personaje (un número entre 0 y 100)"));
switch (true) {
    case vida >=0 && vida <= 20 :
        console.log("El personaje huye");        
        break;
    case vida >= 21 && vida <= 50 :
        console.log("El personaje se pone en modo defensivo");        
        break;
    case vida >= 51 && vida <= 80 :
        console.log("El personaje se pone en modo moderado");       
        break;
    case vida >= 81 && vida <= 100 :
        console.log("El personaje se pone en modo ofensivo");       
        break;
    default :
        console.log("Valor no válido. Debe ser un número entre 0 y 100");
        break;
    }
