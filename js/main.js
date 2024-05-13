const images = [
    "../img/carilo1.jpg",
    "../img/mardelplata1.jpg",
    "../img/mardelaspampas1.jpg",
    "../img/pinamar1.jpg"
    
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fadeIn(document.getElementById("img1"), images[currentImageIndex]);
    fadeIn(document.getElementById("img2"), images[(currentImageIndex + 1) % images.length]);
    fadeIn(document.getElementById("img3"), images[(currentImageIndex + 2) % images.length]);
    fadeIn(document.getElementById("img4"), images[(currentImageIndex + 3) % images.length]);

}

function fadeIn(element, imageUrl) {
    const tempImage = new Image();
    tempImage.onload = function() {
        element.src = imageUrl;
        element.style.opacity = 0;
        let opacity = 0;
        const fadeInterval = setInterval(function() {
            opacity += 0.05;
            element.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeInterval);
        }, 50);
    };
    tempImage.src = imageUrl;
}

setInterval(changeImage, 5000);

/////////////////////////////index///////////////////

function ampliarImagen1(imagen1) {
    // Obtiene la imagen agrandada
    var imagenAmpliada = document.querySelector('.ampliada img');
    // Establece la fuente de la imagen agrandada como la fuente de la imagen clicada
    imagenAmpliada.src = imagen1.src;
    // Muestra la imagen agrandada
    document.querySelector('.ampliada-container').style.display = 'block';

    // Agrega un event listener para cerrar la imagen cuando se presiona "Esc"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            cerrarImagen1();
        }
    });
}

function cerrarImagen1() {
    // Oculta la imagen agrandada
    document.querySelector('.ampliada-container').style.display = 'none';

    // Elimina el event listener de la tecla "Esc" cuando se cierra la imagen
    document.removeEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            cerrarImagen1();
        }
    });
}



/////////////////////////////// CONSULTAS.HTML/////////////////////////////////////////////////////////////////////////////////

 // Función para validar los campos del formulario antes de enviarlo
 function validarCampos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var categoria = document.getElementById("categoria").value;
    var comentarios = document.getElementById("comentarios").value;

    if (!nombre || !apellido || !email || !fecha || !hora || !categoria || !comentarios) {
        alert("Por favor, complete todos los campos obligatorios: Nombre, Apellido, Fecha, Hora y Motivo.");
    } else {
        // Si todos los campos están completos, mostrar el mensaje de éxito
        mostrarMensajeExito();
    }
}

// Función para mostrar el mensaje de éxito después de enviar el formulario
function mostrarMensajeExito() {
    var contenedorMensaje = document.getElementById('contenedorMensaje');
    var textoMensaje = document.getElementById('textoMensaje');
    var imagenAsesor = document.getElementById('imagenAsesor');
    var descripcionAsesor = document.getElementById('descripcionAsesor');

    // Construir el mensaje de éxito con los datos ingresados, incluyendo la fecha seleccionada
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var horaSeleccionada = document.getElementById("hora").value;
    var fechaSeleccionada = document.getElementById("fecha").value;
    var personaDisponible = obtenerAsesorDisponible(horaSeleccionada);
    var descripcionExtra = obtenerDescripcionAsesor(personaDisponible);

    textoMensaje.innerHTML = `${nombre} ${apellido} ha agendado una cita con éxito.<br>La cita está programada para el día ${fechaSeleccionada} a las ${horaSeleccionada}.<br>La persona disponible es: ${personaDisponible}.`;
    contenedorMensaje.style.display = 'block';
    descripcionAsesor.textContent = descripcionExtra;
    imagenAsesor.src = obtenerImagenAsesor(personaDisponible);

    // Restablecer el formulario después de enviarlo con éxito
    resetearFormulario();
}

// Función para determinar el asesor disponible según la hora seleccionada
function obtenerAsesorDisponible(horaSeleccionada) {
    if (horaSeleccionada >= "08:30" && horaSeleccionada <= "12:00") {
        return "Juan Pérez";
    } else if (horaSeleccionada >= "12:30" && horaSeleccionada <= "16:30") {
        return "Ana Rodríguez";
    } else if (horaSeleccionada >= "17:00" && horaSeleccionada <= "18:30") {
        return "Lucas Maldonado";
    } else if (horaSeleccionada >= "19:00" && horaSeleccionada <= "20:30") {
        return "Lucas Maldonado";
    }
}

// Función para obtener la descripción del asesor
function obtenerDescripcionAsesor(asesor) {
    return `Excelente asesor, ${asesor} está capacitado para recomendarte la mejor estancia y al mejor precio para tus vacaciones.`;
}

// Función para obtener la imagen del asesor
function obtenerImagenAsesor(asesor) {
    if (asesor === "Juan Pérez") {
        return "../img/hombre1.jpg";
    } else if (asesor === "Ana Rodríguez") {
        return "../img/mujer4.jpg";
    } else if (asesor === "Lucas Maldonado") {
        return "../img/hombre3.jpg";
    }
}

// Definir la función para resetear el formulario
function resetearFormulario() {
    document.getElementById('formularioCita').reset();
}

// Evento para cerrar el mensaje al hacer clic en el botón de cerrar
document.querySelector(".btn-cerrar").addEventListener("click", function() {
    var contenedorMensaje = document.getElementById("contenedorMensaje");
    contenedorMensaje.style.display = "none";
});

// Evento para enviar el formulario al hacer clic en el botón "Agendar Cita"
document.getElementById("formularioCita").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    // Validar campos y mostrar mensaje de éxito si todo está completo
    validarCampos();
});







    // Cerrar el mensaje cuando se haga clic en el botón de cerrar
    document.querySelector(".btn-cerrar").addEventListener("click", function() {
        contenedorMensaje.style.display = "none";
    });
    
    
    // Evento para los botones "Quiero recibir más información"
    var btnsRecibirInformacion = document.querySelectorAll(".btn-recibir-informacion");
    btnsRecibirInformacion.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var contenedorMensaje = document.getElementById("contenedorMensaje");
            var textoMensaje = document.getElementById("textoMensaje");
            var imagenAsesor = document.getElementById("imagenAsesor");
            var descripcionAsesor = document.getElementById("descripcionAsesor");
            var email = prompt("Por favor, ingrese su dirección de correo electrónico para recibir más información:");
    
            // Verificar si se ingresó un email
            if (email !== null && email !== "") {
                // Construir el mensaje de éxito con el email ingresado
                textoMensaje.innerHTML = `Gracias por tu interés. Te enviaremos más información a: ${email}`;
    
                // Mostrar el mensaje de éxito
                contenedorMensaje.style.display = "block";
                imagenAsesor.style.display = "none";
                descripcionAsesor.style.display = "none";
    
                // Cerrar el mensaje cuando se haga clic en el botón de cerrar
    document.querySelector(".btn-cerrar").addEventListener("click", function() {
        contenedorMensaje.style.display = "none";
    });
    
            }
        });
    });
    


   
    
////////////////////////////////////////reservas.html/////////////////////////////////////////////////////

document.getElementById('boton-pagar').addEventListener('click', function() {
    const mensajePagoExitoso = document.getElementById('mensaje-reserva');
    mensajePagoExitoso.innerText = '¡Su pago se ha realizado con éxito!';
    mensajePagoExitoso.classList.remove('reservado');
    mensajePagoExitoso.classList.add('disponible');
});

// Obtener el modal
var modal = document.getElementById("myModal");
var overlay = document.getElementById("overlay");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abrir el modal y mostrar el overlay
document.getElementById('boton-pagar').addEventListener('click', function() {
    modal.style.display = "block";
    overlay.style.display = "block";
});

// Cuando el usuario hace clic en <span> (x) o fuera del modal, cerrar el modal y ocultar el overlay
span.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == overlay) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
};

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function getRandomAvailability(numDays) {
    const availability = [];
    for (let i = 0; i < numDays; i++) {
        availability.push(Math.random() < 0.5 ? 0 : 1); // 0 para disponible, 1 para reservado
    }
    return availability;
}

function crearCalendario(destino, desde, hasta) {
    const calendario = document.getElementById(`calendario-${destino.toLowerCase().replace(/\s/g, '-')}`);
    let html = '';
    let disponible = true;

    const desdeDate = new Date(desde);
    const hastaDate = new Date(hasta);
    const numDays = (hastaDate - desdeDate) / (1000 * 60 * 60 * 24); // Número de días en el rango

    const disponibilidadAleatoria = getRandomAvailability(numDays);

    // Generar el HTML del calendario basado en la disponibilidad aleatoria
    html += '<div class="fila-calendario">';
    for (let i = 0; i < numDays; i++) {
        const fecha = new Date(desdeDate);
        fecha.setDate(fecha.getDate() + i);
        const diaSemana = diasSemana[fecha.getDay()];
        html += `<div class="dia-calendario">${diaSemana}</div>`;
        const estado = disponibilidadAleatoria[i] === 0 ? 'disponible' : 'reservado';
        html += `<div class="dia-calendario ${estado}">${estado}</div>`;
    }
    html += '</div>';

    calendario.innerHTML = html;

    return disponible;
}

/////////////////// REDERICCIONAMIENTO
document.getElementById('boton-pagar').addEventListener('click', function() {
    const mensajePagoExitoso = document.getElementById('mensaje-reserva');
    mensajePagoExitoso.innerText = '¡Su pago se ha realizado con éxito!';
    mensajePagoExitoso.classList.remove('reservado');
    mensajePagoExitoso.classList.add('disponible');

    // Redireccionar al usuario después de 3 segundos
    setTimeout(function() {
        window.location.href = '../index.html'; // URL del sitio web al que deseas redirigir
    }, 3000); // 3000 milisegundos = 3 segundos
});

document.getElementById('selector-destino').addEventListener('change', function() {
    const selectedDestination = this.value;
    const allDestinations = document.querySelectorAll('.destino');
    allDestinations.forEach(destino => {
        if (destino.id === `destino-${selectedDestination.toLowerCase().replace(/\s/g, '-').replace(/[áéíóú]/ig, "")}`) {
            destino.style.display = 'block';
        } else {
            destino.style.display = 'none';
        }
    });
});

function verificarDisponibilidad(destino, desde, hasta) {
    const disponible = crearCalendario(destino, desde, hasta);
    const mensaje = document.getElementById(`mensaje-reserva`);
    if (disponible) {
        mostrarFormularioPago();
        mensaje.innerText = `¡Las fechas seleccionadas para ${destino} están disponibles para reserva!`;
        mensaje.classList.remove('reservado');
        mensaje.classList.add('disponible');
    } else {
        mensaje.innerText = `Lo sentimos, algunas fechas seleccionadas para ${destino} ya están reservadas.`;
        mensaje.classList.remove('disponible');
        mensaje.classList.add('reservado');
    }
}

function mostrarFormularioPago() {
    const formularioPago = document.getElementById('formulario-pago');
    formularioPago.style.display = 'block';
}

document.getElementById('boton-verificar-mar-del-plata').addEventListener('click', function() {
    const desde = document.getElementById('selector-fecha-desde-mar-del-plata').value;
    const hasta = document.getElementById('selector-fecha-hasta-mar-del-plata').value;
    verificarDisponibilidad('Mar del Plata', desde, hasta);
});

document.getElementById('boton-verificar-pinamar').addEventListener('click', function() {
    const desde = document.getElementById('selector-fecha-desde-pinamar').value;
    const hasta = document.getElementById('selector-fecha-hasta-pinamar').value;
    verificarDisponibilidad('Pinamar', desde, hasta);
});

document.getElementById('boton-verificar-carilo').addEventListener('click', function() {
    const desde = document.getElementById('selector-fecha-desde-carilo').value;
    const hasta = document.getElementById('selector-fecha-hasta-carilo').value;
    verificarDisponibilidad('Carilo', desde, hasta);
});

document.getElementById('boton-verificar-mar-de-las-pampas').addEventListener('click', function() {
    const desde = document.getElementById('selector-fecha-desde-mar-de-las-pampas').value;
    const hasta = document.getElementById('selector-fecha-hasta-mar-de-las-pampas').value;
    verificarDisponibilidad('Mar de las Pampas', desde, hasta);
});

const opcionesFlatpickr = {
    dateFormat: "d-m-Y",
    minDate: "today",
    locale: {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
        },
        months: {
            shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            longhand: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        }
    }
};

flatpickr("#selector-fecha-desde-mar-del-plata", opcionesFlatpickr);
flatpickr("#selector-fecha-hasta-mar-del-plata", opcionesFlatpickr);
flatpickr("#selector-fecha-desde-pinamar", opcionesFlatpickr);
flatpickr("#selector-fecha-hasta-pinamar", opcionesFlatpickr);
flatpickr("#selector-fecha-desde-carilo", opcionesFlatpickr);
flatpickr("#selector-fecha-hasta-carilo", opcionesFlatpickr);
flatpickr("#selector-fecha-desde-mar-de-las-pampas", opcionesFlatpickr);
flatpickr("#selector-fecha-hasta-mar-de-las-pampas", opcionesFlatpickr);

///////////////////////////////////////////////////SOLICITAR////////////////////////////////////////////////
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
                    <img src="../img/mardelplata5.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelplata6.jpg" alt="Mar del Plata 2" onclick="ampliarImagen('../img/mardelplata4.jpg')">
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
                    <img src="../img/carilo5.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/carilo6.jpg" alt="Carilo 2" onclick="ampliarImagen('../img/carilo4.jpg')">
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
                    <img src="../img/pinamar5.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/pinamar6.jpg" alt="Pinamar 2" onclick="ampliarImagen('../img/pinamar4.jpg')">
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
                    <img src="../img/mardelaspampas3.jpg" alt="Mar de las Pampas 2" onclick="ampliarImagen('../img/mardelaspampas3.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas4.jpg" alt="Mar de las Pampas 2" onclick="ampliarImagen('../img/mardelaspampas4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas5.jpg" alt="Mar de las Pampas 2" onclick="ampliarImagen('../img/mardelaspampas4.jpg')">
                </div>
                <div class="imagen">
                    <img src="../img/mardelaspampas6.jpg" alt="Mar de las Pampas 2" onclick="ampliarImagen('../img/mardelaspampas4.jpg')">
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


// Funciones para recorrer las imágenes con el teclado
document.addEventListener("keydown", function(event) {
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
});


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

// Función para manejar el evento de clic en el botón de "Pagar"
function pagarExitoso() {
// Mensaje de éxito
alert("Usted ha pagado con éxito la estadía en el alquiler.");

// Pide al usuario que ingrese su correo electrónico
var email = prompt("Por favor, ingrese su correo electrónico para la confirmación:");

// Verifica si se ingresó un correo electrónico
if (email) {
// Muestra un mensaje de confirmación y promete enviar un correo electrónico de confirmación
alert("Felicidades. A la brevedad le enviaremos un correo electrónico a " + email + " con la confirmación y todos los datos.");
 // Redirige al usuario a la página de inicio
 window.location.href = "../index.html";
}
}

// Asigna la función pagarExitoso al evento de clic del botón de "Pagar"
document.getElementById("formulario-pago").addEventListener("submit", function(event) {
event.preventDefault(); // Evita que el formulario se envíe
pagarExitoso(); // Llama a la función para manejar el pago exitoso
});


/////////////////////////////////////////// index  Mar del plata- Pinamar- carilo- mar de las pampas/////////////////////////////////////////
  



