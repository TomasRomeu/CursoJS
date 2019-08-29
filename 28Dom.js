// DOM- Document Object Model

function cambiaColor(color){
    caja.style.background=color;

}

//Conseguir Elementos con un ID concreto

//var caja= document.getElementById("micaja");

var caja=document.querySelector("#micaja");

caja.innerHTML = "!Texto desde JS¡"
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className = "hola hola2"

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion=document.querySelector("#miSeccion");
var hr =document.createElement("hr");


var valor;
for(valor in todosLosDivs){
    console.log(todosLosDivs[valor]);
    if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        seccion.append(parrafo);
        
    }
}
seccion.append(hr);


//Conseguir elementos por su clase

var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillo=document.getElementsByClassName('amarillo');
divsAmarillo[0].style.background="yellow";


var div;
for(div in divsRojos){
    if(divsRojos[div].className=="rojo"){
        divsRojos[div].style.background="red";
    }
}

//Query Selector
var id= document.querySelector("#encabezado")
console.log(id);

var claseRojo=document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
