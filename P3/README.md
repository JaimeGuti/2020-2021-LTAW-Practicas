 # Práctica 3
![Portada P2](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P3/Portada_P3.png)

# Introducción [Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P3)

En esta práctica se implementa una **aplicación Web de Chat**, utilizando websockets a través de la biblioteca Socket.io.
La aplicación consiste en un programa servidor hecho en node.js, al que se pueden conectar múltiples clientes desde el navegador. 

## Implementaciones
* Cuando un nuevo usuario se conecta al servidor se le envia un mensaje de bienvenida, que sólo él verá, y aunciará al resto de participantes que se ha conectado alguien nuevo.
* Los mensajes enviados por un usuario serán vistos por el resto de usuarios conectados en ese momento.
* El usuario podrá escribir una serie de comandos que solo serán vistos por él mismo, esos comandos serán:
> 1. **/help**: nos devuelve la lista con todos los comandos.
> 2. **/list**: muestra el número de usuarios conectados.
> 3. **/hello**: el servidor nos saluda.
> 4. **/date**: nos contesta con la fecha.

* Si el usuario introduce el carácter identificativo de comando `/`, el servidor lo reconocerá como tal, pero si no coincide con los comandos listados responderá con un mensaje de error que solo verá el usuario que ha introducido dicho mensaje

##  Funcionamiento
En primer lugar debemos lanzar en el directorio un terminal con la siguiente instrucción:
`node server.js`. 
Ahora ya tendremos lanzado nuestro servidor que escuchará en el puerto 8080.
A continuación, debemos conectarnos al chat a través de nuestro navegador usando la dirección `127.0.0.1:8080` o `localhost:8080`, seremos bienvenidos y debemos hacer click en _Entrar al chat_. A partir de ese momento, el servidor ya nos detecta como usuario activo y podremos escribir mensajes y comandos, que podremos ver justo debajo del título de Mensajes recibidos. Los mensajes también serán recibidos y vistos por el resto de usuarios, los comandos no.


##  Mejoras
* No se han implementado mejoras en esta práctica.

# Enlaces externos
* [Universidad Rey Juan Carlos](https://www.urjc.es/)
* [Escuela Técnica Superior de Ingeniería de las Telecomunicaciones](https://www.urjc.es/universidad/facultades/escuela-tecnica-superior-de-ingenieria-de-las-telecomunicaciones)
* [Ingeniería en Sistemas Audiovisuales y Multimedia](https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia)
* [Repositorio Práctica 3](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P3)

# Licencia
![attribution share alike creative commons license](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P0/attribution-share-alike-creative-commons-license.png?raw=true)
