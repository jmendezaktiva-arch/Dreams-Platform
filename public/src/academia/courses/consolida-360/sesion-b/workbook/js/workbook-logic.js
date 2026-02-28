//public/src/academia/courses/consolida-360-sesion-b-workbook-js-workbook-logic.js
document.addEventListener('DOMContentLoaded', function() {
    // --- CONFIGURACIÓN DE SECCIONES: SESIÓN B (VENTAS DIGITALES) ---
    // Esta matriz define el menú y los contenedores de la Sesión B.
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');
    
    const sectionsData = [
        { id: 'diagnostico_digital', title: '1. Diagnóstico Digital', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>` },
        { id: 'cliente_ideal', title: '2. Mi Cliente Ideal', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>` },
        { id: 'canales_mensaje', title: '3. Canales y Mensaje', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>` },
        { id: 'lead_magnet', title: '4. Oferta Irresistible', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>` },
        { id: 'flujo_captura', title: '5. Flujo de Captura', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>` },
        { id: 'metricas_ventas', title: '6. Métricas y Control', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>` },
        { id: 'plan_b', title: '7. Plan de Acción B', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>` }
    ];

    // 1. MOTOR DE RENDERIZADO DINÁMICO (Sincronización con Modelo de Oro)
    // Apuntamos al contenedor específico definido en el nuevo index.html para no borrar el header
    const sectionsContainer = document.getElementById('workbook-sections-container');
    if (sectionsContainer) sectionsContainer.innerHTML = ''; 

    sectionsData.forEach(data => {
        // Crear link de navegación (Menú Lateral - Estética Prestige)
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#${data.id}" class="nav-link flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 transition-all group">
                <span class="completion-icon opacity-20 text-green-600 font-black text-[8px]">●</span>
                <div class="h-4 w-4">${data.icon}</div>
                <span class="text-[11px] font-bold uppercase tracking-tight">${data.title.substring(3)}</span>
            </a>`;
        navMenu.appendChild(li);

        // Crear contenedor de sección (Área de Trabajo - Estética Prestige)
        const section = document.createElement('section');
        section.id = data.id;
        section.className = 'section-content bg-white shadow-xl shadow-blue-900/5 rounded-[2rem] p-8 md:p-12 border border-gray-100 mb-10';
        
        if (sectionsContainer) sectionsContainer.appendChild(section);
    });

    // 2. INYECCIÓN QUIRÚRGICA: EJERCICIO 1 (DIAGNÓSTICO DIGITAL)
    const instructionsBoxClass = "bg-blue-50 border-l-4 border-brand-blue p-4 mb-8 rounded-r-lg";

    document.getElementById('diagnostico_digital').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[0].icon} ${sectionsData[0].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Evaluar la madurez actual de tus canales digitales y el nivel de profesionalismo en la atención al cliente online.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Marca tu nivel actual para cada pilar del ecosistema (1: Nulo, 5: Excelente/Automatizado).</p>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="p-4 font-bold">Pilar del Ecosistema</th>
                        <th class="p-4 text-center font-bold">1</th>
                        <th class="p-4 text-center font-bold">2</th>
                        <th class="p-4 text-center font-bold">3</th>
                        <th class="p-4 text-center font-bold">4</th>
                        <th class="p-4 text-center font-bold">5</th>
                    </tr>
                </thead>
                <tbody id="digital-diag-body"></tbody>
            </table>
        </div>
        <div class="mt-6 text-right">
            <button id="calculate-digital-score" class="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors shadow-md">
                Calcular Nivel de Madurez
            </button>
        </div>
        <div id="digital-score-result" class="mt-6 p-6 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg hidden">
            <h4 class="font-bold text-lg brand-blue">Resultado del Ecosistema</h4>
            <p id="digital-score-text" class="text-gray-700 italic mt-2"></p>
        </div>

        <div class="mt-6 text-right">
            <button id="calculate-digital-score" class="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors shadow-md">
                Calcular Nivel de Madurez
            </button>
        </div>
        <div id="digital-score-result" class="mt-6 p-6 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg hidden">
            <h4 class="font-bold text-lg brand-blue">Resultado del Ecosistema</h4>
            <p id="digital-score-text" class="text-gray-700 italic mt-2"></p>
        </div>

        <div class="mt-12">
            <h3 class="text-2xl font-bold text-gray-800">Reflexión de Impacto</h3>
            <p class="text-gray-600 mt-2">¿Cuál es el canal que más clientes te trae hoy y cuál es el que más "fuga" de prospectos genera?</p>
            <textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" 
                data-section="diagnostico_digital" 
                data-id="diag_digital_fuga_canales" 
                placeholder="Ej: Instagram atrae muchos, pero mi falta de respuesta rápida por WhatsApp hace que se pierdan..."></textarea>
        </div>`;

    // --- MOTOR DE CÁLCULO: EVALUACIÓN DE MADUREZ DIGITAL ---
    // Delegación de evento para asegurar que el botón exista tras el renderizado dinámico
    mainContent.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'calculate-digital-score') {
            let total = 0;
            let answered = 0;
            const pillarsCount = 6;

            for (let i = 0; i < pillarsCount; i++) {
                const selected = document.querySelector(`input[name="diag_p${i}"]:checked`);
                if (selected) {
                    total += parseInt(selected.value);
                    answered++;
                }
            }

            const resultDiv = document.getElementById('digital-score-result');
            const resultText = document.getElementById('digital-score-text');

            if (answered < pillarsCount) {
                resultText.textContent = "⚠️ Por favor, califica los 6 pilares para obtener tu diagnóstico de madurez.";
            } else {
                let diagnostic = `Tu puntaje es ${total}/30. `;
                if (total <= 12) diagnostic += "Nivel: ARTE-SANAL. Tu ecosistema es frágil y depende de esfuerzos manuales.";
                else if (total <= 20) diagnostic += "Nivel: EN EXPLORACIÓN. Tienes herramientas, pero falta conexión y estrategia.";
                else if (total <= 26) diagnostic += "Nivel: OPERATIVO. Generas ventas, pero tienes fugas de prospectos por falta de automatización.";
                else diagnostic += "Nivel: OPTIMIZADO. Tienes una máquina de ventas digital profesional y escalable.";
                
                resultText.textContent = diagnostic;
            }
            resultDiv.classList.remove('hidden');
        }
    });

    // Generar filas del diagnóstico
    const pilares = [
        "Presencia en Redes Sociales (Contenido activo)",
        "Profesionalismo en WhatsApp Business",
        "Página Web / Landing Page de conversión",
        "Tiempo de respuesta a prospectos digitales",
        "Base de Datos / CRM (Seguimiento)",
        "Inversión en Publicidad Pagada"
    ];
    
    const tbody = document.getElementById('digital-diag-body');
    pilares.forEach((pilar, idx) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        let cells = `<td class="p-4 font-medium">${pilar}</td>`;
        for (let i = 1; i <= 5; i++) {
            cells += `<td class="p-4 text-center">
                <input type="radio" name="diag_p${idx}" value="${i}" 
                class="autosave-input h-5 w-5 text-brand-blue" 
                data-section="diagnostico_digital" data-id="diag_digital_q${idx}">
            </td>`;
        }
        row.innerHTML = cells;
        tbody.appendChild(row);
    });

    // 3. INYECCIÓN QUIRÚRGICA: EJERCICIO 2 (MI CLIENTE IDEAL / AVATAR DIGITAL)
    document.getElementById('cliente_ideal').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[1].icon} ${sectionsData[1].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Humanizar al receptor de tu mensaje digital para que tu publicidad sea quirúrgica y no masiva.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Define el perfil de la persona que tiene el problema que tu producto/servicio resuelve con mayor rentabilidad.</p>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                    <label class="block font-semibold text-gray-700">Nombre ficticio del Avatar (Ej: 'Jorge el Dueño'):</label>
                    <input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                        data-section="cliente_ideal" data-id="avatar_nombre" placeholder="Dale un nombre para personificarlo">
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">Perfil Demográfico (Edad, Sexo, Ubicación):</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" 
                        data-section="cliente_ideal" data-id="avatar_demografia" placeholder="Ej: Hombres de 35-50 años, viven en CDMX, dueños de PyMEs de servicios."></textarea>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">Hábitos Digitales (¿Qué redes usa?):</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" 
                        data-section="cliente_ideal" data-id="avatar_habitos" placeholder="Ej: Usa LinkedIn para negocios y Facebook para ocio. Busca en Google soluciones de gestión."></textarea>
                </div>
                <div class="md:col-span-2">
                    <label class="block font-semibold text-gray-700">Puntos de Dolor / Necesidades (¿Qué le quita el sueño?):</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" 
                        data-section="cliente_ideal" data-id="avatar_dolores" placeholder="Ej: Siente que su empresa depende de él, no tiene tiempo para su familia, sus ventas están estancadas."></textarea>
                </div>
                <div class="md:col-span-2">
                    <label class="block font-semibold text-gray-700">Metas y Deseos (¿Qué quiere lograr realmente?):</label>
                    <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" 
                        data-section="cliente_ideal" data-id="avatar_metas" placeholder="Ej: Tener un equipo autónomo, duplicar sus ventas este año, viajar sin preocuparse por la operación."></textarea>
                </div>
            </div>
        </div>`;

    // 4. EJERCICIO 3 (CANALES Y MENSAJE) - LIMPIEZA DE SINTAXIS
    document.getElementById('canales_mensaje').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[2].icon} ${sectionsData[2].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Seleccionar los vehículos de comunicación donde vive tu Avatar y diseñar el mensaje "rompe-scroll" para captar su atención.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Identifica los canales prioritarios y redacta la idea central de tu comunicación.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-xl font-bold brand-blue mb-4 border-b pb-2">Selección de Canales</h3>
                <div class="space-y-4">
                    <div>
                        <label class="block font-semibold text-gray-700">Canal Principal (Donde vive tu avatar):</label>
                        <select class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                            data-section="canales_mensaje" data-id="canal_primario">
                            <option value="">Selecciona un canal...</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="google">Google Search</option>
                            <option value="whatsapp">WhatsApp</option>
                            <option value="tiktok">TikTok</option>
                        </select>
                    </div>
                    <div>
                        <label class="block font-semibold text-gray-700">Canales Secundarios:</label>
                        <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-20" 
                            data-section="canales_mensaje" data-id="canales_secundarios"></textarea>
                    </div>
                </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-xl font-bold brand-blue mb-4 border-b pb-2">El Mensaje Maestro</h3>
                <div class="space-y-4">
                    <div>
                        <label class="block font-semibold text-gray-700">Mensaje "Gancho":</label>
                        <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-20" 
                            data-section="canales_mensaje" data-id="mensaje_gancho"></textarea>
                    </div>
                    <div>
                        <label class="block font-semibold text-gray-700">Tu Diferenciador:</label>
                        <textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-20" 
                            data-section="canales_mensaje" data-id="mensaje_diferenciador"></textarea>
                    </div>
                </div>
            </div>
        </div>`;

    // 5. EJERCICIO 4 (OFERTA IRRESISTIBLE / LEAD MAGNET)
    document.getElementById('lead_magnet').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[3].icon} ${sectionsData[3].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Crear un recurso de alto valor que intercambiarás por los datos de contacto de tu prospecto (Nombre y WhatsApp).</p>
            <p class="mt-2"><strong>Instrucción:</strong> Define el nombre y el formato del regalo que atraerá a tu Cliente Ideal.</p>
        </div>

        <div class="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                    <label class="block font-semibold text-gray-700">Nombre de tu Oferta Irresistible (Lead Magnet):</label>
                    <input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                        data-section="lead_magnet" data-id="lm_titulo" placeholder="Ej: Guía de 5 pasos para automatizar tu PyME">
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">Formato del Recurso:</label>
                    <select class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                        data-section="lead_magnet" data-id="lm_formato">
                        <option value="">Selecciona un formato...</option>
                        <option value="pdf">PDF (Guía, Checklist, Ebook)</option>
                        <option value="video">Video Masterclass</option>
                        <option value="quiz">Quiz / Diagnóstico</option>
                        <option value="sesion">Sesión Estratégica / Auditoría</option>
                    </select>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700">Valor Percibido (¿Qué gana el cliente?):</label>
                    <input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                        data-section="lead_magnet" data-id="lm_valor" placeholder="Ej: Ahorra 10 horas de trabajo semanal">
                </div>
                <div class="md:col-span-2">
                    <label class="block font-semibold text-gray-700">Llamado a la Acción (CTA):</label>
                    <input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" 
                        data-section="lead_magnet" data-id="lm_cta" placeholder="Ej: ¡Quiero mi guía gratuita ahora!">
                </div>
            </div>
        </div>`;

    // 6. EJERCICIO 5 (FLUJO DE CAPTURA / EMBUDO)
    document.getElementById('flujo_captura').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[4].icon} ${sectionsData[4].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Trazar el recorrido técnico que hará el cliente desde que ve tu anuncio hasta que llega a tu WhatsApp o CRM.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Define los pasos de tu proceso de captura actual o deseado para convertir extraños en prospectos calificados.</p>
        </div>

        <div class="space-y-8">
            <div class="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <h3 class="text-xl font-bold brand-blue mb-6 border-b pb-2">Arquitectura de tu Embudo Digital</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-5 bg-blue-50 rounded-2xl border border-blue-100 relative">
                        <span class="absolute -top-3 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">PASO 1: ATRACCIÓN</span>
                        <label class="block font-semibold text-gray-700 mb-3 mt-2 text-sm">¿Cómo llegan?</label>
                        <textarea class="autosave-input w-full p-3 border border-gray-300 rounded-xl h-28 text-sm" 
                            data-section="flujo_captura" data-id="funnel_paso1" 
                            placeholder="Ej: Anuncio en Facebook Ads con segmentación en dueños de negocios ofreciendo el PDF gratuito."></textarea>
                    </div>
                    <div class="p-5 bg-blue-50 rounded-2xl border border-blue-100 relative">
                        <span class="absolute -top-3 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">PASO 2: CAPTURA</span>
                        <label class="block font-semibold text-gray-700 mb-3 mt-2 text-sm">¿Dónde dejan sus datos?</label>
                        <textarea class="autosave-input w-full p-3 border border-gray-300 rounded-xl h-28 text-sm" 
                            data-section="flujo_captura" data-id="funnel_paso2" 
                            placeholder="Ej: Landing Page con formulario conectado a CRM para descargar el Lead Magnet."></textarea>
                    </div>
                    <div class="p-5 bg-blue-50 rounded-2xl border border-blue-100 relative">
                        <span class="absolute -top-3 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">PASO 3: CIERRE</span>
                        <label class="block font-semibold text-gray-700 mb-3 mt-2 text-sm">¿Cómo entregas valor?</label>
                        <textarea class="autosave-input w-full p-3 border border-gray-300 rounded-xl h-28 text-sm" 
                            data-section="flujo_captura" data-id="funnel_paso3" 
                            placeholder="Ej: Mensaje automático por WhatsApp entregando el PDF e invitando a una sesión de diagnóstico 1 a 1."></textarea>
                    </div>
                </div>
            </div>

            <div class="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <label class="block font-semibold text-gray-700 mb-2">Stack Tecnológico (Herramientas a utilizar):</label>
                <input type="text" class="autosave-input w-full p-3 border border-gray-300 rounded-xl" 
                    data-section="flujo_captura" data-id="funnel_herramientas" 
                    placeholder="Ej: Meta Ads, ManyChat, Mailchimp, WordPress, Google Sheets...">
            </div>
        </div>`;

    // 7. EJERCICIO 6 (MÉTRICAS Y CONTROL / KPIs)
    document.getElementById('metricas_ventas').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[5].icon} ${sectionsData[5].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Definir los indicadores numéricos que determinarán si tu inversión digital es rentable o si necesita ajustes urgentes.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Establece tus metas mensuales para cada indicador clave.</p>
        </div>

        <div class="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-sm">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-100">
                        <th class="p-5 font-bold text-gray-700">Métrica (KPI)</th>
                        <th class="p-5 font-bold text-gray-700">Meta Mensual / Valor</th>
                        <th class="p-5 font-bold text-gray-700">¿Por qué es importante?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-50">
                        <td class="p-5 font-medium text-gray-800">Presupuesto en Pauta (Ads)</td>
                        <td class="p-5">
                            <input type="text" class="autosave-input w-full p-2 border border-gray-200 rounded-lg" 
                                data-section="metricas_ventas" data-id="metrica_presupuesto" placeholder="$">
                        </td>
                        <td class="p-5 text-sm text-gray-500 italic">Es el combustible de tu máquina de ventas.</td>
                    </tr>
                    <tr class="border-b border-gray-50">
                        <td class="p-5 font-medium text-gray-800">Meta de Leads (Prospectos)</td>
                        <td class="p-5">
                            <input type="number" class="autosave-input w-full p-2 border border-gray-200 rounded-lg" 
                                data-section="metricas_ventas" data-id="metrica_leads_objetivo" placeholder="Ej: 100">
                        </td>
                        <td class="p-5 text-sm text-gray-500 italic">Cuántas personas nuevas deben conocer tu oferta.</td>
                    </tr>
                    <tr class="border-b border-gray-50">
                        <td class="p-5 font-medium text-gray-800">Costo por Lead (CPL) Máximo</td>
                        <td class="p-5">
                            <input type="text" class="autosave-input w-full p-2 border border-gray-200 rounded-lg" 
                                data-section="metricas_ventas" data-id="metrica_cpl_max" placeholder="$">
                        </td>
                        <td class="p-5 text-sm text-gray-500 italic">Lo máximo que estás dispuesto a pagar por un contacto.</td>
                    </tr>
                    <tr>
                        <td class="p-5 font-medium text-gray-800">Tasa de Conversión (Cierre)</td>
                        <td class="p-5">
                            <input type="text" class="autosave-input w-full p-2 border border-gray-200 rounded-lg" 
                                data-section="metricas_ventas" data-id="metrica_tasa_cierre" placeholder="%">
                        </td>
                        <td class="p-5 text-sm text-gray-500 italic">De cada 10 prospectos, ¿cuántos deben comprar?</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-8 p-6 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/20">
            <h4 class="font-bold mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consejo del Mentor
            </h4>
            <p class="text-blue-100 text-sm leading-relaxed">
                No intentes medir todo al principio. Enfócate en el <strong>CPL (Costo por Lead)</strong>. Si un prospecto te cuesta más de lo que ganas al venderle, tu ecosistema está "quemando" dinero en lugar de invertirlo.
            </p>
        </div>`;

    // 8. EJERCICIO 7 (PLAN DE ACCIÓN B / TU RUTA DIGITAL)
    document.getElementById('plan_b').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[6].icon} ${sectionsData[6].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Convertir la estrategia en pasos tácticos con fecha de caducidad para lanzar o potenciar tu ecosistema digital.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Define las 2 acciones prioritarias para los próximos 15 días.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4 shadow-sm">
                <h3 class="text-xl font-bold brand-blue border-b pb-2">Acción Prioritaria #1</h3>
                <div>
                    <label class="block font-semibold text-gray-700 text-sm">¿Qué haré? (Ej: Grabar el video para mi Lead Magnet)</label>
                    <textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-xl h-24" 
                        data-section="plan_b" data-id="plan_b_accion1"></textarea>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700 text-sm">Fecha Límite:</label>
                    <input type="date" class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-xl" 
                        data-section="plan_b" data-id="plan_b_fecha1">
                </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-4 shadow-sm">
                <h3 class="text-xl font-bold brand-blue border-b pb-2">Acción Prioritaria #2</h3>
                <div>
                    <label class="block font-semibold text-gray-700 text-sm">¿Qué haré? (Ej: Configurar la campaña de Facebook Ads)</label>
                    <textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-xl h-24" 
                        data-section="plan_b" data-id="plan_b_accion2"></textarea>
                </div>
                <div>
                    <label class="block font-semibold text-gray-700 text-sm">Fecha Límite:</label>
                    <input type="date" class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-xl" 
                        data-section="plan_b" data-id="plan_b_fecha2">
                </div>
            </div>
        </div>

        <div class="mt-8 p-6 bg-orange-50 rounded-3xl border border-orange-100">
            <label class="block font-semibold text-gray-700 mb-2">Mi Compromiso de Arquitecto Digital:</label>
            <p class="text-sm text-gray-500 mb-4">Escribe una frase que resuma tu determinación para digitalizar tu PyME.</p>
            <textarea class="autosave-input w-full p-3 border border-orange-200 rounded-xl h-24 italic text-gray-700" 
                data-section="plan_b" data-id="plan_b_compromiso" 
                placeholder="Ej: Me comprometo a construir un sistema que venda mientras duermo para recuperar mi libertad operativa."></textarea>
        </div>`;

    // --- MOTOR DE INTERACTIVIDAD: NAVEGACIÓN Y PERSISTENCIA (DREAMS ENGINE) ---
    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');

    // 1. LÓGICA DE VISIBILIDAD DE SECCIONES
    function showSection(hash) {
        sections.forEach(section => {
            section.classList.toggle('active', '#' + section.id === hash);
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
    }

    // 2. ESCUCHADOR DE MENÚ (NAVEGACIÓN)
    navMenu.addEventListener('click', function(e) {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            history.pushState(null, null, targetId);
            showSection(targetId);
            window.scrollTo(0, 0);
        }
    });

    // 3. PUENTE DE HIDRATACIÓN CLOUD (PERSISTENCIA PROFESIONAL)
    // Función unificada para cargar datos desde el almacenamiento estandarizado
    function loadSavedData() {
        document.querySelectorAll('.autosave-input').forEach(input => {
            // Buscamos con el prefijo 'cuaderno_' (Estándar Dreams Cloud) 
            // y mantenemos 'sesionb_' como respaldo de migración
            const savedValue = localStorage.getItem('cuaderno_' + input.dataset.id) || 
                               localStorage.getItem('sesionb_' + input.dataset.id);
                               
            if (savedValue !== null) {
                if (input.type === 'radio') {
                    if (input.value === savedValue) input.checked = true;
                } else if (input.type === 'checkbox') {
                    input.checked = (savedValue === 'true');
                } else {
                    input.value = savedValue;
                }
            }
        });
        // Sincronizamos el reporte visual si los datos cambiaron
        if (typeof populateFinalReport === "function") populateFinalReport();
    }

    // ESCUCHADOR DE HIDRATACIÓN: Se dispara cuando los datos llegan de Firestore
    window.addEventListener('coreHydrated', () => {
        console.log("📦 Sesión B: Recibiendo datos desde la nube...");
        loadSavedData();
    });

    // ACTIVACIÓN DE LA REGLA DE ORO (PERSISTENCIA CLOUD)
    // Delegamos la persistencia al WorkbookCore.js para activar el Debouncing (1000ms)
    // y asegurar que los datos viajen a Firestore bajo la sub-colección 'sesion-b'.
    mainContent.addEventListener('input', (e) => {
        if (e.target.classList.contains('autosave-input')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            
            // Inyectamos el dato al Core para su sincronización con la nube
            WorkbookCore.saveProgress(input.dataset.id, valueToSave);
            
            // Mantenemos la actualización visual local de cálculos
            if (typeof updateLocalLogic === "function") updateLocalLogic();
        }
    });

    // 4. INICIALIZACIÓN DE ESTADO
    const initialHash = window.location.hash || `#${sectionsData[0].id}`;
    showSection(initialHash);
    loadSavedData();

    // --- AUTOMATIZACIÓN DEL REPORTE FINAL (DREAMS ENGINE B) ---
    function populateFinalReport() {
        const reportContainer = document.getElementById('reporte-dinamico-content');
        if (!reportContainer) return;

        const getVal = (id) => {
            // Priorizamos el estándar Dreams Cloud ('cuaderno_') y usamos el anterior como respaldo
            const val = localStorage.getItem('cuaderno_' + id) || localStorage.getItem('sesionb_' + id);
            
            return (val && val !== 'false' && val !== 'undefined' && val !== '') 
                   ? val 
                   : '<span class="text-gray-400 italic font-light">Dato no registrado</span>';
        };

        const html = `
            <div class="grid grid-cols-2 gap-8 mb-10">
                <div class="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <p class="text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">Líder PyME</p>
                    <p class="text-xl font-bold brand-blue">${localStorage.getItem('sesionb_nombre_participante') || 'Participante'}</p>
                </div>
                <div class="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <p class="text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">Empresa</p>
                    <p class="text-xl font-bold brand-blue">${localStorage.getItem('sesionb_nombre_empresa') || 'Mi Empresa'}</p>
                </div>
            </div>

            <div class="space-y-8">
                <div class="p-8 border-l-4 border-brand-orange bg-orange-50/50 rounded-r-2xl">
                    <h4 class="text-sm font-bold brand-orange uppercase mb-4 tracking-widest">👤 Cliente Ideal: ${getVal('avatar_nombre')}</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <p><strong>Dolores:</strong> ${getVal('avatar_dolores')}</p>
                        <p><strong>Metas:</strong> ${getVal('avatar_metas')}</p>
                    </div>
                </div>

                <div class="p-8 border border-gray-100 rounded-3xl shadow-sm bg-white">
                    <h4 class="text-sm font-bold brand-blue uppercase mb-4 tracking-widest">🧲 Oferta Irresistible (Lead Magnet)</h4>
                    <p class="text-lg font-medium text-gray-800">"${getVal('lm_titulo')}"</p>
                    <p class="text-sm text-gray-500 mt-2">Formato: <span class="uppercase">${getVal('lm_formato')}</span> | Valor: ${getVal('lm_valor')}</p>
                </div>

                <div class="p-8 bg-brand-blue rounded-3xl text-white shadow-xl shadow-blue-900/20">
                    <h4 class="text-sm font-bold uppercase mb-6 text-blue-200 tracking-widest">🚀 Arquitectura del Embudo</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
                        <div class="bg-white/10 p-4 rounded-xl border border-white/10">
                            <p class="font-bold mb-1 opacity-60">1. ATRACCIÓN</p>
                            <p>${getVal('funnel_paso1')}</p>
                        </div>
                        <div class="bg-white/10 p-4 rounded-xl border border-white/10">
                            <p class="font-bold mb-1 opacity-60">2. CAPTURA</p>
                            <p>${getVal('funnel_paso2')}</p>
                        </div>
                        <div class="bg-white/10 p-4 rounded-xl border border-white/10">
                            <p class="font-bold mb-1 opacity-60">3. CIERRE</p>
                            <p>${getVal('funnel_paso3')}</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="p-4 text-center bg-gray-50 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase">Presupuesto</p>
                        <p class="text-lg font-bold brand-blue">${getVal('metrica_presupuesto')}</p>
                    </div>
                    <div class="p-4 text-center bg-gray-50 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase">Meta Leads</p>
                        <p class="text-lg font-bold brand-blue">${getVal('metrica_leads_objetivo')}</p>
                    </div>
                    <div class="p-4 text-center bg-gray-50 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase">CPL Máx</p>
                        <p class="text-lg font-bold brand-blue">${getVal('metrica_cpl_max')}</p>
                    </div>
                    <div class="p-4 text-center bg-gray-50 rounded-2xl border border-gray-100">
                        <p class="text-[10px] font-bold text-gray-400 uppercase">Conversión</p>
                        <p class="text-lg font-bold brand-blue">${getVal('metrica_tasa_cierre')}</p>
                    </div>
                </div>
            </div>
        `;
        reportContainer.innerHTML = html;
    }

    // --- EXPORTAR A PDF (DELEGACIÓN AL CORE) ---
    document.getElementById('export-pdf')?.addEventListener('click', () => {
        // 1. Sincronizamos el reporte visual con los datos más recientes de la sesión
        populateFinalReport();

        // 2. Preparamos el nombre del archivo basado en la empresa del cliente
        const emp = (localStorage.getItem('cuaderno_nombre_empresa') || 'MiEmpresa').replace(/\s+/g, '_');
        
        // 3. Delegamos la generación técnica al Cerebro Central (WorkbookCore)
        // Esto garantiza consistencia visual y uso óptimo de memoria
        WorkbookCore.exportToPDF('reporte', `Estrategia_Digital_${emp}`);
    });

});