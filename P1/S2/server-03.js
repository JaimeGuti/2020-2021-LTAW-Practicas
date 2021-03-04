//Importar módulo http
const http = require('http');

// Definir el puerto a utilizar
const PUERTO = 8080;

//-- Crear el servidor. La función de retrollamada de
//-- atención a las peticiones se define dentro de los
//-- argumentos
const server = http.createServer((req, res) => {
    
    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");
  });

//-- Activar el servidor. A la escucha de peticiones
//-- en el puerto 8080
server.listen(PUERTO);

console.log("Servido activado. Escuchando en el puerto: " + PUERTO);