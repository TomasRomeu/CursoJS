"use strict";

//Fetch (ajax)y Peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_profesor= document.querySelector("#Profesor");
var div_jannet = document.querySelector("#usuario");

getUsuarios()
  .then(data => data.json())
  .then(data => {
    listadoUsuarios(data);

    return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;

    return getUsuario();
  })
  .then(data => data.json())
  .then(user => {
    mostrarJannet(user.data);
  })

  //CATCH SIRVE PARA CAPTURAR ERRORES EN LAS PROMESAS
  .catch(error =>{
    alert("ERROR EN LAS PETICIONES");
    console.log(error);
  })
function getUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function getUsuario() {
  return fetch("https://reqres.in/api/users/2");
}
function getInfo(){
  var profesor = {
      nombre:'Tomas',
      apellido: 'Romeu',
      url: 'htpp://google.com'
  };
  return new Promise((resolve, reject )=>{
    var profesor_string= "";
    setTimeout(function(){
      profesor_string= JSON.stringify(profesor);
      if(typeof profesor_string != 'string' || profesor_string==' ') return reject('ERROR');
      return resolve(profesor_string);
    },3000);
  });
}
function listadoUsuarios(usuarios) {
  usuarios.map((data, i) => {
    let nombre = document.createElement("h2");
    nombre.innerHTML = i + " - " + data.name + " - " + data.username;
    div_usuarios.appendChild(nombre);

    document.querySelector(".loading").style.display = "none";
  });
}

function mostrarJannet(user) {
  //user.map((user, i) => {
  console.log(user);

  let nombre = document.createElement("h3");
  let avatar = document.createElement("img");

  nombre.innerHTML = user.first_name + " - " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "100";

  div_jannet.appendChild(nombre);
  div_jannet.appendChild(avatar);

  document.querySelector("#usuario .loading").style.display = "none";
  //});
}
