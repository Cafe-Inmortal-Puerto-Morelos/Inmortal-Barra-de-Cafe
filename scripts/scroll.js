// scripts/scroll.js

export function initScrollAnimations() {
    // Configuramos el observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento entra en la pantalla...
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Opcional: Dejamos de observarlo para que solo haga la animación una vez
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento ya es visible
    });

    // Buscamos todos los elementos que tengan la clase 'fade-up'
    const elementsToAnimate = document.querySelectorAll('.fade-up');
    
    // Le decimos al observador que vigile a cada uno de ellos
    elementsToAnimate.forEach(el => observer.observe(el));
}