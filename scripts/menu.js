export function initMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');

    if (!hamburgerBtn || !sideMenu) return;

    // Abrir/Cerrar menú al hacer clic en la hamburguesa
    hamburgerBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        
        // Cambiar el ícono de hamburguesa (bars) a una "X" (xmark)
        const icon = hamburgerBtn.querySelector('i');
        if (sideMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Cerrar el menú si el usuario hace scroll (Mejora de UX)
    window.addEventListener('scroll', () => {
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            hamburgerBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        }
    });
}