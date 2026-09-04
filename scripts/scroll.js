// scripts/scroll.js

export function initScrollAnimations() {
    // Verificamos que la librería haya cargado correctamente
    if (typeof ScrollReveal === 'undefined') return;

    // 1. Configuración base para todas las animaciones
    const sr = ScrollReveal({
        distance: '40px', 
        duration: 800,    
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', 
        opacity: 0,       
        origin: 'bottom', 
        reset: true       // ¡EL CAMBIO MÁGICO ESTÁ AQUÍ! Se animará siempre.
    });

    // 2. Animamos las listas de precios (Aparecen una tras otra)
    sr.reveal('.price-lists img', {
        interval: 200 
    });

    // 3. Animamos el mosaico de cafés (El EFECTO CASCADA)
    sr.reveal('.coffee-grid img', {
        interval: 150 
    });

    // 4. Animamos los botones (Si lo usas en el index.html)
    sr.reveal('.link-btn', {
        interval: 100
    });
    
    // 5. Animamos los títulos 
    sr.reveal('h2, h3', {
        distance: '20px',
        duration: 1000
    });
}