// 1. Seleccionar los elementos del DOM que vamos a necesitar
const btnAgregar = document.getElementById('btnAgregar');
const comentarioInput = document.getElementById('comentarioInput');
const listaComentarios = document.getElementById('listaComentarios');

// 2. Agregar el evento 'click' al botón
btnAgregar.addEventListener('click', function() {
    
    // Obtenemos el texto y quitamos espacios en blanco a los lados
    const texto = comentarioInput.value.trim();

    // Validación básica: no permitir comentarios vacíos
    if (texto === "") {
        alert("Por favor, escribe un comentario antes de agregarlo.");
        return; // Detiene la ejecución de la función
    }

    // 3. Crear los elementos HTML dinámicamente
    // Contenedor del comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario-item');

    // Párrafo para el texto del comentario
    const textoComentario = document.createElement('p');
    textoComentario.textContent = texto;

    // Etiqueta para la fecha y hora (Opcional cumplido)
    const fechaHora = new Date().toLocaleString();
    const fechaElemento = document.createElement('small');
    fechaElemento.textContent = `Publicado el: ${fechaHora}`;
    fechaElemento.classList.add('fecha');

    // Botón para eliminar el comentario (Opcional cumplido)
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('btn-eliminar');
    
    // Le agregamos la lógica al botón de eliminar
    btnEliminar.addEventListener('click', function() {
        listaComentarios.removeChild(nuevoComentario);
    });

    // 4. Ensamblar todo (meter el texto, fecha y botón dentro de la caja del comentario)
    nuevoComentario.appendChild(textoComentario);
    nuevoComentario.appendChild(fechaElemento);
    nuevoComentario.appendChild(btnEliminar);

    // 5. Agregar el comentario completamente armado a la lista en la página web
    listaComentarios.appendChild(nuevoComentario);

    // 6. Limpiar el área de texto para el siguiente comentario
    comentarioInput.value = "";
});