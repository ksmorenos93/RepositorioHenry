var libro = {autor:"Borges", genero: "Policial", año:1990};

// método hasOwnProperty, valida si el objeto tiene la propiedad nombre
var tienePropiedad = libro.hasOwnProperty("nombre");
console.log(tienePropiedad);

//validar si el objeto tiene la propiedad autor
var tienePropiedad = libro.hasOwnProperty("autor");
console.log(tienePropiedad);

// método object.keys(), devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
var todasLasPropieades= Object.keys(libro)
console.log(todasLasPropieades)

var mundo = {continentes:7, paises: 195, oceanos:5};
for (var prop in mundo){
    console.log("Esta es la propiedad: "+ prop)
    console.log("Este es el valor: "+ mundo[prop])
}

// for sirve solamente para recorrer arreglos
// for in sirve solamente para recorrer objetos

// this es para que entienda que la palabra raza esta siendo analizada dentro del contexto del objeto "mascota", de lo contrario surgira error diciendo que "raza" no está definida.

var mascota = {animal:"Perro", 
                raza:"Ovejero Alemán",
            amistoso:true,
            dueña: "María López",
            info:function(){
                console.log('Mi perro es un '+ this.raza);
            },
        }

mascota.info();




