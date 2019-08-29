//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//Defino la funcion
/*
function calculadora(){
    
    //Conjunto de instrucciones a ejecutar
    
    console.log("hola soy la calculadora");
    console.log("Si soy yo");

        
}

//Invocar o llamar Funcion

var resultado = calculadora();
console.log(resultado);

calculadora();
*/

//Funciones con PARAMETROS

function calculadora2(num1, num2, mostrar = false){
    if(mostrar==false){
        PorConsola(num1,num2);
    }else{
        PorPantalla(num1,num2);
    }
}

function PorConsola(num1, num2){
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Multiplicacion: " + (num1*num2));
    console.log("Division: " + (num1/num2));
    console.log("***********************************");
}

function PorPantalla(num1,num2){
    document.write("Suma: " + (num1+num2) + "<br/>");
    document.write("Resta: " + (num1-num2) + "<br/>");
    document.write("Multiplicacion: " + (num1*num2) + "<br/>");
    document.write("Division: " + (num1/num2) + "<br/>");
    document.write("***********************************" + "<br/>" );
}

calculadora2(1,4);
calculadora2(4,16,true);
calculadora2(2,4,true);
calculadora2(5,6);

/*
for ( var i=1 ; i<=10; i++){
    console.log(i),
    calculadora2(i,8);
}
*/
