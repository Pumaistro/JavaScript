// 1. Selección de elementos del DOM utilizando getElementById [cite: 1124]
const formulario = document.getElementById('formularioReseña');
const inputTitulo = document.getElementById('tituloLibro');
const inputComentario = document.getElementById('comentarioLibro');
const listaReseñas = document.getElementById('listaReseñas');

// 2. Inicializamos el arreglo recuperando datos del LocalStorage, o un arreglo vacío si no hay nada [cite: 638]
let biblioteca = JSON.parse(localStorage.getItem('misLibros')) || [];

// 3. Función para renderizar (dibujar) los elementos en el DOM
function actualizarDOM() {
    // Limpiamos el contenedor antes de dibujar para evitar duplicados [cite: 1144]
    listaReseñas.innerHTML = '';

    // Si no hay reseñas, mostramos un mensaje
    if (biblioteca.length === 0) {
        listaReseñas.innerHTML = '<p style="text-align:center; color:#888;">Aún no hay reseñas registradas.</p>';
        return;
    }

    // Iteramos sobre el arreglo de objetos para crear los elementos HTML [cite: 186, 187, 188]
    for (let i = 0; i < biblioteca.length; i++) {
        const reseña = biblioteca[i];

        // Creación del nodo principal de la tarjeta [cite: 1154]
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-reseña');

        // Insertamos contenido dinámico controlando la estructura [cite: 1141]
        tarjeta.innerHTML = `
            <div class="tarjeta-header">
                <span class="libro-titulo"><i class="fas fa-book"></i> ${reseña.titulo}</span>
                <span class="fecha">${reseña.fecha}</span>
            </div>
            <p class="comentario-texto">${reseña.comentario}</p>
        `;

        // Creamos el botón de eliminar y le asignamos su evento
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.innerHTML = '<i class="fas fa-trash"></i> Eliminar';
        
        btnEliminar.addEventListener('click', function() {
            eliminarReseña(reseña.id);
        });

        // Ensamblamos la tarjeta [cite: 1158]
        tarjeta.appendChild(btnEliminar);
        listaReseñas.appendChild(tarjeta);
    }
}

// 4. Escuchamos el evento de envío del formulario [cite: 1210]
formulario.addEventListener('submit', function(event) {
    // Prevenimos que la página se recargue por defecto [cite: 1171]
    event.preventDefault();

    // Creamos un nuevo objeto con la información [cite: 1010, 1011, 1012]
    const nuevaReseña = {
        id: Date.now(), // Identificador único basado en el tiempo
        titulo: inputTitulo.value.trim(),
        comentario: inputComentario.value.trim(),
        fecha: new Date().toLocaleString() // Obtenemos fecha y hora exactas
    };

    // Añadimos el objeto al final del arreglo [cite: 163]
    biblioteca.push(nuevaReseña);

    // Guardamos el arreglo serializado como texto en el LocalStorage [cite: 608, 636]
    localStorage.setItem('misLibros', JSON.stringify(biblioteca));

    // Limpiamos los campos del formulario
    formulario.reset();

    // Actualizamos la pantalla
    actualizarDOM();
});

// 5. Función para eliminar un elemento usando su ID
function eliminarReseña(idParaEliminar) {
    // Filtramos el arreglo para conservar solo los que NO coincidan con el ID a eliminar
    biblioteca = biblioteca.filter(reseña => reseña.id !== idParaEliminar);
    
    // Sobrescribimos el LocalStorage con el nuevo arreglo actualizado [cite: 628]
    localStorage.setItem('misLibros', JSON.stringify(biblioteca));
    
    // Volvemos a dibujar el DOM
    actualizarDOM();
}

// 6. Al cargar la página, ejecutamos la función por primera vez para mostrar datos guardados
actualizarDOM();