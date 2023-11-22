var deportes = {
    conBalon:["Football","Basketball","Rugby"],
    sinBalon:["Boxeo","Surf", "Trekking"],};

var persona = {nombre: "Lucas", edad: 26, estudios:{esProgramador:true}};

//acceder a la propiedad de un objeto (objeto.propiedad)
console.log(persona.edad)

//asignar valores a un objeto
persona.nombre = "Martin";
console.log(persona.nombre)

persona.edad=32;
console.log(persona.edad)


// crear propiedades de un objeto

var autos = {};
autos.marcas = ["Ford", "Audi","Ferrari"] 
console.log(autos);

// eliminar propiedad "Marcas"

delete autos.marcas;
console.log(autos);


// guardar funcion en un objeto

var misFunciones = {
    saludar: function(){console.log("Hola Kevin")}
};
misFunciones.saludar()


// dot notation
var atuendos = {manos:["Guantes", "Anillos"], pies:["Zapatos","Soquetes"]};
console.log(atuendos.manos)

//bracket notation
atuendos["piernas"] = ["Bermudas", "Pantalones"]
console.log(atuendos)


var comidas= {};
var diferenciaDeNotaciones = function( propUno,propDos){
    comidas.propUno = ["Frutas", "Vegetales"];
    comidas["propDos"] = ["Hamburguesa","Papas Fritas"];
}; 
console.log("en este caso en el console.log estamos diciendole que toma los titulos de las propiedades literalmente que fueron escritos en la funcion.")
diferenciaDeNotaciones("saludable","noSaludable")
console.log(comidas) // 

// esto lo usamos cuando queremos utilizar una variable exerna para guardar la propiedad de un objeto, para esto utilizamos bracket notation sin comillas.
var comidas_corregida={};
var diferenciaDeNotaciones_corregida = function( propUno,propDos){
    comidas_corregida[propUno] = ["Frutas", "Vegetales"];
    comidas_corregida[propDos] = ["Hamburguesa","Papas Fritas"];
};

console.log("En este caso estamos asignando 'Saludable' y 'nosaludable' como los titulos de los parámetros de la función.")
diferenciaDeNotaciones_corregida("saludable","noSaludable")
console.log(comidas_corregida) // En este caso estamos asignando "Saludable" y "nosaludable" como los titulos de los parámetros de la función y tambien como las
//propiedades de el objeto comidas, es decir esta funcion agrega propiedades y sus respectivos valores a un objeto vacio.


console.log(comidas_corregida.saludable)




