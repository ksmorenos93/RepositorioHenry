class Persona {
    constructor (nombre, edad){
        this.nombre= nombre;
        this.edad = edad;

    }
    saludar(){// este es el método que posee la clase
        console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + " años");
    }
}

var martin = new Persona("Martin", 26) // esta es una instancia de la entidad persona
martin.saludar();

// extension de clase nos permite tener una  clase general que le heredara propiedades y metodos a otras.
// de esta forma podemos generar distintas subentidades que puedan mantener sus propias caracteristicas pero que compartan algunas generales.

class Programador extends Persona {
    constructor (nombre, edad, añosDeExperiencia){
        super(nombre, edad); // estas propiedades están siendo heredadas de la clase "Persona". de lo contrario tendriamos que escribir this muchas veces.
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){ // este es un metodo
        console.log ("Soy " + this.nombre + ". Codeo desde hace " + this.añosDeExperiencia + ' años.');

    }
}

var programador = new Programador('Maria', 37, 4);
martin.saludar();
programador.codear();
programador.saludar(); // este metodo funciona en la instancia de la clase "Programador" aunque fue creado en la clase "Persona", pues los parámetros de este
// método "saludar" tambien existen en la otra clase. Esto funciona porque todos los métodos de la clase "Persona" fueron heredados a la clase "Programador".
