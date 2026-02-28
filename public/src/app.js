// public/src/app.js

import { login } from './auth/auth.js';
import { db, auth, doc, setDoc, getDoc } from './shared/firebase-config.js';

// Esperamos a que la página cargue totalmente
document.addEventListener('DOMContentLoaded', () => {

    // TRACEABILIDAD: La resolución de rutas ahora es gestionada globalmente por DREAMS_CONFIG 
    // en env-config.js para evitar deuda técnica y asegurar la integridad de los activos.
    
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

    // 1. Declaración segura de elementos de contacto
    const btnContactFab = document.getElementById('btn-contact-fab'); 

    // 2. Escuchadores de eventos mediante delegación (Cubre botones individuales y clases .btn-contact-trigger)
    document.addEventListener('click', (e) => {
        // Detectamos si el clic fue en un botón de apertura (por ID o por Clase)
        const trigger = e.target.closest('.btn-contact-trigger') || 
                        e.target.closest('#btn-open-contact') || 
                        e.target.closest('#btn-contact-fab');
        
        if (trigger) {
            e.preventDefault();
            toggleContact(true);
        }

        // Detectamos si el clic fue en el botón de cierre
        if (e.target.closest('#btn-close-contact')) {
            toggleContact(false);
        }
    });
    // 3. Lógica de Envío de Formulario
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btnSend = document.getElementById('btn-send-contact');
        const originalText = btnSend.innerText;
        
        btnSend.disabled = true;
        btnSend.innerText = "ENVIANDO...";

        // Capturamos los valores con protección: si el campo no existe, enviamos un texto vacío
        const formData = {
            destinatario: "contacto@miempresacrece.com.mx",
            nombre: document.getElementById('contact-name')?.value || "No proporcionado",
            email: document.getElementById('contact-email')?.value || "Sin email",
            interes: document.getElementById('contact-interest')?.value || "General",
            mensaje: document.getElementById('contact-message')?.value || "Sin mensaje",
            contexto: `Solicitud desde: ${window.location.pathname}`
        };

        try {
            // Generamos un ID único basado en el tiempo para la solicitud
            const solicitudId = `solicitud_${Date.now()}`;
            const docRef = doc(db, "solicitudes_contacto", solicitudId);

            // Guardado directo en Firestore (Fase 2: Persistencia Nativa)
            await setDoc(docRef, {
                ...formData,
                fechaEnvio: new Date().toISOString(),
                estado: "pendiente", // Permite al Consultor gestionar la trazabilidad
                usuarioId: auth.currentUser?.uid || "visitante"
            });

            contactStatus.innerText = "✅ Solicitud recibida. Nos contactaremos pronto.";
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
    });

    // 4. PUENTE DE COMUNICACIÓN (REFORZADO): Receptor Universal de Datos Dreams
    window.addEventListener('message', async (event) => {
        const { type, data, metadata } = event.data;

        // A. Abrir modal de contacto (Humanización)
        if (type === 'OPEN_CONTACT_MODAL') {
            toggleContact(true);
        }

        // B. Sincronización de respuestas con Firestore (Persistencia Real)
        if (type === 'dreamsSync') {
            const user = auth.currentUser;
            if (!user) return;

            const workbookId = metadata.sessionID || 'sesion_general';
            const docRef = doc(db, "usuarios", user.uid, "progreso_workbooks", workbookId);

            try {
                await setDoc(docRef, {
                    [data.id]: data.value,
                    lastUpdate: new Date().toISOString(),
                    courseID: metadata.courseID
                }, { merge: true });
                console.log(`☁️ Dreams Cloud: Campo [${data.id}] persistido.`);
            } catch (error) {
                console.error("🚨 Error de persistencia:", error);
            }
        }

        // C. Recuperación de datos (Handshake): El workbook pide sus datos al cargar
        if (type === 'WORKBOOK_READY') {
            const user = auth.currentUser;
            if (!user) return;

            const workbookId = metadata.sessionID || 'sesion_general';
            const docRef = doc(db, "usuarios", user.uid, "progreso_workbooks", workbookId);

            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // Enviamos los datos rescatados de la nube de vuelta al iframe que los pidió
                    event.source.postMessage({
                        type: 'hydrateWorkbook',
                        payload: docSnap.data()
                    }, event.origin);
                    console.log(`📦 Dreams Cloud: Datos de [${workbookId}] enviados al cuaderno.`);
                }
            } catch (error) {
                console.error("🚨 Error al recuperar datos de la nube:", error);
            }
        }
    });
});