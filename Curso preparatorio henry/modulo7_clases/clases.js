// Entidades
// las entidades son representacion de conceptos del mundo real

// clases

// es conjunto de datos que pertenecen a una entidad
// podemos pensarlos como plantillas o modelos


// para declarar una clase tenemos dos sintaxis
// 1. función constructora 
// 2. Expresion de clase

/// "FUNCIÓN CONSTRUCTORA" esta es la primera sintaxis para declarar una clase

function Auto(puertas,color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
// esto es para agregar métodos a una clase
    this.informacion = function (){
        console.log('Este es un' + this.marca + " de color " + this.color);
    };
}

var miPrimerAuto= new Auto(2,"rojo","ferrari",2018,4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca)
miPrimerAuto.informacion() // no es necesario declarar o definir informacion como parámetro de la clase.


// "EXPRESIÓN DE CLASE" esta es la segunda sintaxis para declarar una clase, usando una expresion de clases debes notar que se utilizan las llaves envez de parentesis.
// para agregar un método ( ya que no es una propiedad)en este caso debemos declararlo por fuera del constructor

class Carro{
    constructor(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    }
    informacion() {
        console.log('Este es un ' + this.marca + " de color " + this.color);
    }
}



var miSegundoAuto = new Carro(2,"rojo","mazda",2018,4)

console.log(miSegundoAuto)
miSegundoAuto.informacion()


// "this" reserved word, permite indicarle al código de qué contexto debe obtener información
class Football {
    constructor(jugador){
        this.jugador= jugador;
    }

    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new Football('Messi');
var brasil = new Football("Pele")

argentina.obtenerNombre();
brasil.obtenerNombre();











