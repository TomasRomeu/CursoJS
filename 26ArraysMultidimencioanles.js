
var categorias= ['Accion', 'Terror', 'Comedia', 'Drama'];
var peliculas= ['TLOTR', 'La Vida es Bella', 'Annabele', 'Toy Story'];

peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);


var cine=[categorias, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

var elemento ="";

do {
    elemento=prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while (elemento!="ACABAR");

console.log(peliculas);

var indice=peliculas.indexOf('Annabele');
if (indice>-1) {
    peliculas.splice(indice, 1);
}

var peliculas_string=peliculas.join();
var cadena="texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);
