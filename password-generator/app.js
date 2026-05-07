// ==========================================
// SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================
const passwordDisplay = document.getElementById('passwordDisplay');
const btnCopiar = document.getElementById('btnCopiar');
const sliderLongitud = document.getElementById('sliderLongitud');
const longitudValor = document.getElementById('longitudValor');
const btnGenerar = document.getElementById('btnGenerar');

const chkMayusculas = document.getElementById('chkMayusculas');
const chkMinusculas = document.getElementById('chkMinusculas');
const chkNumeros = document.getElementById('chkNumeros');
const chkSimbolos = document.getElementById('chkSimbolos');

const fuerzaTexto = document.getElementById('fuerzaTexto');
const barras = document.querySelectorAll('.barra'); // Selecciona las 4 barras

// ==========================================
// DICCIONARIOS DE CARACTERES
// ==========================================
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";

// ==========================================
// EVENTOS
// ==========================================

// 1. Actualizar el número del slider en tiempo real
sliderLongitud.addEventListener('input', (e) => {
    longitudValor.textContent = e.target.value;
});

// 2. Generar contraseña al hacer clic en el botón
btnGenerar.addEventListener('click', generarPassword);

// 3. Copiar al portapapeles
btnCopiar.addEventListener('click', () => {
    if(passwordDisplay.textContent === "PTx1f5DaFX" || passwordDisplay.textContent === "") return;
    
    // API moderna para copiar texto
    navigator.clipboard.writeText(passwordDisplay.textContent);
    
    // Pequeño feedback visual
    btnCopiar.innerHTML = '<i class="fas fa-check"></i>';
    setTimeout(() => {
        btnCopiar.innerHTML = '<i class="far fa-copy"></i>';
    }, 2000);
});

// ==========================================
// FUNCIONES PRINCIPALES
// ==========================================

function generarPassword() {
    let caracteresPermitidos = "";
    let passwordFinal = "";
    let opcionesMarcadas = 0;

    // Construimos la "piscina" de caracteres permitidos según los checkboxes
    if (chkMayusculas.checked) {
        caracteresPermitidos += letrasMayusculas;
        opcionesMarcadas++;
    }
    if (chkMinusculas.checked) {
        caracteresPermitidos += letrasMinusculas;
        opcionesMarcadas++;
    }
    if (chkNumeros.checked) {
        caracteresPermitidos += numeros;
        opcionesMarcadas++;
    }
    if (chkSimbolos.checked) {
        caracteresPermitidos += simbolos;
        opcionesMarcadas++;
    }

    // Validación: Si no marcó nada, no podemos generar nada
    if (caracteresPermitidos.length === 0) {
        passwordDisplay.textContent = "SELECCIONA UNA OPCIÓN";
        actualizarFuerza(0);
        return;
    }

    // Generamos la contraseña eligiendo letras al azar
    const longitud = parseInt(sliderLongitud.value);
    
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        passwordFinal += caracteresPermitidos[indiceAleatorio];
    }

    // Mostramos la contraseña en pantalla
    passwordDisplay.textContent = passwordFinal;
    passwordDisplay.style.color = "var(--text-white)"; // Reseteamos color por si hubo error antes

    // Calculamos y mostramos la fuerza
    actualizarFuerza(opcionesMarcadas, longitud);
}

function actualizarFuerza(opciones, longitud) {
    // Limpiamos las clases de todas las barras
    barras.forEach(barra => {
        barra.className = 'barra';
    });

    let fuerza = "WEAK";
    let claseColor = "activa-baja";
    let barrasLlenas = 1;

    // Lógica simple de fuerza basada en variedad de caracteres y longitud
    if (opciones === 0) {
        fuerzaTexto.textContent = "";
        return;
    } else if (opciones === 4 && longitud >= 12) {
        fuerza = "STRONG";
        claseColor = "activa-alta";
        barrasLlenas = 4;
    } else if (opciones >= 3 && longitud >= 10) {
        fuerza = "MEDIUM";
        claseColor = "activa-media";
        barrasLlenas = 3;
    } else if (opciones >= 2) {
        fuerza = "WEAK";
        claseColor = "activa-baja";
        barrasLlenas = 2;
    } else {
        fuerza = "TOO WEAK!";
        claseColor = "activa-baja";
        barrasLlenas = 1;
    }

    // Actualizamos el texto
    fuerzaTexto.textContent = fuerza;

    // Pintamos las barras correspondientes
    for (let i = 0; i < barrasLlenas; i++) {
        barras[i].classList.add(claseColor);
    }
}