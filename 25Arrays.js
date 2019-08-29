
//arreglos, matrices

var nombre= "Tomas Romeu";

var nombres= ["Tomas","Walter","Carolina","Paula"];

var lenguajes= new Array( "PHP", "JS", "Go", "Java", "C++", "C#", "Python");

console.log(nombres);
console.log("*******************");
console.log(lenguajes);

//Mostrar todos los elementos del array

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
/*
for (var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li");
}
*/
document.write("</ul>");

//RECORRER ARRAYS CON FOREACH
/*
lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});
*/
/*
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Busquedas

var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje =="PHP";
})
console.log(busqueda);

    //Otra Forma
    var busqueda2= lenguajes.find(lenguaje => lenguaje =="PHP");
    console.log(busqueda2);
    //Busqueda por Indice
    var busqueda3 = lenguajes.findIndex(lenguaje => lenguaje =="JS");
    console.log(busqueda3);

var precios = [10,20,30,40,50,60,70,80,90,100];
var busqueda4= precios.some(precio=>precio<10);
console.log(busqueda4);
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+ lenguajes[lenguaje]+"<li>");
}
document.write("</ul>");



