/*
Challenge23
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Docuemnto nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente:
El número debe ser entre 0 y 99999999
Según el resultado, de 0 a 22, le correponderá una letra de las siguientes: (T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E)
Si lo introducido no es un número deberá indicarse con alert y volver a preguntar.
Deberá de repetirse hasta que el usuario pulse "cancelar".
*/
let resto=0
let caracteres=["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
do{
    let dni = parseFloat(prompt("Ingrese un DNI"));
    if (isNaN(dni) || dni<0 || dni>99999999) { 
        console.warn(`DNI INVALIDO`);
    } else{
        resto=dni%23
        console.log(`Usted a ingresado el DNI: ${dni} y por lo tanto le corresponde la letra ${caracteres[resto]}`)
    }
}while(confirm("Desea seguir ingresando numéros?"))
