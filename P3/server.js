//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');

const PUERTO = 8080;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asosiaco a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//-- Inicializar variable número de usuarios
let num_users = 0;

//-- Constante para la fecha
const tiempo = Date.now();
const fecha = new Date(tiempo);

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', (req, res) => {
  res.send('¡Bienvenid@!' + '<p><a href="/chat.html">Entrar al chat</a></p>');
});

//-- Esto es necesario para que el servidor le envíe al cliente la
//-- biblioteca socket.io para el cliente
app.use('/', express.static(__dirname +'/'));

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('public'));

//------------------- GESTION SOCKETS IO
//-- Evento: Nueva conexion recibida
io.on('connect', (socket) => {
  
  console.log('** NUEVA CONEXIÓN **'.yellow);

  //-- Mensaje de bienvenida
  socket.send('¡Bienvenid@ al chat!');

  //-- Mensaje de nuevo usuario conectado
  io.send("¡Nuevo usuario conectado!");

  //-- Añadir un usuario
  num_users = num_users + 1;
  console.log("Número de usuarios: " + num_users);



  //-- Evento de desconexión
  socket.on('disconnect', function(){
    console.log('** CONEXIÓN TERMINADA **'.yellow);
    if (num_users > 0){
      num_users = num_users - 1;
      console.log("Número de usuarios: " + num_users);
    }
  });  

  //-- Mensaje recibido: Reenviarlo a todos los clientes conectados
  socket.on("message", (msg)=> {
    console.log("Mensaje Recibido!: " + msg.blue);

    if (msg == "/help"){
      socket.send("<p></p>" + "/help: Mostrará una lista con todos los comandos soportados" + "<p></p>" +
      "/list: Devolverá el número de usuarios conectados" + "<p></p>" +
      "/hello: El servidor nos devolverá el saludo" + "<p></p>" +
      "/date: Nos devolverá la fecha" + "<p></p>");

    } else if (msg == "/list") {
      socket.send("Número de usuarios conectados: " + num_users);

    } else if (msg == "/hello") {
      socket.send("¡Hello, el servidor les saluda!");

    } else if (msg == "/date") {
      //-- Fecha en un formato legible por un humano
      socket.send(fecha.toDateString());
      //-- Fecha en el formato según la zona horaria UTC
      //socket.send(fecha.toGMTString());
      
    } else if (msg.startsWith("/")) {
      socket.send("Comando no reconocido");

    } else {
      //-- Reenviarlo a todos los clientes conectados
      io.send(msg);
    }

  });


});

//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);