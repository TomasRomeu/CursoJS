'use strict';

//Fetch (ajax)y Peticiones a servicios / apis rest

var div_usuarios= document.querySelector("#usuarios");
var div_jannet= document.querySelector("#usuario");


    getUsuarios()
        .then(data => data.json())
        .then(data => {
            listadoUsuarios(data);

            return getUsuario();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJannet(user.data);
        
    });


function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUsuario(){
    return fetch('https://reqres.in/api/users/2');
}
function listadoUsuarios(usuarios){
    usuarios.map((data, i) =>{
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + " - " + data.name + " - " + data.username;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
};

function mostrarJannet(user){
        //user.map((user, i) => {
        console.log(user);

        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " - " + user.last_name;
        avatar.src = user.avatar; 
        avatar.width="100";
        

        div_jannet.appendChild(nombre);
        div_jannet.appendChild(avatar);

        document.querySelector("#usuario .loading").style.display = "none";
    //});
};
