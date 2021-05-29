//-- Cargar el módulo de electron
const electron = require('electron');
//-- Cargar las dependencias //-- PARTE SERVER P3
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
const ip = require('ip');

const PUERTO = 8080;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asosiaco a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//-- Inicializar variable número de usuarios
let num_users = 0;

//-- Dirección IP
let dir_ip = ip.address();
console.log("IP de la máquina: " + dir_ip.red);

//-- Constante para la fecha
const tiempo = Date.now();
const fecha = new Date(tiempo);

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', (req, res) => {
  res.send('<p style = "text-align: center; margin-top: 20%;">¡Bienvenid@! </p>' + '<p style = "text-align: center; vertical-align: middle;"><a href="/chat.html">Entrar al chat</a></p>');
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
  win.webContents.send('infoUSERS', num_users);


  //-- Evento de desconexión
  socket.on('disconnect', function(){
    console.log('** CONEXIÓN TERMINADA **'.yellow);
    if (num_users > 0){
      num_users = num_users - 1;
      console.log("Número de usuarios: " + num_users);
      win.webContents.send('infoUSERS', num_users);
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
      win.webContents.send('print', msg);

    } else if (msg == "/list") {
      socket.send("Número de usuarios conectados: " + num_users);
      win.webContents.send('print', msg);

    } else if (msg == "/hello") {
      socket.send("¡Hello, el servidor les saluda!");
      win.webContents.send('print', msg);

    } else if (msg == "/date") {
      //-- Fecha en un formato legible por un humano
      socket.send(fecha.toDateString());
      //-- Fecha en el formato según la zona horaria UTC
      //socket.send(fecha.toGMTString());
      win.webContents.send('print', msg);
      
    } else if (msg.startsWith("/")) {
      socket.send("Comando no reconocido");
      wrong_msg = "Se ha introducido un comando incorrecto";
      console.log(wrong_msg);
      win.webContents.send('print', msg);
      win.webContents.send('print', wrong_msg);

    } else {
      //-- Reenviarlo a todos los clientes conectados
      io.send(msg);
      win.webContents.send('print', msg);
    }

  });


});

//-- PARTE ELECTRON
console.log("Arrancando electron...");

//-- Variable para acceder a la ventana principal
//-- Se pone aquí para que sea global al módulo principal
let win = null;

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', () => {
    console.log("Evento Ready!");

    //-- Crear la ventana principal de nuestra aplicación
    win = new electron.BrowserWindow({
        width: 650,   //-- Anchura 
        height: 600,  //-- Altura

        //-- Permitir que la ventana tenga ACCESO AL SISTEMA
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
        }
    });

  //-- En la parte superior se nos ha creado el menu
  //-- por defecto
  //-- Si lo queremos quitar, hay que añadir esta línea
  //win.setMenuBarVisibility(false)

  //-- Cargar interfaz gráfica en HTML
  win.loadFile("server.html");

  //-- Esperar a que la página se cargue y se muestre
  //-- y luego enviar el mensaje al proceso de renderizado para que 
  //-- lo saque por la interfaz gráfica
  win.on('ready-to-show', () => {
    let msg_IP = "http://" + dir_ip + ":" + PUERTO + "/chat.html";
    win.webContents.send('ip', msg_IP);
    console.log(msg_IP.red);
  });

});


//-- Esperar a recibir los mensajes de botón apretado (Test) del proceso de 
//-- renderizado. Al recibirlos se escribe una cadena en la consola
electron.ipcMain.handle('test', (event, msg) => {
  console.log("-> Mensaje: " + msg);
});

//-- PARTE SERVER P3
//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);