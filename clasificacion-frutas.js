// ==========================================
// PROYECTO: Clasificación de Frutas
// ==========================================

// 1. Declaramos un arreglo con varios tipos de frutas (con elementos repetidos para contarlos)
const frutas = ["Manzana", "Plátano", "Manzana", "Pera", "Plátano", "Naranja", "Manzana", "Fresa", "Pera"];

// 2. Creamos un objeto vacío para almacenar la cantidad de cada tipo de fruta
const conteoFrutasFor = {};

// 3. Usamos un ciclo FOR para recorrer el arreglo
console.log("--- Conteo usando ciclo FOR ---");

for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];
    
    // Si la fruta ya existe como propiedad en el objeto, le sumamos 1
    if (conteoFrutasFor[frutaActual]) {
        conteoFrutasFor[frutaActual]++;
    } else {
        // Si no existe, la agregamos al objeto y le asignamos el valor de 1
        conteoFrutasFor[frutaActual] = 1;
    }
}

// 4. Imprimimos el objeto en la consola con el conteo final
console.log(conteoFrutasFor);


// ==========================================
// EXTRA (Punto Opcional): Solución con ciclo WHILE
// ==========================================

const conteoFrutasWhile = {};
let index = 0; // Necesitamos un contador externo para el ciclo while

console.log("\n--- Conteo usando ciclo WHILE ---");

while (index < frutas.length) {
    let frutaActual = frutas[index];
    
    if (conteoFrutasWhile[frutaActual]) {
        conteoFrutasWhile[frutaActual]++;
    } else {
        conteoFrutasWhile[frutaActual] = 1;
    }
    
    // MUY IMPORTANTE: Incrementar el índice para avanzar a la siguiente fruta y evitar un ciclo infinito
    index++; 
}

console.log(conteoFrutasWhile);