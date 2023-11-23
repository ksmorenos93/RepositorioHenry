// protipos son  un mecanismo por el cual todos los objetos o elementos de javascript pueden extender sus propiedades y métodos.

Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];

    for (let i=0; i< this.length; i++){
        if (this[i]>3) {// this equivale al arreglo que esta invocando nuestro método.
            arregloModificado.push(false);
        }else {
            arregloModificado.push(this[i]);
        }
        }
            return arregloModificado
    };

    var arreglo = [1,2,3,4,5];
    var nuevo_arreglo = arreglo.mayoresQueTres();

    console.log(nuevo_arreglo);

class Latinoamerica {
    constructor(){ 
        this.paises = [];
    }
}

Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPais("Mexico");
continente.agregarPais("Colombia");
console.log(continente.paises)


// los prototipos le permiten a los objetos de java script heredar propiedades y metodos a otros elementos como por ejemplo a otros objetos.
// podemos utilizar estos prototipos para acceder al constructor de otra clase y agregar métodos

// El proceso en el que los objetos globales de JavaScript le extienden metodos y propiedades a cualquier tipo de dato se denomina herencia.