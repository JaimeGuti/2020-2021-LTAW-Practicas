# Ejercicio 1

```
<!DOCTYPE urjc_ML SYSTEM "urjc_ml.dtd">
<urjc_ml>
  <!-- include URL URJC -->
  <campus>
    <nombre>Campus de Fuenlabrada</nombre>
    <escuela>
      <nombre>ETSI Telecomunicación</nombre>
      <grado>
        <nombre>Ingeniería en Sistemas Audiovisuales y Multimedia </nombre>
        <asignatura>Laboratorio de Tecnologias Audiovisuales en la Web</asignatura>
        <asignatura>Construcción de servicios y Aplicaciones Audiovisuales en Internet</asignatura>
      </grado>
    </escuela>
  </campus>
</urjc_ml>
```
* a) Explica para qué sirve la primera línea del documento y por qué es necesaria

    Nos indica que es un documento de tipo urjc_ML y su definición está en el fichero urjc_ml.dtd

* b) Si se omitiese esta línea, ¿Qué piensas que ocurriría?

    La máquina que ejecute el fichero no sabrá que lenguaje estamos usando y no podrá leerlo.

* c) Sin conocer el contenido del fichero urjc_ml.dtd, ¿el documento es sintácticamente correcto?

    No conocemos o que hay en ese documento, por tanto, no podremos saber si es correcto hasta que no lo veamos o lo ejecutemos.

* d) ¿Qué hace la tercera línea?

    Es un comentario que solo verá el editor del documento

* e) ¿Cuantas etiquetas de apertura hay? ¿Cuantas de cierre?

    9 etiquetas de apertura y 9 de cierre.

* f) Dibuja el diagrama de contenedores de este documento

    ```
    urjc_ml
        Campus
            Nombre: Campus de Fuenlabrada
            Escuela:
                Nombre: ETSI Telecomunicación
                Grado:
                    Nombre: ISAM
                    Asignatura: LTAW
                    Asignatura: CSAI
    ```

* g) Dibuja la estructura en árbol que define este documento

                                Documento
                                   |
                                urjc_ml
                                   |
                                Campus
                        |                      |
                      Nombre                Escuela
                        |                 |               |
               Campus Fuenlabrada       Nombre          Grado
                                          |               |
                                     ETSI Teleco    |       |       |
                                                    |       |       |
                                                Nombre Asignatura Asignatura
                                                   |       |       |
                                                  ISAM    LTAW    CSAI

                            