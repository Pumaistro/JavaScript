// ==========================================
// PROYECTO: Crear objeto a partir de un Libro
// ==========================================

// Definimos el objeto 'libro' con sus propiedades y métodos
const libro = {
    // Propiedades básicas
    titulo: "Principios de Anatomía y Fisiología",
    autor: "Gerard J. Tortora",
    anio: 2018,
    estado: "disponible",
    
    // Propiedad opcional: Un arreglo para guardar los capítulos
    capitulos: [], 

    // Método principal requerido por el ejercicio
    describirLibro: function() {
        console.log(`Libro titulado '${this.titulo}', escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    // ==========================================
    // MÉTODOS OPCIONALES (Manipulación de Capítulos)
    // ==========================================
    
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`➕ Capítulo agregado: "${capitulo}"`);
    },

    eliminarCapitulo: function(capitulo) {
        // Buscamos en qué posición (índice) está el capítulo
        const indice = this.capitulos.indexOf(capitulo);
        
        // Si el índice es diferente a -1, significa que sí lo encontró
        if (indice !== -1) {
            this.capitulos.splice(indice, 1); // Lo borramos del arreglo
            console.log(`🗑️ Capítulo eliminado: "${capitulo}"`);
        } else {
            console.log(`⚠️ El capítulo "${capitulo}" no existe en este libro.`);
        }
    }
};

// ==========================================
// PRUEBAS DE FUNCIONAMIENTO (La consola)
// ==========================================

console.log("--- Imprimiendo Información Básica ---");
libro.describirLibro();

console.log("\n--- Agregando Capítulos ---");
libro.agregarCapitulo("El sistema cardiovascular");
libro.agregarCapitulo("El sistema respiratorio");
libro.agregarCapitulo("El sistema digestivo");

console.log("\nLista de capítulos actual:", libro.capitulos);

console.log("\n--- Eliminando un Capítulo ---");
libro.eliminarCapitulo("El sistema respiratorio");

console.log("\nLista de capítulos final:", libro.capitulos);