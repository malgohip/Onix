let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideInterval;

// Función para mostrar la slide actual
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    } else {
        slideIndex = n;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Función para cambiar automáticamente las slides
function autoSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

// Inicializa la presentación automática
function startAutoSlide() {
    slideInterval = setInterval(autoSlides, 5000); // Cada 5 segundos
}

// Detiene la presentación automática
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Cambia manualmente a una slide específica
function currentSlide(n) {
    stopAutoSlide();  // Detener la automática al cambiar manualmente
    showSlides(n);
    startAutoSlide(); // Reiniciar la automática después del cambio manual
}

// Cambia manualmente a la siguiente o anterior slide
function plusSlides(n) {
    stopAutoSlide(); // Detener la automática al cambiar manualmente
    showSlides(slideIndex + n);
    startAutoSlide(); // Reiniciar la automática después del cambio manual
}

// Inicia el slideshow en el primer slide
window.onload = function() {
    showSlides(1);
    startAutoSlide(); // Inicia la rotación automática
};
