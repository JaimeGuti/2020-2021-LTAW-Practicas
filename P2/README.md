 # Práctica 2
![Portada P2](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P2/Portada_P2.png)

# Introducción [Práctica 2](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P2)

En esta práctica partimos de una aplicación web que es una tienda on-line, en la que hemos implementado tanto el servidor web como la presentación al usuario, es decir, back-end y front-end. Ahora, vamos a añadir mecanismos que permitan una interacción entre el cliente y el servidor. Las páginas que nos devuelva el servidor serán dinámicas y se incluye en la tienda registro de usuarios, carrito de la compra, búsqueda con autocompletado y el procesamiento de la compra. Todo ello programado usando node.js

## Implementaciones
* **Servidor web:** implementado usando nodejs, escucha en el puerto **9000** y sirve archivos html, css, javascript e imágenes. En caso de solicitarse algún recurso no disponible, genera una página html de error.
* **Presentación al usuario:** hecha con páginas estáticas, en html y css. Formada por una página principal donde se muestren tres productos, cada uno con su imagen y un enlace a una página propia. Desde la página de cada artículo podemos volver a la página principal. La información de cada producto se leerá de la base de datos. También tendremos habilitado un botón para añadir el producto al carrito.
* **Base de datos:** implementada en el fichero tienda.json, contiene los datos de _usuarios_, _productos- y _pedidos_.
* **Usuarios:** tenemos dos usuarios (_root_ y _usuario_) previamente registrados. En la página principal tenemos la opción para de acceder a la cuenta, si no has accedido a tu cuenta no podrás realizar ninguna compra.
* **Login:** el acceso a la cuenta se hará mediante una opción disponible en la página principal. Al acceder a esa opción se pedirá que introduzcas el nombre del usuario (_root_ o _usuario_) y su contraseña (_root_ o _1234_ respectivamente). Si el usuario es correcto, aparecerá en la página principal que se está conectado con dicho usuario.
* **Carrito de la compra:** se irán añadiendo todos los productos pulsando en el botón de 'añadir al carrito' que encontraremos en cada una de las páginas de los productos.
* **Finalizar compra:** cuando el usuario haga click en finalizar compra, se mostrará una página con el contenido actual del carrito y un formulario para solicitar al usuario que introduzca su dirección de envío y número de tarjeta de crédito. Una vez introducidos, la tienda confirma que el pedido se ha realizado y lo almacena en la base de datos.
* **Búsqueda con autocompletado:** opción de acceder a un producto mediante una caja de búsqueda. **EN DESARROLLO**

##  Funcionamiento
En primer lugar debemos lanzar en un terminal la siguiente instrucción:
`node tienda.js`. 
Ahora ya tendremos lanzado nuestro servidor que escuchará en el puerto 9000.
A continuación, debemos conectarnos a dicho servidor a través de nuestro navegador usando la dirección `127.0.0.1:9000` o `localhost:9000`, consiguiendo así acceder a la tienda y poder navegar por ella.

##  Mejoras
* **Autenticación con usuario y password:** A la hora logearse nos pedirá el usuario y la contraseña (ya registrados previamente en la base de datos). Sólo podremos acceder si ambos campos coinciden con los de la base de datos. En este caso, el usuario _root_ accede con la contraseña _root_ y el usuario _usuario_ lo hará con la clave _1234_.

# Enlaces externos
* [Universidad Rey Juan Carlos](https://www.urjc.es/)
* [Escuela Técnica Superior de Ingeniería de las Telecomunicaciones](https://www.urjc.es/universidad/facultades/escuela-tecnica-superior-de-ingenieria-de-las-telecomunicaciones)
* [Ingeniería en Sistemas Audiovisuales y Multimedia](https://www.urjc.es/estudios/grado/637-ingenieria-en-sistemas-audiovisuales-y-multimedia)
* [Repositorio Práctica 2](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/tree/main/P2)

# Licencia
![attribution share alike creative commons license](https://github.com/JaimeGuti/2020-2021-LTAW-Practicas/blob/main/P0/attribution-share-alike-creative-commons-license.png?raw=true)
