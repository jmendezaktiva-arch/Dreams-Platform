import { auth, db } from '../shared/firebase-config.js';

// --- ESTADO GLOBAL DE SESIÓN (Fase 4: Gestión de Colisiones) ---
let autosaveTimer; 

// --- REGISTRO MAESTRO DE CURSOS (EL CEREBRO DEL LOBBY) ---
// Aquí centralizamos la información para que el HTML se genere solo.
const COURSES_CONFIG = [
    {
        id: 'online',
        title: 'Consolida 360º - Online',
        category: 'Programa Autogestivo',
        description: 'Tu transformación empresarial, bajo tus propios términos. Consolida 360° Online es el acelerador asíncrono diseñado para dueños que buscan dominar equipos autónomos, ventas digitales y finanzas de precisión con acceso 24/7. Domina el método mediante video-lecciones, podcasts de casos reales y workbooks interactivos. La misma potencia de nuestra mentoría, adaptada a tu agenda y ritmo.',
        purposeTitle: 'Ruta Autogestiva: Libertad Estratégica a tu propio ritmo',
        purposeDesc: 'Acelera la evolución de tu PyME sin depender de horarios fijos. Esta modalidad te ofrece acceso total e inmediato a la metodología de Mi Empresa Crece. Incluye: diagnóstico profundo de tu operación, herramientas de implementación digital y el marco financiero Filtro 4+1. Ideal para líderes que requieren flexibilidad absoluta para blindar su empresa mientras mantienen el control de su tiempo.',
        modality: 'ONLINE',
        jsonPath: '/src/academia/courses/consolida-360/sesion-a/presentation/data.json',
        buttonText: 'Iniciar Programa Online',
        accentColor: 'var(--secondary-color)',
        isComingSoon: false
    },
    {
        id: 'live',
        title: 'Consolida 360º - Mentoría',
        category: 'Sesión en Vivo',
        description: 'Aceleración estratégica con acompañamiento experto en tiempo real. Consolida 360° Mentoría rompe la dependencia operativa del líder mediante feedback inmediato y sesiones síncronas de alto impacto. Transforma tu PyME en una estructura profesional, escalable y autónoma, asegurando la implementación efectiva de los pilares de crecimiento.',
        purposeTitle: 'Consolida 360° LIVE: De Dueño Agotado a Líder de una Empresa Próspera y Autónoma',
        purposeDesc: 'Deja de ser el cuello de botella de tu propio crecimiento. En 30 días, transforma tu PYME en una organización responsable, rentable y con propósito mediante interacción directa y feedback inmediato. Implementamos sistemas de autonomía, ecosistemas digitales de venta y marcos financieros de alta precisión. Beneficios: Libertad Real, Crecimiento Predecible y Seguridad Financiera. Nuestra Garantía: Generamos valor organizacional o te regresamos tu dinero.',
        modality: 'LIVE',
        jsonPath: '/src/academia/courses/consolida-360/sesion-a/presentation/data.json',
        buttonText: 'Entrar al Cuaderno Live',
        accentColor: 'var(--primary-color)',
        isComingSoon: false
    },
    {
        id: 'tiempo',
        title: 'Optimizando mi tiempo',
        category: 'Programa',
        description: 'Próximamente: Dominio de la gestión de la agenda con un método único y comprobado para hacer tu día más productivo',
        isComingSoon: true
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORES DE NAVEGACIÓN
    const viewLobby = document.getElementById('view-lobby');
    const viewPresentation = document.getElementById('view-presentation'); // El contenedor de Reveal.js
    const viewWorkbook = document.getElementById('view-workbook');
    
    // 1. MOTOR DE RENDERIZADO DEL LOBBY (DINÁMICO)
    const renderLobby = () => {
        const lobbyContainer = document.getElementById('course-lobby');
        if (!lobbyContainer) return;

        lobbyContainer.innerHTML = COURSES_CONFIG.map(course => `
            <article class="card" style="${course.isComingSoon ? 'opacity: 0.6; border: 1px dashed #ccc;' : `border-top: 4px solid ${course.accentColor || 'var(--accent-gold)'};`}; display: flex; flex-direction: column; height: 100%;">
                <header class="card-header" style="margin-bottom: 15px;">
                    <span class="card-category" style="color: ${course.accentColor || '#999'}; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${course.category}
                    </span>
                    <h3 style="margin: 5px 0 0; font-size: 1.15rem; ${course.isComingSoon ? 'color: #999;' : ''}">${course.title}</h3>
                </header>

                <div class="card-body" style="flex-grow: 1;">
                    <p style="font-size: 0.85rem; line-height: 1.5; color: #4A5568; margin-bottom: 20px;">${course.description}</p>
                </div>

                <footer class="btn-group" style="display: flex; gap: 10px; align-items: center; margin-top: auto;">
                    ${!course.isComingSoon ? `
                        <button class="btn-reveal-purpose" data-action="purpose" data-id="${course.id}" style="margin-top: 0; flex: 1; font-size: 0.65rem; padding: 12px 5px; white-space: nowrap; text-align: center;">
                            Propósito
                        </button>
                    ` : ''}
                    <button class="btn-primary" 
                        ${course.isComingSoon ? 'disabled style="background: #e2e8f0; color: #94a3b8; cursor: not-allowed; box-shadow: none;"' : ''}
                        data-action="open" 
                        data-id="${course.id}"
                        style="flex: 1.5; font-size: 0.7rem; padding: 12px 8px; ${course.id === 'live' ? 'background: #fff; color: var(--secondary-color); border: 2px solid var(--secondary-color);' : ''}">
                        ${course.isComingSoon ? 'Próximamente' : course.buttonText}
                    </button>
                </footer>
            </article>
        `).join('');
    };

    // Ejecutamos el renderizado inicial
    renderLobby();

    // Selector recuperado para navegación
    const btnBackToLobby = document.getElementById('btn-back-to-lobby');
    
    // Motor de Carga: Variable global para el contenido de la sesión
    let currentSessionData = null;

    // 2. SELECTORES DE FORMULARIO
    const workbookForm = document.getElementById('workbook-form');
    const statusMessage = document.getElementById('status-message');

    // --- MOTOR DE CARGA: RENDERIZADO DINÁMICO ---

   // 1. MOTOR DE RENDERIZADO (LIMPIO)
    const renderSlides = (data) => {
        const slidesContainer = document.querySelector('.slides');
        if (!slidesContainer) return;
        
        slidesContainer.innerHTML = ''; 

        data.slides.forEach((slide) => {
            const section = document.createElement('section');
            if (slide.layout) slide.layout.split(' ').forEach(cls => section.classList.add(cls));

            let html = `
                ${slide.title ? `<h2>${slide.title}</h2>` : ''}
                ${slide.subtitle ? `<p>${slide.subtitle}</p>` : ''}
                ${slide.content ? `<div>${slide.content}</div>` : ''}
                ${slide.image ? `<img src="${slide.image.src}" alt="${slide.image.alt || ''}" class="slide-image">` : ''}
            `;
            
            if (slide.workbookLink) {
                html += `<button class="btn-primary" style="width:auto; padding:10px 20px;" 
                         onclick="window.dispatchEvent(new CustomEvent('openWorkbook'))">
                         ${slide.workbookLink.text}</button>`;
            }

            section.innerHTML = html;
            slidesContainer.appendChild(section);
        });

        // Trazabilidad: Reinicialización limpia de Reveal.js
        if (window.Reveal) {
            try {
                if (Reveal.isReady()) {
                    Reveal.sync();
                    Reveal.layout();
                    Reveal.slide(0); // Regresamos a la primera lámina al cargar contenido nuevo
                } else {
                    Reveal.initialize({ controls: true, progress: true, hash: true, center: true });
                }
            } catch (e) {
                console.warn("Reveal aún no está listo para inicializar.");
            }
        }
    };

    // Lógica para cerrar y reabrir el Podcast (Coordinación de burbuja con transiciones)
    const podcastPlayer = document.getElementById('podcast-player');
    const btnShowPodcast = document.getElementById('btn-show-podcast');
    const audioElement = document.getElementById('audio-element');

    // --- MOTOR DE CONTROL DE BURBUJAS (PERSISTENCIA TOTAL) ---
    const toggleBubble = (elementId, forceState = null) => {
        const el = document.getElementById(elementId);
        if (!el) return;

        // Si forceState es true -> Quitar 'podcast-hidden' (Mostrar)
        // Si forceState es false -> Poner 'podcast-hidden' (Ocultar)
        const shouldHide = forceState !== null ? !forceState : !el.classList.contains('podcast-hidden');
        
        if (shouldHide) {
            el.classList.add('podcast-hidden');
        } else {
            el.classList.remove('podcast-hidden');
            // Lógica para Video Local: Sincronización forzada con la sesión activa (A/B/C)
            if (elementId === 'video-tutorial') {
                const video = document.getElementById('tutorial-video');
                const videoUrl = currentSessionData?.multimedia?.tutorialUrl;

                if (video && videoUrl) {
                    // Protocolo de Limpieza de Ruta: Eliminamos la barra inicial para evitar errores 404
                    const cleanVideoUrl = videoUrl.startsWith('/') ? videoUrl.substring(1) : videoUrl;
                    const finalUrl = encodeURI(cleanVideoUrl);

                    // Solo recargamos si la sesión ha cambiado para no interrumpir la reproducción actual
                    if (video.getAttribute('data-loaded-url') !== finalUrl) {
                        video.src = finalUrl;
                        video.setAttribute('data-loaded-url', finalUrl);
                        video.load();
                    }

                    video.play().catch(() => console.log("Interacción requerida para reproducir"));
                    video.volume = 0.4; // Nivel de confort definido en Ficha Técnica
                }
            }
        }
    };

    // Listeners del Dashboard de Control (Navegación Online)
    document.getElementById('btn-toggle-video')?.addEventListener('click', () => toggleBubble('video-tutorial'));
    document.getElementById('btn-toggle-podcast')?.addEventListener('click', () => toggleBubble('podcast-player'));
    document.getElementById('btn-toggle-workbook')?.addEventListener('click', () => {
        // En Online, el workbook es una burbuja. En Live, es la vista principal.
        // Estandarizamos la apertura: El workbook requiere su propia vista para garantizar 
        // el espacio de trabajo y la carga de datos (Sheets), independientemente de la modalidad.
        window.dispatchEvent(new CustomEvent('openWorkbook'));
    });

    // Listener para el botón de cierre del podcast (Mantiene compatibilidad)
    document.getElementById('btn-close-podcast')?.addEventListener('click', () => toggleBubble('podcast-player', false));

    // --- LÓGICA DE LAS BURBUJAS DE PROPÓSITO (DIFERENCIADAS) ---
    const setupPurposeBubble = (type) => {
        const btnShow = document.getElementById(`btn-show-purpose-${type}`);
        const btnClose = document.getElementById(`btn-close-purpose-${type}`);
        const overlay = document.getElementById(`purpose-overlay-${type}`);

        btnShow?.addEventListener('click', () => overlay?.classList.add('active'));
        btnClose?.addEventListener('click', () => overlay?.classList.remove('active'));
        overlay?.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    };

    // 1. Inicializamos la lógica de cierre para las burbujas de propósito (estáticas en HTML)
    setupPurposeBubble('online');
    setupPurposeBubble('live');

    // 2. DELEGACIÓN DE EVENTOS: El "vigilante" del Lobby para botones dinámicos
    const lobbyContainer = document.getElementById('course-lobby');
    if (lobbyContainer) {
        lobbyContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            const { action, id } = btn.dataset;

            // Acción: Abrir el curso/módulo
            if (action === 'open') {
                startModule(id.toUpperCase());
            } 
            // Acción: Revelar el propósito (Overlay)
            else if (action === 'purpose') {
                const overlay = document.getElementById(`purpose-overlay-${id}`);
                if (overlay) overlay.classList.add('active');
            }
        });
    }

    // --- NAVEGACIÓN ENTRE VISTAS Y TRAZABILIDAD DE DATOS ---

    // 1. Escuchador del evento disparado desde las diapositivas
    window.addEventListener('openWorkbook', () => {
        const iframe = document.getElementById('workbook-iframe');
        if (!iframe) return;

        // 1. Trazabilidad de Ruta: Construimos la ruta dinámica usando los metadatos de la sesión activa
        const sessionId = currentSessionData?.courseMetadata?.sessionId || 'sesion-a';
        const courseId = currentSessionData?.courseMetadata?.courseId || 'consolida-360';
        const workbookPath = `src/academia/courses/${courseId}/${sessionId}/workbook/index.html`;

        // 2. Cambio de Vista: Ocultamos la presentación y mostramos el contenedor del portal
        viewPresentation.style.display = 'none';
        viewWorkbook.style.display = 'block';
        window.scrollTo(0, 0);

        // 3. Carga Inteligente: Solo refrescamos el iframe si la ruta es distinta a la cargada
        if (iframe.src.indexOf(workbookPath) === -1) {
            statusMessage.innerText = "⏳ Sincronizando entorno modular...";
            iframe.src = workbookPath;

            // --- INICIO DE MODIFICACIÓN QUIRÚRGICA ---
            // Escuchamos cuando el contenido interno del iframe termine de cargar
            iframe.onload = () => {
                statusMessage.innerText = "✅ Entorno sincronizado.";
                // Enviamos la señal al workbook de que el "padre" (Academia) está listo
                iframe.contentWindow.postMessage({ type: 'SYNC_REQUEST' }, '*');
            };
            // --- FIN DE MODIFICACIÓN QUIRÚRGICA ---
        }
    });

    // 2. Control de botones "Volver" (Limpieza de interfaz al salir)
    const btnPresBack = document.getElementById('btn-pres-back-to-lobby');
    
    if (btnPresBack) {
        btnPresBack.addEventListener('click', () => {
            // 1. Limpieza de burbujas
            ['podcast-player', 'video-tutorial', 'view-workbook'].forEach(id => toggleBubble(id, false));
            
            // 2. Restauración de UI: Quitamos rastro de Reveal y desactivamos Modo Cinema
            document.body.classList.remove('reveal-viewport', 'cinema-mode');
            document.body.removeAttribute('style'); 
            
            viewPresentation.style.display = 'none';
            viewLobby.style.display = 'block';
        });
    }

    // 3. Control de botones "Volver" (Sincronización de Navegación)
    const btnNavBack = document.querySelector('.btn-nav-back'); // Botón del Header
    
    const returnToLobby = (e) => {
        // Fase 4: Cancelamos cualquier guardado pendiente antes de cambiar de vista
        if (autosaveTimer) clearTimeout(autosaveTimer);

        const sessionSelector = document.getElementById('view-session-selector');

        // Solo intervenimos si el Lobby está oculto (estamos dentro de un curso o sesión)
        if (viewLobby && viewLobby.style.display === 'none') {
            if (e) e.preventDefault(); 

            // CASO A: Si estamos viendo contenido (Presentación o Cuaderno), volvemos al Selector de Sesiones
            if (viewPresentation.style.display === 'block' || viewWorkbook.style.display === 'block') {
                ['podcast-player', 'video-tutorial'].forEach(id => toggleBubble(id, false));
                
                viewPresentation.style.display = 'none';
                viewWorkbook.style.display = 'none';
                if (sessionSelector) sessionSelector.style.display = 'block';

                // Restauramos la interfaz (quitamos modo cinema) para ver el selector correctamente
                document.body.classList.remove('reveal-viewport', 'cinema-mode');
                document.body.removeAttribute('style');
            } 
            // CASO B: Si ya estamos en el Selector de Sesiones, volvemos al Catálogo (Lobby)
            else if (sessionSelector && sessionSelector.style.display === 'block') {
                sessionSelector.style.display = 'none';
                viewLobby.style.display = 'block';
            }

            window.scrollTo(0, 0);
        }
    };

    // Vinculamos la misma lógica a todos los botones de retorno
    btnNavBack?.addEventListener('click', returnToLobby);
    btnPresBack?.addEventListener('click', returnToLobby);
    btnBackToLobby?.addEventListener('click', returnToLobby);

   // --- MOTOR DE PERSISTENCIA UNIVERSAL (DEBOUNCE) ---

    const syncWithSheets = async (inputElement) => {
        if (!inputElement) return;

        const fieldId = inputElement.dataset.id || inputElement.id;
        const value = (inputElement.type === 'checkbox' || inputElement.type === 'radio') 
                      ? inputElement.checked 
                      : inputElement.value;

        if (value === undefined || value === "") return;

        statusMessage.innerText = "⏳ Sincronizando avance...";
        statusMessage.style.color = "#666";

        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwApwF3Ve0SwUcvu8ZjsiiucnffURI25zSiE9ldrdmP_a9a7mBtn9HE_sfk99IY-Rzh/exec";
        
        const curso = currentSessionData?.courseMetadata?.courseName || "Consolida 360°";
        const sesion = currentSessionData?.courseMetadata?.sessionTitle || "Sesión General";
        const modalidad = currentSessionData?.courseMetadata?.modality || "N/A";

        try {
            // Sincronización Local (Crucial para que el Workbook vea los cambios)
            localStorage.setItem('cuaderno_' + fieldId, value);

            await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    email: auth.currentUser ? auth.currentUser.email : "Usuario Anónimo",
                    fieldId: fieldId, 
                    respuesta: value,
                    contexto: `${curso} | ${sesion} (${modalidad})`
                })
            });
            statusMessage.innerText = "✅ Sincronizado (Local + Nube).";
            statusMessage.style.color = "#2e7d32";
        } catch (error) {
            console.error("Error en sincronización:", error);
            statusMessage.innerText = "⚠️ Guardado localmente. Se sincronizará al reconectar.";
        }
    };

    // Escuchador Global para el Workbook
    viewWorkbook.addEventListener('input', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            clearTimeout(autosaveTimer);
            statusMessage.innerText = "✍️ Escribiendo...";
            autosaveTimer = setTimeout(() => syncWithSheets(e.target), 2000);
        }
    });

    viewWorkbook.addEventListener('change', (e) => {
        if (e.target.type === 'radio' || e.target.type === 'checkbox' || e.target.tagName === 'SELECT') {
            syncWithSheets(e.target);
        }
    });

    // 2. ACTIVADOR DEL MÓDULO (CONSOLIDADO Y DINÁMICO)
    let startModule = async (courseId) => {
        // Fase 4: Limpieza de seguridad para evitar colisiones entre módulos
        if (autosaveTimer) clearTimeout(autosaveTimer);

        // Buscamos la configuración específica en nuestro registro maestro
        const courseConfig = COURSES_CONFIG.find(c => c.id === courseId.toLowerCase());
        
        if (!courseConfig || !courseConfig.jsonPath) {
            console.error("Configuración de curso no encontrada para:", courseId);
            return;
        }

        try {
            // Ajuste de ruta: Aseguramos que sea relativa para evitar errores de raíz en localhost
            const cleanPath = courseConfig.jsonPath.startsWith('/') 
                ? courseConfig.jsonPath.substring(1) 
                : courseConfig.jsonPath;

            const response = await fetch(cleanPath);
            if (!response.ok) throw new Error(`Error ${response.status}: No se halló el archivo en ${cleanPath}`);
            
            currentSessionData = await response.json();
            
            // PROTECCIÓN DE TRAZABILIDAD: Si el JSON no tiene el objeto de metadata, lo creamos
            if (!currentSessionData.courseMetadata) {
                currentSessionData.courseMetadata = {};
            }
            
            // Sincronizamos la modalidad (ONLINE/LIVE) desde la configuración del lobby
            currentSessionData.courseMetadata.modality = courseConfig.modality;

            // --- BLOQUE MULTIMEDIA ELIMINADO DE STARTMODULE ---
            // La carga de multimedia ahora se gestiona en 'loadSessionContent' 
            // para garantizar que los podcasts cambien según la sesión elegida (A, B o C).

            // 1. Limpieza: Ocultamos el Lobby para dar paso a la navegación
            viewLobby.style.display = 'none';

            // 2. REPARACIÓN DE ERROR: Usamos 'courseConfig.modality' que es la variable válida
            const currentModality = courseConfig.modality;

            // 3. ACTIVACIÓN DEL PANEL DE SESIONES (NUEVO FLUJO INTERMEDIO)
            // En lugar de ir al contenido, mostramos el selector de sesiones
            const sessionSelector = document.getElementById('view-session-selector');
            if (sessionSelector) {
                sessionSelector.style.display = 'block';
                // Pintamos las 3 tarjetas (A, B, C) con la info del curso seleccionado
                renderSessions(courseConfig);
            }

        } catch (error) {
            console.error("Falla de carga:", error);
            alert("No se pudo cargar el material.");
            viewLobby.style.display = 'block';
        }
    };

    // 4. MOTOR DE RENDERIZADO DE SESIONES (LAS 3 SESIONES)
    const renderSessions = (courseConfig) => {
        const sessionList = document.getElementById('session-list');
        if (!sessionList) return;

        // Definimos las 3 sesiones estándar del Programa Consolida
        const sessions = [
            { id: 'a', name: 'Sesión A', topic: 'Equipo Proactivo, Empresa Exitosa', icon: '🏗️' },
            { id: 'b', name: 'Sesión B', topic: 'Impulsa tu PyME: Ecosistema Digital de Ventas', icon: '⚙️' },
            { id: 'c', name: 'Sesión C', topic: 'Gasto Inteligente, Inversiones Efectivas', icon: '🚀' }
        ];

        sessionList.innerHTML = sessions.map(session => `
            <article class="card" style="border-top: 4px solid ${courseConfig.accentColor}">
                <div class="card-content" style="text-align: center; padding: 30px 20px;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">${session.icon}</div>
                    <span class="card-category" style="color: #666;">${session.name}</span>
                    <h3 style="margin: 10px 0; color: var(--primary-color);">${session.topic}</h3>
                    <button class="btn-primary" 
                        onclick="window.dispatchEvent(new CustomEvent('loadSessionContent', { 
                            detail: { 
                                sessionId: '${session.id}', 
                                sessionTitle: '${session.name}: ${session.topic}',
                                modality: '${courseConfig.modality}',
                                jsonPath: '${courseConfig.jsonPath}' 
                            } 
                        }))"
                        style="margin-top: 15px; background: ${courseConfig.accentColor}">
                        Acceder a Sesión
                    </button>
                </div>
            </article>
        `).join('');
    };

    // 5. ESCUCHADOR PARA VOLVER AL LOBBY DESDE SESIONES
    document.getElementById('btn-sessions-back-to-lobby')?.addEventListener('click', () => {
        document.getElementById('view-session-selector').style.display = 'none';
        document.getElementById('view-lobby').style.display = 'block';
    });

    // 6. RECEPTOR DE CARGA DE SESIÓN (EL CONECTOR DINÁMICO)
    // Se mueve dentro del bloque principal para tener acceso al estado (currentSessionData)
    window.addEventListener('loadSessionContent', async (e) => {
        // Fase 5 (Hardening): Cancelamos guardados pendientes para evitar cruce de datos entre sesiones
        // Esto garantiza que la información de la sesión anterior no contamine el registro de la nueva.
        if (autosaveTimer) clearTimeout(autosaveTimer);

        // Extraemos el título descriptivo que configuramos en el paso anterior
        const { sessionId, sessionTitle, modality, jsonPath } = e.detail;

        try {
            // 1. CÁLCULO DE RUTA: Dinamismo para carpetas sesion-a, sesion-b o sesion-c
            const sessionPath = jsonPath.replace('sesion-a', `sesion-${sessionId}`).startsWith('/') 
                                ? jsonPath.replace('sesion-a', `sesion-${sessionId}`).substring(1) 
                                : jsonPath.replace('sesion-a', `sesion-${sessionId}`);

            const response = await fetch(sessionPath);
            if (!response.ok) throw new Error(`Contenido no hallado en: ${sessionPath}`);
            
            const jsonText = await response.text();
            
            // Validamos que el contenido no sea nulo o vacío antes de procesar
            if (!jsonText || jsonText.trim().length === 0) {
                throw new Error(`El archivo en ${sessionPath} está vacío o no se leyó correctamente.`);
            }

            // Procesamos manualmente el JSON para capturar errores de sintaxis específicos
            const jsonData = JSON.parse(jsonText);
            
            if (!jsonData.courseMetadata) jsonData.courseMetadata = {};
            
            // INYECCIÓN DE METADATOS: Aquí es donde ocurre la magia de la trazabilidad
            jsonData.courseMetadata.sessionId = `sesion-${sessionId}`;
            jsonData.courseMetadata.sessionTitle = sessionTitle; // Guardamos el nombre real (ej: Gasto Inteligente)
            jsonData.courseMetadata.modality = modality;
            
            currentSessionData = jsonData;

            // --- RECONEXIÓN QUIRÚRGICA DE MULTIMEDIA (SESIÓN A/B/C) ---
            if (currentSessionData.multimedia) {
                const podcastPlayer = document.getElementById('podcast-player');
                const selector = document.getElementById('podcast-selector');
                const podcastSource = document.getElementById('podcast-source');
                const audioElement = document.getElementById('audio-element');
                const videoElement = document.getElementById('tutorial-video');

                // 1. Visibilidad y Confort (Volumen)
                if (podcastPlayer) podcastPlayer.style.display = 'block';
                if (audioElement) audioElement.volume = 0.3;

                // 2. Sincronización de Playlist (Podcast)
                if (currentSessionData.multimedia.playlist && selector) {
                    selector.innerHTML = '';
                    currentSessionData.multimedia.playlist.forEach(track => {
                        const option = document.createElement('option');
                        // Limpieza de ruta para compatibilidad absoluta con servidores
                        const cleanUrl = track.url.startsWith('/') ? track.url.substring(1) : track.url;
                        option.value = encodeURI(cleanUrl);
                        option.textContent = track.title;
                        selector.appendChild(option);
                    });

                    // Carga inicial y Restauración de interactividad (onchange)
                    if (currentSessionData.multimedia.playlist.length > 0) {
                        podcastSource.src = selector.value;
                        audioElement.load();
                    }
                    selector.onchange = () => {
                        podcastSource.src = selector.value;
                        audioElement.load();
                        audioElement.play().catch(() => console.log("Interacción requerida para audio"));
                    };
                }

                // 3. Sincronización de Video (Tutorial de Sesión)
                if (videoElement && currentSessionData.multimedia.tutorialUrl) {
                    const cleanVideoUrl = currentSessionData.multimedia.tutorialUrl.startsWith('/') 
                        ? currentSessionData.multimedia.tutorialUrl.substring(1) 
                        : currentSessionData.multimedia.tutorialUrl;
                    videoElement.src = encodeURI(cleanVideoUrl);
                    videoElement.load();
                }
            }

            // 4. LIMPIEZA Y ENRUTAMIENTO
            document.getElementById('view-session-selector').style.display = 'none';
            
            // ACTIVACIÓN DE MODO CINEMA (Quirúrgico): Oculta Navbar y expande contenedores
            document.body.classList.add('cinema-mode');

            if (modality === 'ONLINE') {
                viewPresentation.style.display = 'block';
                renderSlides(currentSessionData);
                
                // Forzamos a Reveal a recalcular dimensiones después de que el contenedor es visible
                setTimeout(() => {
                    if (window.Reveal) {
                        Reveal.layout();
                    }
                }, 100); 
            } else {
                window.dispatchEvent(new CustomEvent('openWorkbook'));
            }
        } catch (error) {
            console.error("Falla de conexión de sesión:", error);
            alert("Aviso: El contenido de esta sesión aún no está disponible en el servidor.");
        }
    });

});