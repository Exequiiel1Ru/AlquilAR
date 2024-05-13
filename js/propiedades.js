// JavaScript para el slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Agregar evento de escucha para las teclas de flecha izquierda y derecha
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    plusSlides(-1); // Flecha izquierda
  } else if (event.key === 'ArrowRight') {
    plusSlides(1); // Flecha derecha
  }
});



// JavaScript para el slideshow con la clase 'mi-experiencia'
var miExperienciaIndex = 0; // Iniciar en 0 para que empiece con el primer elemento
var miExperienciaSlides = document.getElementsByClassName("mi-experiencia");
var miExperienciaInterval;

// Función para iniciar el intervalo del slideshow
function startMiExperienciaSlideshow() {
  miExperienciaInterval = setInterval(function() {
    miExperienciaIndex++;
    if (miExperienciaIndex >= miExperienciaSlides.length) {
      miExperienciaIndex = 0; // Volver al primer slide al llegar al último
    }
    showMiExperienciaSlides(miExperienciaIndex);
  }, 4000); // Cambiar de slide cada 4 segundos
}

// Función para detener el intervalo del slideshow
function stopMiExperienciaSlideshow() {
  clearInterval(miExperienciaInterval);
}

// Función para mostrar un slide específico
function showMiExperienciaSlides(n) {
  var i;
  // Ocultar todos los slides
  for (i = 0; i < miExperienciaSlides.length; i++) {
    miExperienciaSlides[i].style.display = "none";
  }
  // Mostrar el slide especificado
  miExperienciaSlides[n].style.display = "block";
}

// Iniciar el slideshow al cargar la página
startMiExperienciaSlideshow();

// Agregar evento de escucha para las teclas de flecha izquierda y derecha para el slideshow con la clase 'mi-experiencia'
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    plusMiExperienciaSlides(-1); // Flecha izquierda
  } else if (event.key === 'ArrowRight') {
    plusMiExperienciaSlides(1); // Flecha derecha
  }
});

// Función para avanzar o retroceder manualmente los slides
function plusMiExperienciaSlides(n) {
  stopMiExperienciaSlideshow(); // Detener el intervalo mientras se hace la navegación manual
  miExperienciaIndex += n;
  if (miExperienciaIndex >= miExperienciaSlides.length) {
    miExperienciaIndex = 0; // Volver al primer slide al llegar al último
  } else if (miExperienciaIndex < 0) {
    miExperienciaIndex = miExperienciaSlides.length - 1; // Ir al último slide al retroceder desde el primero
  }
  showMiExperienciaSlides(miExperienciaIndex);
  startMiExperienciaSlideshow(); // Reiniciar el intervalo después de la navegación manual
}



///////////////////////////////////////////////////////////////preguntas frecuentes/////////////////////
 // JavaScript
 document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const title = item.querySelector('.faq-title');
      const content = item.querySelector('.faq-content');

      title.addEventListener('click', () => {
          item.classList.toggle('active'); // Agrega o quita la clase 'active' al elemento

          // Si la clase 'active' está presente, muestra el contenido; de lo contrario, lo oculta
          if (item.classList.contains('active')) {
              content.style.maxHeight = content.scrollHeight + "px"; // Establece la altura máxima para mostrar completamente el contenido
          } else {
              content.style.maxHeight = "0"; // Oculta el contenido
          }
      });
  });
});

