import { login } from './auth/auth.js';

// Esperamos a que la página cargue totalmente
document.addEventListener('DOMContentLoaded', () => {
    
    // Localizamos el formulario de inicio de sesión por su ID
    const loginForm = document.getElementById('login-form');

    // 1. LÓGICA DE AUTENTICACIÓN (LOGIN)
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await login(email, password);
        });
    }

    // 2. LÓGICA DE CONTACTO (FASE 3: HUMANIZACIÓN)
    const contactOverlay = document.getElementById('contact-overlay');
    const btnOpenContact = document.getElementById('btn-open-contact');
    const btnCloseContact = document.getElementById('btn-close-contact');
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    // Función de control de la cápsula
    const toggleContact = (state) => {
        if (state) {
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo al estar abierto
        } else {
            contactOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restaura el scroll
        }
    };

    // Vinculación del disparador del Navbar (Homologado)
    btnOpenContact?.addEventListener('click', () => toggleContact(true));
    btnContactFab?.addEventListener('click', () => toggleContact(true)); // Mantenemos soporte por si existe el ID

    btnCloseContact?.addEventListener('click', () => toggleContact(false));

    // Envío de Datos con Destinatario Real
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btnSend = document.getElementById('btn-send-contact');
        const originalText = btnSend.innerText;
        
        btnSend.disabled = true;
        btnSend.innerText = "ENVIANDO...";
        // (Clase 'sending-state' eliminada por ser código huérfano)

        const formData = {
            destinatario: "contacto@miempresacrece.com.mx", // Conexión real solicitada
            nombre: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            interes: document.getElementById('contact-interest').value,
            mensaje: document.getElementById('contact-message').value,
            contexto: `Solicitud desde: ${window.location.pathname}`
        };

        // Trazabilidad: Usamos tu URL de Apps Script existente para el envío
        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwApwF3Ve0SwUcvu8ZjsiiucnffURI25zSiE9ldrdmP_a9a7mBtn9HE_sfk99IY-Rzh/exec";

        try {
            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(formData)
            });

            contactStatus.innerText = "✅ Mensaje enviado. Nos contactaremos pronto.";
            contactStatus.style.color = "#2e7d32";
            contactForm.reset();
            
            setTimeout(() => {
                toggleContact(false);
                contactStatus.innerText = "";
            }, 3000);

        } catch (error) {
            contactStatus.innerText = "⚠️ Error de conexión. Intenta de nuevo.";
            contactStatus.style.color = "#c62828";
        } finally {
            btnSend.disabled = false;
            btnSend.innerText = originalText;
        }
    })});