// darkMode.js
export function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Revisar si ya hay un tema guardado en el navegador
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema oscuro si estaba guardado, o si el sistema del usuario está en oscuro
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        updateIcon(true);
    }

    // Escuchar el click en el botón
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        updateIcon(isDark);
        
        // Guardar la elección del usuario
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Función para cambiar el ícono entre sol y luna
    function updateIcon(isDark) {
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}