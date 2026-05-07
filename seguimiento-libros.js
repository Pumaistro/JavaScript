// ==========================================
// PROYECTO: Seguimiento de Libros
// ==========================================

// 1. Declaramos un arreglo vacío globalmente para ir guardando los títulos
let librosLeidos = [];

// 2. Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo); // El método .push() añade el elemento al final del arreglo
    console.log(`✅ Se ha agregado a tu lista: "${titulo}"`);
}

// 3. Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    // Ponemos una validación por si la lista está vacía
    if (librosLeidos.length === 0) {
        console.log("📚 Aún no tienes libros en tu lista de lectura.");
    } else {
        console.log("\n📚 Mi Biblioteca Personal:");
        // Recorremos el arreglo con un ciclo for para imprimir cada libro enumerado
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// ==========================================
// EJECUCIÓN Y PRUEBAS DEL SISTEMA
// ==========================================

console.log("--- Iniciando Sistema de Seguimiento ---\n");

// Llamamos a la función agregarLibro varias veces con diferentes títulos
agregarLibro("Principios de Anatomía y Fisiología - Tortora");
agregarLibro("Análisis de Circuitos en Ingeniería");
agregarLibro("Química: La Ciencia Central");

// Finalmente, llamamos a la función mostrar para ver el resultado completo
mostrarLibrosLeidos();