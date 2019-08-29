'use strits'

//CONDICIONAL IF
//SI A es IGUAL a B haz algo

/*var edad1=30;
var edad2=12;

if (edad1>edad2) {
	//Ejecuta esto
	console.log("Edad 1 es mayor a edad 2")
}else{
	console.log("La edad 2 es menor")
}
*/
var edad =18;
var nombre='Tomas Romeu';

if (edad>=18) {
	console.log(nombre+" tiene "+edad+ " años, es mayor de edad");

	if (edad<=33) {
		console.log("Todavia eres millenial");
	}else if (edad>=70) {
		console.log("eres anciano");
	}else{
		console.log("Ya no eres millenial")
	}
}else{
	console.log(nombre+" es menor de edad");
}
/*
//Operaciones
AND:&&
OR:||
NEGACION:!
*/
