// custom.js - Animaciones y mejoras para la HV de Daniel Sanchez

// Reanimar barras de skills cada vez que se visita la pagina de skills
document.addEventListener('DOMContentLoaded', function () {

    // Observar cuando la pagina de skills es visible
    const skillsPage = document.querySelector('[data-page-no="2"]');

    function animateSkills() {
        const fills = document.querySelectorAll('.skill-fill');
        fills.forEach(function (fill) {
            // Reset y reanimar
            fill.style.animation = 'none';
            fill.offsetHeight; // reflow
            fill.style.animation = '';
        });
    }

    // Escuchar cambios de pagina del slider
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.target.classList.contains('selected') ||
                mutation.target.style.display !== 'none') {
                if (mutation.target.dataset.pageNo === '2') {
                    setTimeout(animateSkills, 100);
                }
            }
        });
    });

    if (skillsPage) {
        observer.observe(skillsPage, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    }

    // Tambien animar al cargar si ya esta en skills
    if (skillsPage && skillsPage.classList.contains('selected')) {
        animateSkills();
    }
});
