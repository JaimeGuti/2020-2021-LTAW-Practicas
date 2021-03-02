//-- Ejemplo de arrays literales

//-- Crear una lista (array) de 4 elementos
const a = [1,3,5,7,9,11,13,15,17,19,21,23];

//-- Mostrar el elemento 2
console.log("Elemento 2: " + a[4]);

//-- Recorrer todos los elementos
for (i in a) {
    console.log(`a[${i}] = ${a[i]}`);
}

//-- Imprimir el numero total de elementos
console.log("Cantidad de elementos: " + a.length);