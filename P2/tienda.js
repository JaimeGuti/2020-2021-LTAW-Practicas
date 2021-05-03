// SERVIDOR PRÁCTICA 1

// Importar módulo http
const http = require('http');
// Importar módulo fs
const fs = require('fs');

const url = require('url');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

const PAGINA_MAIN = fs.readFileSync("tienda.html", 'utf-8');
const pagina_error = fs.readFileSync("error.html");

//-- Guardar nombre del fichero de base de datos
const FICHERO_JSON = "tienda.json"

//-- Nombre del fichero JSON de salida
const FICHERO_JSON_OUT = "tiendaOUT.json"

//-- Leer la base de datos
const  tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//-- Convertir la variable a cadena JSON
//let myJSON = JSON.stringify(productos);

//-- Guardarla en el fichero destino
//////////////////////////////////////////////fs.writeFileSync(FICHERO_JSON_OUT, myJSON);

//-- Cargar pagina web del formulario
const FORMULARIO_LOGIN = fs.readFileSync('login.html','utf-8');

//-- HTML de la página de respuesta
const RESPUESTA_LOGIN = fs.readFileSync('logueado.html', 'utf-8');

//-- Página de productos
const PRODUCTO1 = fs.readFileSync('producto_1.html', 'utf-8');
const PRODUCTO2 = fs.readFileSync('producto_2.html', 'utf-8');
const PRODUCTO3 = fs.readFileSync('producto_3.html', 'utf-8');

//-- Imprimir información sobre el mensaje de solicitud
function print_info_req(req) {

  console.log("");
  console.log("Mensaje de solicitud");
  console.log("====================");
  console.log("Método: " + req.method);
  console.log("Recurso: " + req.url);
 // console.log("Version: " + req.httpVersion)

  //-- Construir el objeto url con la url de la solicitud
  const myURL = new URL(req.url, 'http://' + req.headers['host']);
  console.log("URL completa: " + myURL.href);
//  console.log("  * Origen: " + myURL.origin);
//  console.log("    * Protocolo: " + myURL.protocol);
//  console.log("    * host: " + myURL.hostname);
//  console.log("    * port: " + myURL.port);
//  console.log("  Ruta: " + myURL.pathname);
//  console.log("  * Busqueda: " + myURL.search);
//  console.log("  * Nombre usuario: " + myURL.username);
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
//  console.log("Recurso: " + myURL.pathname);
      
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

  //-- LEER PRODUCTOS DE BASE DE DATOS
  let info;
  //-- Conseguir array con los productos
  //-- Producto 1
  let prod1 = PRODUCTO1;
  info = tienda[1].productos[0]['nombre producto'];
  prod1 = prod1.replace("NOMBRE", info);
  info = tienda[1].productos[0]['descripción'];
  prod1 = prod1.replace("DESCRIPCION", info);
  info = tienda[1].productos[0]['precio'];
  prod1 = prod1.replace("PRECIO", info);
  info = tienda[1].productos[0]['stock'];
  prod1 = prod1.replace("STOCK", info);

  //-- Producto 2
  let prod2 = PRODUCTO2;
  info = tienda[1].productos[1]['nombre producto'];
  prod2 = prod2.replace("NOMBRE", info);
  info = tienda[1].productos[1]['descripción'];
  prod2 = prod2.replace("DESCRIPCION", info);
  info = tienda[1].productos[1]['precio'];
  prod2 = prod2.replace("PRECIO", info);
  info = tienda[1].productos[1]['stock'];
  prod2 = prod2.replace("STOCK", info);

  //-- Producto 3
  let prod3 = PRODUCTO3;
  info = tienda[1].productos[2]['nombre producto'];
  prod3 = prod3.replace("NOMBRE", info);
  info = tienda[1].productos[2]['descripción'];
  prod3 = prod3.replace("DESCRIPCION", info);
  info = tienda[1].productos[2]['precio'];
  prod3 = prod3.replace("PRECIO", info);
  info = tienda[1].productos[2]['stock'];
  prod3 = prod3.replace("STOCK", info);

  //-- LEER LOGINS
  let nombre_user = myURL.searchParams.get('usuario');
  let nombre_real = myURL.searchParams.get('nombre real');
  let login1_BD = tienda[0].usuarios[0]['login'];
  let nombre1_BD = tienda[0].usuarios[0]['nombre'];
  let login2_BD = tienda[0].usuarios[1]['login'];
  let nombre2_BD = tienda[0].usuarios[1]['nombre'];
   
  //-- Por defecto entregar formulario
  let user = FORMULARIO_LOGIN;

  //-- Reemplazar las palabras introducidas en la plantilla HTML
  user = RESPUESTA_LOGIN.replace("NOMBRE", nombre_user);
  user = user.replace("NOMBRE_REAL", nombre_real);
  //-- Añadir nombre a página principal
  //user = PAGINA_MAIN.replace("IDENTIFICARSE", nombre_user);
  //-- Mensaje tras registro
  let html_extra = "";
  let html_extra_condicion = "";
  if (nombre_user == login1_BD && nombre_real == nombre1_BD || 
  nombre_user == login2_BD && nombre_real == nombre2_BD) {
    html_extra = "<h2>Estás registrad@</h2>";
    html_extra_condicion = "<h2>Llévame a comprar</h2>";
  } else {
    html_extra = "<h2>No estás registrad@</h2>";
    html_extra_condicion = "<h2>Volver a la página principal</h2>";
  }
  user = user.replace("HTML_EXTRA", html_extra);
  user = user.replace("HTML_EXTRA_CONDICION", html_extra_condicion);



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
      //-- Productos
      if (recurso == "producto_1.html"){
        data = prod1;
      } else if (recurso == "producto_2.html"){
        data = prod2;
      } else if (recurso == "producto_3.html"){
        data = prod3;
      }
      //-- Login
      if (recurso == 'logueado.html') {
        contType = "text/html";
        data = user;
      }

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