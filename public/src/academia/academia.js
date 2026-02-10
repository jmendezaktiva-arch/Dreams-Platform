import { auth, db } from '../shared/firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const workbookForm = document.getElementById('workbook-form');
    const statusMessage = document.getElementById('status-message');

    if (workbookForm) {
        workbookForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const respuesta = document.getElementById('pregunta-1').value;
            
            statusMessage.innerText = "⏳ Sincronizando con tu cuaderno...";
            statusMessage.style.color = "#666";

            const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwApwF3Ve0SwUcvu8ZjsiiucnffURI25zSiE9ldrdmP_a9a7mBtn9HE_sfk99IY-Rzh/exec";

            try {
                const response = await fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Permite enviar datos de forma segura
                    body: JSON.stringify({
                        email: auth.currentUser ? auth.currentUser.email : "Usuario Anónimo",
                        respuesta: respuesta
                    })
                });

                statusMessage.innerText = "✅ ¡Progreso guardado en Google Sheets!";
                statusMessage.style.color = "#2e7d32";
                document.getElementById('pregunta-1').value = ""; // Limpiamos para el siguiente ejercicio

            } catch (error) {
                statusMessage.innerText = "❌ Error al guardar. Revisa tu conexión.";
                statusMessage.style.color = "#d32f2f";
                console.error("Error de sincronización:", error);
            }
        });
    }
});