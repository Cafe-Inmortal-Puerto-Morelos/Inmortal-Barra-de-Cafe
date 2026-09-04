// scripts/main.js
import { initDarkMode } from './darkMode.js';
import { initWifi } from './wifi.js';
import { initLanguage } from './language.js'; // <-- Agregamos esta línea
import { initLightbox } from './lightbox.js';
import { initMenu } from './menu.js';
document.addEventListener('DOMContentLoaded', () => {
    
    initDarkMode();
    initWifi();
    initLanguage(); // <-- Inicializamos el módulo
    initLightbox();
    initMenu();
});