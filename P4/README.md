 # Práctica 4
 ![Portada P4](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P4/Portada_P4.png)

# Introducción [Práctica 4](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P4)

En esta práctica se modifica el servidor de la [Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P3) (que implementa una **aplicación Web de Chat**) para convertirlo en una **aplicación nativa** utilizando Electron.
La aplicación consiste en un programa servidor hecho en node.js, al que se pueden conectar múltiples clientes desde el navegador. Con las nuevas modificaciones conseguiremos facilitar el uso y acceso de la aplicación de chat. 

## Implementaciones
* **Se mantienen de la práctica 3:**
> * Cuando un nuevo usuario se conecta al servidor se le envia un mensaje de bienvenida, que sólo él verá, y aunciará al resto de participantes que se ha conectado alguien nuevo.
> * Los mensajes enviados por un usuario serán vistos por el resto de usuarios conectados en ese momento.
> * El usuario podrá escribir una serie de comandos que solo serán vistos por él mismo, esos comandos serán:
> > 1. **/help**: nos devuelve la lista con todos los comandos.
> > 2. **/list**: muestra el número de usuarios conectados.
> > 3. **/hello**: el servidor nos saluda.
> > 4. **/date**: nos contesta con la fecha.
> * Si el usuario introduce el carácter identificativo de comando `/`, el servidor lo reconocerá como tal, pero si no coincide con los comandos listados responderá con un mensaje de error que solo verá el usuario que ha introducido dicho mensaje
* **Se añaden con la práctica 4:**
> * El servidor ahora es una aplicación nativa con interfaz gráfica que muestra:
> > 1. Distintas informaciones de versiones.
> > 2. Número de usuarios conectados.
> > 3. Dirección IP a la que deben conectarse los clientes.
> > 4. Todos los mensajes enviados por los clientes y la opción de enviar mensajes de prueba en el servidor.

##  Funcionamiento

En esta práctica contamos con el **servidor**, que se ejecuta como el **proceso principal** de Electron (main.js) y una **interfaz gráfica** (index.js) para este formada por una ventana con sus elementos html, css y javascript. La parte de **clientes** se mantiene sin modificaciones respecto a la [Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/wiki/Práctica-3).

El **proceso principal** llevará la cuenta de los clientes que están conectados y los mensajes enviados por los usuarios, los envía al proceso de renderizado para poder mostrarlos por la **interfaz gráfica**.

Para **usar la aplicación**, en primer lugar debemos lanzar en el directorio un terminal con la siguiente instrucción:
`npm start`. 
Ahora ya tendremos lanzado nuestro **servidor** que escuchará en el puerto `8080` y nos mostrará en una nueva ventana la **interfaz gráfica**.
A continuación, debemos **conectarnos al chat** a través de nuestro navegador **usando la dirección IP** (que nos mostrará la interfaz gráfica) de la máquina en la que se ejecuta el servidor. A partir de ese momento, el servidor ya nos detecta como usuario activo y podremos escribir mensajes y comandos, que podremos ver justo debajo del título de _Mensajes recibidos_. Los mensajes también serán recibidos y vistos por el resto de usuarios, los comandos no. Tanto los mensajes como los comandos enviados por los clientes sí serán vistos en la interfaz gráfica del servidor.


##  Mejoras
* **Empaquetado de la app para el sistemas operativos Linux:** con la implementación de esta mejora ya no será necesario arrancar nuestra aplicación mediante `npm start`, a partir de ahora, lo podemos hacer a través del fichero ejecutable `mi-electron-app-0.1.0.AppImage`.
* **Mostrar más información del sistema:** arquitectura, sistema operativo en el que se ejecuta, versión del sistema y tipo de proceso actual.

# Enlaces externos
* [Universidad Rey Juan Carlos](https://www.urjc.es/)
* [Escuela Técnica Superior de Ingeniería de las Telecomunicaciones](https://www.urjc.es/universidad/facultades/escuela-tecnica-superior-de-ingenieria-de-las-telecomunicaciones)
* [Ingeniería en Sistemas Audiovisuales y Multimedia](https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia)
* [Repositorio Práctica 4](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P4)
* [Repositorio Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P3)
* [Wiki Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/wiki/Práctica-3)


# Licencia
![attribution share alike creative commons license](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P0/attribution-share-alike-creative-commons-license.png?raw=true)
