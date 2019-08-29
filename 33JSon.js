
//JSON - JavaScrips Object Notation

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas= [
    {titulo:'La vida es bella', year:2000, pais:'Italia'},
    pelicula
];

var cajapeliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
    cajapeliculas.append(p);
}