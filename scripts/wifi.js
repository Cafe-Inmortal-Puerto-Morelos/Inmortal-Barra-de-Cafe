// scripts/wifi.js

export function initWifi() {
    const wifiBtn = document.getElementById('wifi-btn');

    // Verificamos que el botón exista en el HTML para evitar errores
    if (wifiBtn) {
        wifiBtn.addEventListener('click', (evento) => {
            // Evitamos que el href="#" recargue o mueva la página hacia arriba
            evento.preventDefault(); 

            // Datos de prueba (los cambias cuando el cliente te los dé)
            const networkName = "INMORTAL_CAFE";
            const password = "PasswordDeLaCafeteria"; 
            
            // Lógica para copiar al portapapeles
            navigator.clipboard.writeText(password).then(() => {
                alert(`¡Contraseña copiada!\n\nRed: ${networkName}\nVe a tus ajustes de Wi-Fi y pega la contraseña.`);
            }).catch(err => {
                // Respaldo por si el celular no permite copiar automáticamente
                alert(`Red: ${networkName}\nContraseña: ${password}`); 
            });
        });
    }
}