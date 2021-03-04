//Importar módulo http
const http = require('http');

// Definir el puerto a utilizar
const PUERTO = 8080;

//-- Crear el servidor
const server = http.createServer();

//-- Función de retrollamada de petición recibida
//-- Cada vez que un cliente realiza una petición
//-- Se llama a esta función
function atender(req, res) {
    //-- req: http.IncomingMessage: Mensaje de solicitud
    //-- res: http.ServerResponse: Mensaje de respuesta (vacío)

    //-- Indicamos que se ha recibido una petición
    console.log("Petición recibida!");

    //-- pero no enviamos respuesta (todavía)
}

//-- Activar la función de retrollamada del servidor
server.on('request', atender);

//-- Activar el servidor. A la escucha de peticiones
//-- en el puerto 8080
server.listen(PUERTO);

console.log("Servido activado. Escuchando en el puerto: " + PUERTO);