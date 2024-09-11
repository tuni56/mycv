document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('nav ul li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const sectionId = this.getAttribute('href'); // Obtener el ID de la sección
            const section = document.querySelector(sectionId);

            // Desplazamiento suave hacia la sección
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
