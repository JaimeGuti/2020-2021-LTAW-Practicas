// SERVIDOR PRÁCTICA 1

// Importar módulo http
const http = require('http');
// Importar módulo fs
const fs = require('fs');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

//const pagina_main = PAG;
//const pagina_error = IMG;

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("Petición recibida!");

    //-- Valores de la respuesta por defecto
    let code = 200;
    let code_msg = "OK";
    //let page = pagina_main;
    let page = "200 OK"; // Solo para probarlo

    //-- Analizar el recurso
    //-- Construir el objeto url con la url de la solicitud
    const url = new URL(req.url, 'http://' + req.headers['host']);
    console.log(url.pathname);

    //-- Cualquier recurso que no sea la página principal
    //-- genera un error
    if (url.pathname != '/') {
        code = 404;
        code_msg = "Not Found";
        //page = pagina_error;
        page = "404 Not Found"; // Solo para probarlo
    }

    //-- Generar la respuesta en función de las variables
    //-- code, code_msg y page
    res.statusCode = code;
    res.statusMessage = code_msg;
    res.setHeader('Content-Type','text/html');
    res.write(page);
    res.end();
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Servidor activado!. Escuchando en puerto: " + PUERTO);