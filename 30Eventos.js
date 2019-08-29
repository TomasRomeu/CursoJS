'use strict'

//Evento Load

window.addEventListener('load', ()=>{
    //Eventos del Raton

    var boton = document.querySelector("#boton");

    function cambiaColor(){
        console.log("Me has dado click");

        var bg = boton.style.background;

        if(bg=="green"){
            boton.style.background="red";
        }else{
            boton.style.background="green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    //Click
    var boton = document.querySelector("#boton");
    boton.addEventListener('click', function(){
        cambiaColor();
    });

    //Mouse Over
    boton.addEventListener('mouseover', function(){
        boton.style.background="#ccc";
    });

    //Mouse Out
    boton.addEventListener('mouseout', function(){
        boton.style.background="black";
    });

    //Eventos Teclado(Focus, Blur, Keydown, Keypress, Keyup)
    var input = document.querySelector("#campo_nombre");

    //Focus
    input.addEventListener('focus', function(){
        console.log("[Focus] Estas dentro del input");
    });

    //Blur
    input.addEventListener('blur', function(){
        console.log("[Blur] Estas fuera del input");
    });

    //Keydown

    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("TECLA PRESIONADA ", String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("TECLA SOLTADA ", String.fromCharCode(event.keyCode));
    });


//Eventos del Raton

var boton = document.querySelector("#boton");

function cambiaColor(){
    console.log("Me has dado click");

    var bg = boton.style.background;

    if(bg=="green"){
        boton.style.background="red";
    }else{
        boton.style.background="green";
    }
    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";
    return true;

}

    //Click
    var boton = document.querySelector("#boton");
    boton.addEventListener('click', function(){
        cambiaColor();
        console.log(this);
        this.style.border="10px solid black";
    });
    //Mouse Over
    boton.addEventListener('mouseover', function(){
        boton.style.background="#ccc";
    });
    //Mouse Out
    boton.addEventListener('mouseout', function(){
        boton.style.background="black";
    });

    //Eventos Teclado(Focus, Blur, Keydown, Keypress, Keyup)
    var input = document.querySelector("#campo_nombre");

    //Focus
    input.addEventListener('focus', function(){
        console.log("[Focus] Estas dentro del input");
    });
    //Blur
    input.addEventListener('blur', function(){
        console.log("[Blur] Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla ", String.fromCharCode(event.keyCode));

    });
    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("TECLA PRESIONADA ", String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("TECLA SOLTADA ", String.fromCharCode(event.keyCode));

    });
});//Final del Load