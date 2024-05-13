

document.getElementById("formularioCita").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value; // Agregar esta línea para obtener el email
    var horaSeleccionada = document.getElementById("hora").value;
    var contenedorMensaje = document.getElementById("contenedorMensaje");
    var textoMensaje = document.getElementById("textoMensaje");
    var imagenAsesor = document.getElementById("imagenAsesor");
    var descripcionAsesor = document.getElementById("descripcionAsesor");
    
    // Lógica para determinar el asesor disponible según la hora seleccionada
    var personaDisponible = "";
    var descripcionExtra = "";
    if (horaSeleccionada >= "08:30" && horaSeleccionada <= "12:00") {
        personaDisponible = "Juan Pérez";
        imagenAsesor.src = "../img/hombre1.jpg";
        descripcionExtra = "Excelente asesor, él está capacitado para recomendarte la mejor estancia y al mejor precio para tus vacaciones.";
    } else if (horaSeleccionada >= "12:30" && horaSeleccionada <= "16:30") {
        personaDisponible = "Ana Rodriguez";
        imagenAsesor.src = "../img/mujer4.jpg";
        descripcionExtra = "Excelente asesora, ella está capacitada para recomendarte la mejor estancia y al mejor precio para tus vacaciones.";
    } else if (horaSeleccionada >= "17:00" && horaSeleccionada <= "18:30") {
        personaDisponible = "Lucas Maldonado";
        imagenAsesor.src = "../img/hombre3.jpg";
        descripcionExtra = "Excelente asesor, él está capacitado para recomendarte la mejor estancia y al mejor precio para tus vacaciones.";
    } else if (horaSeleccionada >= "19:00" && horaSeleccionada <= "20:30") {
        personaDisponible = "Lucas Maldonado";
        imagenAsesor.src = "../img/hombre3.jpg";
        descripcionExtra = "Excelente asesor, él está capacitado para recomendarte la mejor estancia y al mejor precio para tus vacaciones.";
    }
    
    // Construir el mensaje de éxito con los datos ingresados, incluyendo la fecha seleccionada
    textoMensaje.innerHTML = `${nombre} ${apellido} ha agendado una cita con éxito.<br>La cita está programada para el día ${document.getElementById("fecha").value} a las ${horaSeleccionada}.<br>La persona disponible es: ${personaDisponible} .`;
    
    // Mostrar el mensaje de cita agendada con la persona disponible
    contenedorMensaje.style.display = "block";
    descripcionAsesor.innerHTML = descripcionExtra;
    
    
    // Cerrar el mensaje cuando se haga clic en el botón de cerrar
    document.querySelector(".btn-cerrar").addEventListener("click", function() {
        contenedorMensaje.style.display = "none";
    });
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
    