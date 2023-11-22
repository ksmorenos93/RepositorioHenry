var colores= ["amarillo","azul"];
colores.push("rojo"); // agrega rojo como ultimo elemento
colores.unshift("verde"); // agrega verde como primer elemento
console.log(colores);
colores.pop(); // elimina el ultimo element
colores.shift(); //  elimina el primer elemento
console.log(colores);

// Método includes  nos devuelve un valor booleano
var pintores = ["Picasso", "Velazquez","Van Gogh","Dali"];
var incluyeDali= pintores.includes("Dali")
var incluyeMonet= pintores.includes("Monet")
console.log(incluyeDali)
console.log(incluyeMonet)

/// método every evalua si todos los elementos de un arreglo cumplen una condición.

var numeros= [10,6,8,9]
var cumplen_condicion = numeros.every((num)=> {
return num > 5;//  si cada número en el arreglo números cumple con la condición entre parentesis retorna "true" de lo contrario retorna false
});
console.log("cumplen_condicion")
console.log(cumplen_condicion)

// método pop and push
var palabra = "Henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y")
console.log(palabraSeparada)

/// método join 
var palabraSeparada=palabraSeparada.join("");
console.log(palabraSeparada)

/// método for each, este método solo realiza alguna acción sobre el arreglo pero no hace cambios sobre el array.

var numeros = [1,2,3,4]
numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {
    if (num === 3){
        console.log(num);}
})

// método map, este método puede hacer cambios sobre el arreglo por ejemplo  sumarle 1 a cada elemento. es decir entrega una copia del elemento original con los
// cambios realizados

var masUno = numeros.map((num) => {
    return num+1;
});
console.log(masUno)















