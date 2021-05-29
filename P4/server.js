const electron = require('electron');

console.log("Hola desde el proceso de la web...");

//-- Obtener elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const infoIP = document.getElementById("infoIP");
const infoUSERS = document.getElementById("infoUSERS");
const print = document.getElementById("print");
let msg_prueba = 1;
//-- Inicializar variable número de usuarios
let num_users = 0;
infoUSERS.innerHTML = num_users;

//-- Acceder a la API de node para obtener la info
//-- Sólo es posible si nos han dado permisos desde
//-- el proceso princpal
info1.textContent = process.versions.node;
info2.textContent = process.versions.electron;
info3.textContent = process.versions.chrome;


btn_test.onclick = () => {
    display.innerHTML += "Mensaje recibido " + msg_prueba + "...<p></p>";
    msg_prueba = msg_prueba + 1;
    console.log("Botón apretado!");
}

//-- Mensaje recibido del proceso MAIN
electron.ipcRenderer.on('print', (event, message) => {
    console.log("Recibido: " + message);
    display.innerHTML += message + "<p></p>";
    print.textContent = message;
});

//-- Mensaje recibido del proceso MAIN para IP
electron.ipcRenderer.on('ip', (event, message) => {
    console.log("IP: " + message);
    infoIP.innerHTML = message;
});

//-- Mensaje recibido del proceso MAIN para USUARIOS
electron.ipcRenderer.on('users', (event, message) => {
    console.log("Usuarios: " + message);
    infoUSERS.innerHTML = message;
});