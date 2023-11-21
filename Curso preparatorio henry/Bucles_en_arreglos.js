//for (aqui van 3 parámetros){aqui vamos a escribir una acción para cada elemento}; se utiliza para un número determinado de repeticiones
//Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 
var arr = [1,2,3,4,5];
for (var i=0; i < arr.length; i++){
    console.log(arr[i]);
}

function  encontrarLetraP(string){
    var letras = string.split("");

    for (let i = 0; i< letras.length; i++){
        if (letras[i] === "p"){
            console.log("Si contiene letra P")
        }
    }
}

encontrarLetraP("JavaScript");
encontrarLetraP("henryp");

// bucle while, se utiliza cuando tenemos condiciones specificas
// Sintaxis: while (condicion)
var arr=[];

while (arr.length < 5){
    arr.push("BOOM")
}
console.log(arr)













