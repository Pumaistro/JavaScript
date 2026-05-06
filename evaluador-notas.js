// ==========================================
// PROYECTO: Evaluador de Notas
// ==========================================

// 1. Declaramos la variable 'nota' y le asignamos un valor.
let nota = 85; 

// 2. Usamos una condición if para verificar si la nota es mayor que 0 (truthy)
if (nota > 0) {
    
    // Imprimimos la nota que obtuvo el alumno
    console.log("El alumno obtuvo una nota de: " + nota);

    // 3. Utilizamos operadores de comparación para determinar el rango
    if (nota >= 90) {
        console.log("Calificación: Excelente 🏆");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Calificación: Bien 👍");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Calificación: Suficiente 📚");
    } else {
        // Si es menor de 60
        console.log("Calificación: No aprueba ❌");
    }

} else {
    // Si la nota es 0 o un número negativo
    console.log("La nota es 0 o no es válida. El estudiante no aprueba.");
}