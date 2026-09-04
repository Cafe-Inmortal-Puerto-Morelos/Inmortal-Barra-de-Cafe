// scripts/lightbox.js

export function initLightbox() {
    const zoomables = document.querySelectorAll('.zoomable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');

    // Si no estamos en la página de granel y no hay lightbox, detenemos la función
    if (!lightbox || !lightboxImg) return; 

    // Al hacer clic en una imagen de café (abrir)
    zoomables.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src; // Copiamos la ruta de la imagen exacta
            lightbox.classList.add('active'); // Mostramos la pantalla oscura
        });
    });

    // Cerrar al picar la X
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Cerrar si pican en cualquier lado del fondo oscuro (fuera de la imagen)
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
}