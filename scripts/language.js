// scripts/language.js

const translations = {
    es: {
        subtitle: "- BARRA DE CAFÉ -",
        menu: "Menú Digital",
        review: "Dejanos una reseña",
        wifi: "Conectarse al Wi-Fi",
        phone: "Escribenos por WhatsApp"

    },
    en: {
        subtitle: "- COFFEE BAR -",
        menu: "Digital Menu",
        review: "Leave a Review",
        wifi: "Connect to Wi-Fi",
        phone: "Send a WhatsApp Message"
    }
};

export function initLanguage() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    // Revisar si ya hay un idioma guardado, por defecto usamos 'es'
    let currentLang = localStorage.getItem('language') || 'es';
    
    // Aplicar el idioma inicial al cargar
    applyTranslations(currentLang);
    updateButtonText(currentLang);

    // Escuchar el click para cambiar de idioma
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // Alternar idioma
            currentLang = currentLang === 'es' ? 'en' : 'es';
            
            applyTranslations(currentLang);
            updateButtonText(currentLang);
            
            // Guardar preferencia
            localStorage.setItem('language', currentLang);
        });
    }

    // Función para inyectar los textos del diccionario
    function applyTranslations(lang) {
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    // Función para cambiar el texto del botón (Muestra el idioma al que vas a cambiar)
    function updateButtonText(lang) {
        langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    }
}