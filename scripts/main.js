// scripts/main.js
import { initDarkMode } from './darkMode.js';
import { initWifi } from './wifi.js';
import { initLanguage } from './language.js'; // <-- Agregamos esta línea

document.addEventListener('DOMContentLoaded', () => {
    
    initDarkMode();
    initWifi();
    initLanguage(); // <-- Inicializamos el módulo
    
});