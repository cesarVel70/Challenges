/*
Challenge22
inteligencia artificial en un hospital
Un hospital quiere que le hagamos una aplicación inteligente donde el paciente ponga sus datos, su dolencia y se determine que tipo de estudio debe realizarse.
Dolencia: Dolor abdominal
A tener en cuenta: A las mujeres embarazadas no se les puede hacer una tomografía o una placa porque puede tener efectos teratogénicos.
*/
let sexo = prompt("Ingresar sexo del paciente:");
let dolencia = prompt("Ingresar la dolencia del paciente:");
if (sexo.toLocaleLowerCase() === "femenino" && dolencia.toLocaleLowerCase() === "dolor abdominal") {
    console.log("La paciente no puede resalizarse tomografía o placa")
} else {
    console.log("El paciente puede resalizarse cualquier estudio")    
}