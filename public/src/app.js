// public/src/app.js

import { login, logout, redirectByUserRole } from './auth/auth.js';
import { db, auth, doc, setDoc, getDoc } from './shared/firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- PERSISTENCIA DE SESIÓN (CENTINELA GLOBAL) ---
// Este observador se dispara automáticamente al cargar cualquier página del ecosistema
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(`✅ Sesión activa detectada: ${user.email}`);
        
        // PROTECCIÓN DE RUTAS: Si el usuario ya está logueado e intenta entrar al login (index), 
        // lo enviamos directo a su área de trabajo según su rol.
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            redirectByUserRole(user.uid);
        }
    } else {
        // SEGURIDAD: Si no hay sesión y el usuario intenta entrar a una página privada, 
        // lo redirigimos al login para proteger la integridad del ecosistema.
        const privatePages = ['/academia.html', '/dashboard.html', '/admin.html'];
        if (privatePages.some(page => window.location.pathname.includes(page))) {
            console.warn("⚠️ Acceso no autorizado. Redirigiendo al Login...");
            window.location.href = '/index.html';
        }
    }
});

// Esperamos a que la página cargue totalmente para la lógica del DOM
document.addEventListener('DOMContentLoaded', () => {

    // --- MOTOR DE IDENTIDAD VISUAL (DINÁMICO) ---
    /**
     * Localiza elementos de marca (logos) y les inyecta la ruta de Firebase Storage
     * utilizando el motor central de rutas DREAMS_CONFIG.
     */
    /**
     * MOTOR DE IDENTIDAD UNIFICADO: Escanea todo el DOM en busca de activos 
     * marcados para sincronización con la nube (data-asset).
     */
    const initGlobalAssets = () => {
        // TRACEABILIDAD: Usamos querySelectorAll para capturar múltiples logos
        // presentes en Login, Dashboard y Academia simultáneamente.
        const assets = document.querySelectorAll('[data-asset]');
        
        assets.forEach(el => {
            const assetName = el.dataset.asset;
            const firebaseUrl = window.DREAMS_CONFIG.resolvePath(assetName, 'Shared');
            
            // 1. SINCRONIZACIÓN DE ESTILOS (Marca de agua en CSS)
            if (assetName === 'logo.png') {
                document.documentElement.style.setProperty('--dynamic-logo-url', `url("${firebaseUrl}")`);
            }

            // 2. LÓGICA DE RENDERIZADO PARA IMÁGENES
            if (el.tagName === 'IMG') {
                // Configuramos el manejador de errores ANTES de asignar el src
                el.onerror = () => {
                    console.warn(`⚠️ CDN no disponible para [${assetName}]. Ejecutando recuperación local.`);
                    el.src = `assets/img/${assetName}`; // Corrección de backticks para template literal
                    el.classList.remove('opacity-0');
                    el.style.opacity = "1";
                };

                el.onload = () => {
                    el.classList.remove('opacity-0');
                    el.style.opacity = "1";
                };

                if (firebaseUrl) el.src = firebaseUrl;
            }
        });
    };

    // Disparamos la carga de identidad visual de Mi Empresa Crece
    initGlobalAssets();

    // Localizamos el formulario de inicio de sesión por su ID
    const loginForm = document.getElementById('login-form');

    // 1. LÓGICA DE AUTENTICACIÓN (ACCESO Y SALIDA)
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await login(email, password);
        });
    }

    // Manejador global de cierre de sesión (Logout)
    // TRACEABILIDAD: Permite invalidar el token para que el Sentinel detenga la redirección automática.
    document.addEventListener('click', async (e) => {
        if (e.target.closest('#btn-logout')) {
            e.preventDefault();
            console.log("🚪 Cerrando sesión y liberando el Login...");
            try {
                await logout();
                // El observador onAuthStateChanged detectará el cambio y permitirá estar en index.html
            } catch (error) {
                console.error("🚨 Error en la desconexión:", error);
            }
        }
    });

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