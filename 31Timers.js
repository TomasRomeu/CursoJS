window.addEventListener('load', function(){
    //TIMERS
    function intervalo(){
        var tiempo=this.setInterval(function(){
            console.log("Set interval ejecutado: ")
                
            var encabezado =document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.font = "50px";
            }
        }, 500);
        return tiempo;
    }
    var tiempo=intervalo();

    var stop=this.document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });
    var start=this.document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has iniciado el bucle");
        intervalo();     
    });
});