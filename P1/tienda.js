// SERVIDOR PRÁCTICA 1

// Importar módulo http
const http = require('http');
// Importar módulo fs
const fs = require('fs');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

const pagina_main = fs.readFileSync("tienda.html");
const pagina_error = fs.readFileSync("error.html");

//-- Imprimir información sobre el mensaje de solicitud
function print_info_req(req) {

  console.log("");
  console.log("Mensaje de solicitud");
  console.log("====================");
  console.log("Método: " + req.method);
  console.log("Recurso: " + req.url);
  console.log("Version: " + req.httpVersion)

  //-- Construir el objeto url con la url de la solicitud
  const myURL = new URL(req.url, 'http://' + req.headers['host']);
  console.log("URL completa: " + myURL.href);
  console.log("  * Origen: " + myURL.origin);
  console.log("    * Protocolo: " + myURL.protocol);
  console.log("    * host: " + myURL.hostname);
  console.log("    * port: " + myURL.port);
  console.log("  Ruta: " + myURL.pathname);
  console.log("  * Busqueda: " + myURL.search);
  console.log("  * Nombre usuario: " + myURL.username);
}

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Imprimir que se ha recibido una petición
  console.log("");
  console.log("PETICIÓN RECIBIDA");
  
  //-- Imprimir información de la petición
  print_info_req(req);

    const myURL = new URL(req.url, 'http://' + req.headers['host']);
    const recurso = myURL.pathname;
    fs.readFile(recurso, function(err, page){
      //-- Valores de la respuesta por defecto
      let code = 200;
      let code_msg = "OK";
      page = pagina_main;
      //-- Cualquier recurso que no exista genera un error
      if (recurso != '/'){ // CAMBIAR
        code = 404;
        code_msg = "Not Found";
        page = pagina_error;
      }

      //-- Generar la respuesta en función de las variables
      //-- code, code_msg y page
      res.statusCode = code;
      res.statusMessage = code_msg;
      res.setHeader('Content-Type','text/html');
      res.write(page);
      res.end();
    })
});

//-- Activar el servidor:
server.listen(PUERTO);

console.log("Servidor activado. Escuchando en puerto: " + PUERTO);