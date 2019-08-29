function sumame(n1,n2,sumaYmuesta,sumaPorDos){

    var sumar=n1+n2;

    sumaYmuesta(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5,7, (dato)=>{
    console.log("La suma es: ", dato);
},
function (dato){
    console.log("La suma por dos es: ", (dato*2));
});
