// ==========================================
// EJERCICIO: Tipos de Datos en JavaScript
// ==========================================

// Los strings son secuencias de caracteres entre comillas[cite: 1]
console.log(typeof 'Veinticinco'); // "string"
console.log(typeof '');             // "string" (cadena vacía)

// Los numbers incluyen tanto enteros como decimales[cite: 1]
console.log(typeof 42);            // "number"
console.log(typeof -666);          // "number"
console.log(typeof 0);             // "number"

// Los booleano solo pueden ser true o false[cite: 1]
console.log(typeof true);          // "boolean"

// Casos especiales: null y undefined[cite: 1]
console.log(typeof null);          // "object" (error histórico de JS)
console.log(typeof undefined);     // "undefined"

/* 
   Nota sobre FALSE: 
   JavaScript distingue entre mayúsculas y minúsculas[cite: 1].
   Si usamos FALSE sin comillas, JS pensará que es una variable.
   Para que funcione como texto, lo ponemos entre comillas:
*/
console.log(typeof "FALSE");       // "string"


// ==========================================
// EXPERIMENTACIÓN (Sistemas Biomédicos y Química)
// ==========================================

// Un objeto para representar un sensor
console.log(typeof { nombre: "Sensor ECG", valor: 75 }); // "object"

// Una constante química (Número decimal)
console.log(typeof 6.022); // "number"