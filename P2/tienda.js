// SERVIDOR PRÁCTICA 1

// Importar módulo http
const http = require('http');
// Importar módulo fs
const fs = require('fs');

const url = require('url');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

const pagina_main = fs.readFileSync("tienda.html");
const pagina_error = fs.readFileSync("error.html");

//-- Guardar nombre del fichero de base de datos
const FICHERO_JSON = "tienda.json"

//-- Leer la base de datos
const  tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//-- Conseguir array con los productos
let productos = tienda[1]['productos'];
console.log(productos)

//-- Recorrer el array de productos PARA PROBAR
tienda.forEach((element, index)=>{
  console.log("Producto: " + (index + 1) + ": " + productos[index]['nombre producto']);
});

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
  let recurso = "";

  // Imprimir recurso solicitado
  console.log("Recurso: " + myURL.pathname);
      
  //Gestionar la petición
  if (myURL.pathname == "/") { //Petición raíz
      recurso = "tienda.html";
  } else { // Otras peticiones
      recurso = myURL.pathname.substr(1);
      //recurso = recurso.split("/")[1];
  }

  const type = {
    "plain": "text/plain",
    "html": "text/html",
    "css": "text/css",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "mp4": "video/mp4",
    "gif": "image/gif",
    "ico": "image/x-icon"
  };
    
  let contType = "";
  contType = type[recurso.split(".")[1]];
  console.log("Content Type: " + contType);

  fs.readFile(recurso, function(err, data){
    //-- Valores de la respuesta por defecto
    let code = "";
    let code_msg = "";
    //-- Cualquier recurso que no exista genera un error
    if (err){
      code = 404;
      code_msg = "Not Found";
      recurso = "error.html";
      contType = type[recurso.split(".")[1]];
      data = pagina_error;
    }else{
      code = 200;
      code_msg = "OK";
    }

    //-- Generar la respuesta en función de las variables
    res.statusCode = code;
    res.statusMessage = code_msg;
    res.writeHead(code, {'Content-Type': contType});
    console.log("Status: "+code+" "+code_msg);
    res.write(data);
    res.end();
  });
});

//-- Activar el servidor:
server.listen(PUERTO);

console.log("Servidor activado. Escuchando en puerto: " + PUERTO);