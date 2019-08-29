
//Local Storage


//Comprobar Disponibilidad de LocalStorage
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage Disponible")
}else{
    console.log("LocalStorage no disponible")
}

//Guardar Datos
localStorage.setItem("titulo", "curso");

//Recuperar Elemento
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar Objetos
var usuario ={
    nombre: "Tomas Romeu" ,
    email: "tomashrome@gmail.com" ,
    web: "www.tomasromeu.com"
};
localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar Objeto
var userJS = JSON.parse(localStorage.getItem("usuario"));//Convierte un String en un objeto Usable
console.log(userJS);

document.querySelector("#datos").append( userJS.web + " - "+ userJS.nombre);
localStorage.removeItem("usuario");
