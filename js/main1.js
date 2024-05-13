function mostrarInformacion() {
    var destino = document.getElementById("destination-pagar").value;
    var infoTexto = document.getElementById("info-texto-pagar");
    var galeria = document.getElementById("galeria-pagar");

    // Mostrar la información adicional y la galería al seleccionar un destino
    var infoAdicional = document.getElementById("info-adicional-pagar");
    infoAdicional.classList.add("show");

    switch(destino) {
        case "Mar del Plata":
            infoTexto.innerText = "Mar del Plata es una ciudad ubicada en la costa atlántica de Argentina, conocida por sus hermosas playas y su animada vida nocturna.";
            galeria.innerHTML = `
                <div class="imagen">
                    <img src="../img/mardelplata1.jpg" alt="Mar del Plata 1" onclick="ampliarImagen('../img/mardelplata1.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata2.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata2.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata3.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata3.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata4.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata5.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata5.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata6.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata6.jpg')">
                </div>
            `;
            break;
        case "Carilo":
            infoTexto.innerText = "Cariló es una localidad balnearia del partido de Pinamar, en la provincia de Buenos Aires, Argentina. Se destaca por sus amplias playas y su bosque de pinos.";
            galeria.innerHTML = `
                <div class="imagen">
                    <img src="../img/carilo1.jpg" alt="Carilo 1" onclick="ampliarImagen('../img/carilo1.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo2.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo2.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo3.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo3.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo4.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo5.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo5.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo6.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo6.jpg')">
                </div>
            `;
            break;
        case "Pinamar":
            infoTexto.innerText = "Pinamar es una ciudad balnearia del sudeste de la provincia de Buenos Aires, Argentina. Es conocida por sus amplias playas, sus dunas y su arquitectura de estilo mediterráneo.";
            galeria.innerHTML = `
                <div class="imagen">
                    <img src="../img/pinamar1.jpg" alt="Pinamar 1" onclick="ampliarImagen('../img/pinamar1.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar2.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar2.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar3.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar3.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar4.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar5.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar5.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar6.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar6.jpg')">
                </div>
            `;
            break;
        case "Mar de las Pampas":
            infoTexto.innerText = "Mar de las Pampas es una localidad balnearia ubicada en el partido de Villa Gesell, en la provincia de Buenos Aires, Argentina. Es conocida por su tranquilidad, sus playas amplias y su bosque de pinos.";
            galeria.innerHTML = `
                <div class="imagen">
                    <img src="../img/mardelaspampas1.jpg" alt="Mar de las Pampas 1" onclick="ampliarImagen('../img/mardelaspampas1.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas2.jpg" alt="Mar de las Pampas 2" onclick="ampliarImagen('../img/mardelaspampas2.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas3.jpg" alt="Mar de las Pampas 3" onclick="ampliarImagen('../img/mardelaspampas3.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas4.jpg" alt="Mar de las Pampas 4" onclick="ampliarImagen('../img/mardelaspampas4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas5.jpg" alt="Mar de las Pampas 5" onclick="ampliarImagen('../img/mardelaspampas5.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas6.jpg" alt="Mar de las Pampas 6" onclick="ampliarImagen('../img/mardelaspampas6.jpg')">
                </div>
            `;
            break;
        default:
            infoTexto.innerText = "Seleccione un destino para ver la información adicional.";
            galeria.innerHTML = ""; // Limpiar la galería si no se selecciona ningún destino
            break;
    }
}
function abrirFormularioPago() {
    var formularioPago = document.getElementById("formulario-pago");
    var overlay = document.getElementById("overlay");

    formularioPago.style.display = "block";
    overlay.style.display = "block";
}

function cerrarFormularioPago() {
    var formularioPago = document.getElementById("formulario-pago");
    var overlay = document.getElementById("overlay");

    formularioPago.style.display = "none";
    overlay.style.display = "none";
}

function validarFormulario() {
    var adultos = document.getElementById("adults-pagar").value;
    var niños = document.getElementById("children-pagar").value;

    // Validar que haya al menos 1 adulto
    if (adultos < 1) {
        alert("Debe haber al menos 1 adulto");
        return false;
    }

    // Validar que la fecha de inicio sea anterior a la fecha de fin
    var startDate = new Date(document.getElementById("start-date-pagar").value);
    var endDate = new Date(document.getElementById("end-date-pagar").value);
    if (startDate >= endDate) {
        alert("La fecha de inicio debe ser anterior a la fecha de fin");
        return false;
    }

    // Validar que haya al menos 1 adulto si hay niños
    if (niños > 0 && adultos == 0) {
        alert("Debe haber al menos 1 adulto si hay niños");
        return false;
    }


    // Si pasa todas las validaciones, abrir el formulario de pago
    abrirFormularioPago();
    return false; // Evitar que el formulario se envíe
}

function ampliarImagen(src) {
    var overlayImagen = document.getElementById("overlay-imagen");
    var imagenAmpliada = document.getElementById("imagen-ampliada");

    imagenAmpliada.src = src;
    overlayImagen.classList.add("active");
}

function cerrarImagen() {
    var overlayImagen = document.getElementById("overlay-imagen");
    overlayImagen.classList.remove("active");
}



function mostrarFormularioPago() {
    var formularioPago = document.getElementById("formulario-pago");
    formularioPago.style.display = "block";
}

function cerrarFormularioPago() {
    var formularioPago = document.getElementById("formulario-pago");
    formularioPago.style.display = "none";
}



/////////////////////////////////aca

// Declarar e inicializar currentImageIndex
var currentImageIndex1 = 0;

// Array de imágenes
var images1 = [
"../img/mardelplata1.jpg",
"../img/mardelplata2.jpg",
"../img/mardelplata3.jpg",
"../img/mardelplata4.jpg",
"../img/mardelplata5.jpg",
"../img/mardelplata6.jpg",



"../img/mardelaspampas1.jpg",
"../img/mardelaspampas2.jpg",
"../img/mardelaspampas3.jpg",
"../img/mardelaspampas4.jpg",
"../img/mardelaspampas5.jpg",
"../img/mardelaspampas6.jpg",


"../img/carilo1.jpg",
"../img/carilo2.jpg",
"../img/carilo3.jpg",
"../img/carilo4.jpg",
"../img/carilo5.jpg",
"../img/carilo6.jpg",


"../img/pinamar1.jpg",
"../img/pinamar2.jpg",
"../img/pinamar3.jpg",
"../img/pinamar4.jpg",
"../img/pinamar5.jpg",
"../img/pinamar6.jpg",



];

// Variable para controlar si el modal de imágenes está abierto
var modalAbierto = false;

// Funciones para recorrer las imágenes con el teclado
document.addEventListener("keydown", function(event) {
    // Verificar si el modal está abierto antes de procesar las teclas
    if (modalAbierto) {
        if (event.key === "ArrowRight") {
            currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
            var nextImageSrc = images1[currentImageIndex1];
            ampliarImagen(nextImageSrc);
        } else if (event.key === "ArrowLeft") {
            currentImageIndex1 = (currentImageIndex1 - 1 + images1.length) % images1.length;
            var prevImageSrc = images1[currentImageIndex1];
            ampliarImagen(prevImageSrc);
        } else if (event.key === "Escape") {
            cerrarImagen();
        }
    }
});

// Función para ampliar una imagen
function ampliarImagen(src) {
    var overlayImagen = document.getElementById("overlay-imagen");
    var imagenAmpliada = document.getElementById("imagen-ampliada");

    imagenAmpliada.src = src;
    overlayImagen.classList.add("active");

    // Marcar el modal como abierto
    modalAbierto = true;
}

// Función para cerrar la imagen ampliada
function cerrarImagen() {
    var overlayImagen = document.getElementById("overlay-imagen");
    overlayImagen.classList.remove("active");

    // Marcar el modal como cerrado
    modalAbierto = false;
}

/////////////// hasta aca

// Función para calcular el monto total a abonar
function calcularMontoTotal() {
var adultos = parseInt(document.getElementById("adults-pagar").value);
var niños = parseInt(document.getElementById("children-pagar").value);
var startDate = new Date(document.getElementById("start-date-pagar").value);
var endDate = new Date(document.getElementById("end-date-pagar").value);
var dias = (endDate - startDate) / (1000 * 60 * 60 * 24); // Calcula la diferencia en días

// Calcula el monto total por persona
var montoPorPersona = 7000 * dias;

// Calcula el monto total teniendo en cuenta adultos y niños
var montoTotal = (7000 * adultos + 3500 * niños) * dias;

// Actualiza el texto del monto a abonar en el formulario de pago
document.getElementById("monto-pagar").innerText = "Usted a abonar: $" + montoTotal;
}

// Llama a la función calcularMontoTotal al cargar la página
window.onload = function() {
calcularMontoTotal();
};

// Llama a la función calcularMontoTotal cada vez que cambia algún campo relevante
document.getElementById("adults-pagar").addEventListener("change", calcularMontoTotal);
document.getElementById("children-pagar").addEventListener("change", calcularMontoTotal);
document.getElementById("start-date-pagar").addEventListener("change", calcularMontoTotal);
document.getElementById("end-date-pagar").addEventListener("change", calcularMontoTotal);



// Obtiene el formulario de pago
var formularioPago = document.getElementById("formulario-pago");

// Elimina todos los controladores de eventos 'submit' previamente asignados al formulario
formularioPago.removeEventListener("submit", pagarExitoso);

// Definición de la función pagarExitoso()
function pagarExitoso() {
    var email;

    // Pide al usuario que ingrese su correo electrónico
    email = prompt("¡Su pago se ha realizado con Éxito! Por favor, ingrese su correo electrónico  para la confirmación:");

    // Verifica si se ingresó un correo electrónico
    if (email === null) {
        // Si se cancela la entrada de correo electrónico, se sale de la función
        return;
    } else if (email === "") {
        // Si el campo de correo electrónico está vacío, se muestra un mensaje de error
        alert("Debe ingresar un correo electrónico para la confirmación.");
        return;
    } else if (email.includes("@")) {
        // Si el correo electrónico contiene "@", se muestra el mensaje de confirmación
        alert("Felicidades. A la brevedad le enviaremos un correo electrónico a " + email + " con la confirmación y todos los datos.");
        // Después de 6 segundos, se redirige automáticamente a la página de inicio
        setTimeout(function() {
            window.location.href = "../index.html";
        }, 2000);
        return;
    } else {
        // Si el correo electrónico no es válido, se muestra un mensaje de error
        alert("El correo electrónico ingresado no es válido.");
        return;
    }
}

// Asigna la función pagarExitoso al evento de clic del botón de "Pagar"
formularioPago.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
        pagarExitoso(); // Llama a la función para manejar el pago exitoso
    });


    
    // Definición de la función para cerrar el formulario de pago
    function cerrarFormularioPago() {
        var overlay = document.getElementById("overlay");
    
        formularioPago.style.display = "none";
        overlay.style.display = "none";
    
        // Recargar la página
        location.reload();
    }