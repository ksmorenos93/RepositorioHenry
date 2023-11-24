// las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones.
//supongamos que tenemos una funcion 1 que recibe por parametro a una funcion 2, cuando
// la función 1 ejecuta por parametro otra función 2, se produce un proceso llamado callback.

// callback definicio: proceso en el que una función recibe por parámetro a otra función y la ejecuta en su interior.

// los callback aseguran que una función no se va a ejecutar antes de que se complete una tarea. sino
// justo después de que la tarea se haya completado.



var devuelvoUsuario = function() {
    return 'CAMILO';
 }
 var devuelvoSaludo = function() {
    return 'Hola';
 }

  // la función saludar recibira dos funciones o callbacks, por parámetro  y las llamaremos cb1 y cb2.
  // dentro de su cuerpot simplemente retornara los resultados de ejecutar cada una de las funciones callbacks cb1 y cb2 concatenados  y separados por un  espacio""
  //
 var saludar = function (cb1, cb2) {
    return cb1() + ' ' + cb2();
 }

// la variable resultado la igualamamos, a le ejecución de la función saludar, pasandole por parámetros  la "definicion" de las funciones que creamos anteriormente.
// cuando hablamos acerca de la definicion de una función, nos referimos a la funcion sin ser invocada o ejecutada ya que al utilizarse los parentesis para invocar una
// obtendremos el resultado de su invocacion, con lo cual estaremos hablando en términos de : el resultado de la funcion es, y en el caso de las funciones de callback
// siempre enviaremos por parametros la definicion de la funcion, no el resultado de la invocacion.
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);

var devuelvoFrase = function(comida){ 
    return "Hoy quiero comer: " + comida;

};

var hablar = function ( comida, funcion_cb) {
    return funcion_cb(comida); // este return indica que utilizaremos la funcion , en este caso "devuelvo frase", con el parámetro "comida". 
};

var fraseFinal = hablar("Pizza", devuelvoFrase); // comida o en este caso "Pizza" fue utilizada como argumento en ambas funciones.
console.log(fraseFinal);

