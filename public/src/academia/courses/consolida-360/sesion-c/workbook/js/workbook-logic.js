/**
 * DREAMS WORKBOOK LOGIC - SESIÓN C | VERSIÓN INTEGRAL v1.0
 * Mantiene la integridad matemática de los diagnósticos financieros originales.
 * Implementa la arquitectura de navegación y persistencia del Modelo de Oro.
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. CONFIGURACIÓN DE SECCIONES (IDENTIDAD METODOLÓGICA) ---
    // Mantenemos títulos y IDs exactos de la app externa para trazabilidad de datos.
    const sectionsData = [
        { 
            id: 'consolidacion', 
            title: '1. Diagnóstico de Consolidación', 
            icon: 'M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z' 
        },
        { 
            id: 'politicas', 
            title: '2. Plan de Acción: Políticas', 
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' 
        },
        { 
            id: 'autoevaluacion', 
            title: '3. Autoevaluación de Gestión', 
            icon: 'M16 8v8m-4-5v5m-4-2v2M8 21l4-4 4 4M3 3h18v18H3V3z' 
        },
        { 
            id: 'fcl', 
            title: '4. Flujo de Caja Libre (FCL)', 
            icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' 
        },
        { 
            id: 'prioridades', 
            title: '5. Prioridades de Negocio', 
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' 
        },
        { 
            id: 'rendimiento', 
            title: '6. Rendimiento (ROI)', 
            icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' 
        },
        { 
            id: 'monto', 
            title: '7. Evaluación del Monto', 
            icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' 
        },
        { 
            id: 'plazo', 
            title: '8. Evaluación del Plazo', 
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' 
        },
        { 
            id: 'riesgos', 
            title: '9. Matriz de Riesgos', 
            icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' 
        },
        { 
            id: 'estrategica', 
            title: '10. Matriz Estratégica', 
            icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.947 3.42 3.42 0 016.438 0 3.42 3.42 0 001.946 1.947 3.42 3.42 0 010 6.438 3.42 3.42 0 00-1.947 1.946 3.42 3.42 0 01-6.438 0 3.42 3.42 0 00-1.946-1.946 3.42 3.42 0 010-6.438z' 
        },
        { 
            id: 'final', 
            title: '11. Plan de Acción 90 Días', 
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m3 4L10 17l-3-3' 
        }
    ];

    let currentSectionIndex = 0;

    // --- 2. MOTOR DE RENDERIZADO Y NAVEGACIÓN ---
    const renderNav = () => {
        const nav = document.getElementById('sections-nav');
        nav.innerHTML = sectionsData.map((section, index) => `
            <button onclick="showSection(${index})" class="nav-link w-full flex items-center gap-3 p-3 rounded-xl transition-all ${index === currentSectionIndex ? 'active bg-blue-50 text-[#0F3460] font-bold' : 'text-gray-400 hover:bg-gray-50'}">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center ${index === currentSectionIndex ? 'bg-[#0F3460] text-white' : 'bg-gray-100'}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${section.icon}"/></svg>
                </div>
                <span class="text-xs text-left">${section.title}</span>
            </button>
        `).join('');
    };

    window.showSection = (index) => {
        currentSectionIndex = index;
        renderNav();
        renderContent();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- 3. LÓGICA DE CÁLCULO (INTEGRIDAD FINANCIERA) ---
    // Esta función mantiene el sistema de puntos 2, 1, 0 de la app original
    window.calculateEj3Scores = function() {
        let totalPoints = 0;
        const maxPossible = 48; // Basado en la matriz de la app externa

        // Seleccionamos todos los inputs de la matriz de gestión
        const selects = document.querySelectorAll('[data-id*="ej3_"]');
        selects.forEach(select => {
            const val = parseInt(select.value) || 0;
            totalPoints += val;

            // Feedback visual de semaforización original
            select.classList.remove('bg-green-100', 'bg-yellow-100', 'bg-red-100');
            if (val === 2) select.classList.add('bg-green-100');
            else if (val === 1) select.classList.add('bg-yellow-100');
            else if (val === 0) select.classList.add('bg-red-100');
        });

        const scoreElement = document.getElementById('ej3-total-score');
        if(scoreElement) scoreElement.innerText = totalPoints;
        
        // Actualizamos barra de progreso local
        updateProgressBar();
    };

    // --- 3.5 LÓGICA DE FLUJO DE CAJA (INTEGRIDAD FINANCIERA) ---
    // Maneja el cambio de vista entre Mes 1, 2 y 3 sin recargar la página
    window.switchFclTab = (month) => {
        // Estética de botones (Shared style del Modelo A)
        document.querySelectorAll('.fcl-tab').forEach(t => t.classList.remove('bg-white', 'text-[#0F3460]', 'shadow-sm'));
        document.querySelectorAll('.fcl-tab').forEach(t => t.classList.add('text-gray-400'));
        
        const activeTab = document.getElementById(`tab-fcl-${month}`);
        if(activeTab) {
            activeTab.classList.add('bg-white', 'text-[#0F3460]', 'shadow-sm');
            activeTab.classList.remove('text-gray-400');
        }

        // Control de visibilidad de contenidos
        document.querySelectorAll('.fcl-content').forEach(c => c.classList.add('hidden'));
        const activeContent = document.getElementById(`fcl-month-${month}`);
        if(activeContent) activeContent.classList.remove('hidden');
    };

    // Motor de cálculo financiero: Procesa Ventas, CV y GF para obtener el FCL
    window.calculateFCL = function(month) {
        const ing = parseFloat(document.getElementById(`ej4_m${month}_ingresos`)?.value) || 0;
        const cv = parseFloat(document.getElementById(`ej4_m${month}_cv`)?.value) || 0;
        const gf = parseFloat(document.getElementById(`ej4_m${month}_gf`)?.value) || 0;

        const bruta = ing - cv;
        const operativa = bruta - gf;

        const resBruta = document.getElementById(`ej4_m${month}_bruta_res`);
        const resOp = document.getElementById(`ej4_m${month}_op_res`);

        if(resBruta) resBruta.innerText = bruta.toLocaleString();
        if(resOp) resOp.innerText = operativa.toLocaleString();

        // Cálculo dinámico del Promedio Trimestral (Verdad Única de Caja)
        let totalOp = 0;
        for(let i=1; i<=3; i++) {
            const mIng = parseFloat(document.getElementById(`ej4_m${i}_ingresos`)?.value) || 0;
            const mCv = parseFloat(document.getElementById(`ej4_m${i}_cv`)?.value) || 0;
            const mGf = parseFloat(document.getElementById(`ej4_m${i}_gf`)?.value) || 0;
            totalOp += (mIng - mCv - mGf);
        }
        const avg = totalOp / 3;
        const avgEl = document.getElementById('ej4_fcl_promedio');
        if(avgEl) avgEl.innerText = avg.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
        
        updateProgressBar();
    };

    // --- 3.6 LÓGICA DE RENDIMIENTO ROI (INTEGRIDAD ESTRATÉGICA) ---
    // Calcula la viabilidad cualitativa y el ROI financiero de 3 opciones de inversión
    window.calculateROIScores = function() {
        // 1. ROI CUALITATIVO (Matriz de Viabilidad)
        for (let inv = 1; inv <= 3; inv++) {
            let invScore = 0;
            // Seleccionamos los 4 criterios de cada inversión (C1 a C4)
            const selects = document.querySelectorAll(`[data-id^="ej6_inv${inv}_c"]`);
            
            selects.forEach(select => {
                const val = parseInt(select.value) || 0;
                invScore += val;

                // Semaforización de celdas individual (Feedback visual original)
                select.classList.remove('bg-green-100', 'bg-yellow-100', 'bg-red-100');
                if (val === 2) select.classList.add('bg-green-100');
                else if (val === 1) select.classList.add('bg-yellow-100');
                else if (val === 0) select.classList.add('bg-red-100');
            });
            
            // Actualizamos el total cualitativo de la inversión (Máx 8)
            const resElement = document.getElementById(`ej6_inv${inv}_total`);
            if(resElement) resElement.innerText = invScore;
            
            // 2. ROI CUANTITATIVO (Fórmula Financiera Original)
            const monto = parseFloat(document.getElementById(`ej6_inv${inv}_monto`)?.value) || 0;
            const retorno = parseFloat(document.getElementById(`ej6_inv${inv}_retorno`)?.value) || 0;
            const resRoi = document.getElementById(`ej6_inv${inv}_roi_res`);

            if (resRoi) {
                if (monto > 0) {
                    // CÁLCULO DE ROI ANUALIZADO (Fidelidad 100% con Metodología Original)
                    // Fórmula: (Retorno Mensual * 12 meses / Monto de Inversión) * 100
                    const roiAnualizado = (retorno * 12 / monto) * 100;
                    resRoi.innerText = roiAnualizado.toFixed(1) + '%';
                    
                    // Semaforización del resultado financiero (Umbral de éxito > 0%)
                    resRoi.parentElement.classList.remove('text-green-600', 'text-red-600');
                    resRoi.parentElement.classList.add(roiAnualizado > 0 ? 'text-green-600' : 'text-red-600');
                } else {
                    resRoi.innerText = '0%';
                }
            }
        }
        updateProgressBar();
    };

    // --- 3.7 LÓGICA DE EVALUACIÓN DEL MONTO (INTEGRIDAD FINANCIERA) ---
    // Determina el esfuerzo de caja: (Monto Inversión / FCL Promedio)
    window.calculateMontoEvaluacion = function() {
        // Recuperamos la "Verdad Única de Caja" (FCL Promedio)
        const fclAvgText = document.getElementById('ej4_fcl_promedio')?.innerText || "0";
        const fclAvg = parseFloat(fclAvgText.replace(/,/g, '')) || 0;
        let hasHighRisk = false; // Monitor de riesgo para activar CAT

        for (let inv = 1; inv <= 3; inv++) {
            const monto = parseFloat(localStorage.getItem('cuaderno_ej6_inv' + inv + '_monto')) || 0;
            const displayMonto = document.getElementById(`ej7_inv${inv}_monto_display`);
            const displayMeses = document.getElementById(`ej7_inv${inv}_meses`);

            if (displayMonto) displayMonto.innerText = monto.toLocaleString();

            if (displayMeses) {
                if (fclAvg > 0) {
                    const mesesRequeridos = monto / fclAvg;
                    displayMeses.innerText = mesesRequeridos.toFixed(1);
                    
                    displayMeses.parentElement.classList.remove('border-green-100', 'border-red-100', 'bg-green-50', 'bg-red-50');
                    if (mesesRequeridos <= 6) {
                        displayMeses.parentElement.classList.add('bg-green-50', 'border-green-100');
                        displayMeses.classList.remove('text-red-700');
                        displayMeses.classList.add('text-green-700');
                    } else {
                        displayMeses.parentElement.classList.add('bg-red-50', 'border-red-100');
                        displayMeses.classList.remove('text-green-700');
                        displayMeses.classList.add('text-red-700');
                        hasHighRisk = true; // Se detecta riesgo en al menos una opción
                    }
                } else {
                    displayMeses.innerText = "N/A";
                }
            }
        }

        // CONTROL DINÁMICO DEL CAT DE ASESORÍA
        const advisoryCat = document.getElementById('ej7-advisory-cat');
        if (advisoryCat) {
            if (hasHighRisk) advisoryCat.classList.remove('hidden');
            else advisoryCat.classList.add('hidden');
        }

        updateProgressBar();
    };

    // --- 3.8 LÓGICA DE EVALUACIÓN DEL PLAZO (PAYBACK) ---
    // Calcula el tiempo de recuperación: (Monto Inversión / Retorno Mensual Estimado)
    window.calculatePlazoEvaluacion = function() {
        let hasSlowPayback = false; // Monitor para activar CAT de optimización

        for (let inv = 1; inv <= 3; inv++) {
            const monto = parseFloat(localStorage.getItem('cuaderno_ej6_inv' + inv + '_monto')) || 0;
            const retorno = parseFloat(localStorage.getItem('cuaderno_ej6_inv' + inv + '_retorno')) || 0;
            
            const displayMonto = document.getElementById(`ej8_inv${inv}_monto_display`);
            const displayRetorno = document.getElementById(`ej8_inv${inv}_retorno_display`);
            const displayMeses = document.getElementById(`ej8_inv${inv}_meses`);

            if (displayMonto) displayMonto.innerText = monto.toLocaleString();
            if (displayRetorno) displayRetorno.innerText = retorno.toLocaleString();

            if (displayMeses) {
                if (retorno > 0) {
                    const mesesRecuperacion = monto / retorno;
                    displayMeses.innerText = mesesRecuperacion.toFixed(1);
                    
                    displayMeses.parentElement.classList.remove('border-green-100', 'border-red-100', 'bg-green-50', 'bg-red-50');
                    if (mesesRecuperacion <= 12) {
                        displayMeses.parentElement.classList.add('bg-green-50', 'border-green-100');
                        displayMeses.classList.remove('text-red-700');
                        displayMeses.classList.add('text-green-700');
                    } else {
                        displayMeses.parentElement.classList.add('bg-red-50', 'border-red-100');
                        displayMeses.classList.remove('text-green-700');
                        displayMeses.classList.add('text-red-700');
                        hasSlowPayback = true; // Se detecta retorno lento (> 12 meses)
                    }
                } else {
                    displayMeses.innerText = "N/A";
                }
            }
        }

        // CONTROL DINÁMICO DEL CAT DE OPTIMIZACIÓN
        const advisoryCatPlazo = document.getElementById('ej8-advisory-cat');
        if (advisoryCatPlazo) {
            if (hasSlowPayback) advisoryCatPlazo.classList.remove('hidden');
            else advisoryCatPlazo.classList.add('hidden');
        }

        updateProgressBar();
    };

    // --- 3.9 LÓGICA DE SÍNTESIS ESTRATÉGICA (PITCH GENERATOR) ---
    // Consolida los datos de las secciones 5, 6, 7 y 8 en una narrativa coherente.
    window.calculateStrategicPitch = function() {
        // 1. Recuperamos la Prioridad Principal (Sección 5)
        const prioridad = localStorage.getItem('cuaderno_ej5_p1') || "[Define tu prioridad en la Sec. 5]";
        
        // 2. Recuperamos datos financieros de la Opción 1 (Sección 6, 7 y 8)
        // Usamos la Opción 1 como base para el Pitch Maestro
        const monto = parseFloat(localStorage.getItem('cuaderno_ej6_inv1_monto')) || 0;
        const roiText = document.getElementById('ej6_inv1_roi_res')?.innerText || "0%";
        const mesesCaja = document.getElementById('ej7_inv1_meses')?.innerText || "0";
        const mesesPayback = document.getElementById('ej8_inv1_meses')?.innerText || "0";

        // 3. Construimos la narrativa (Template Metodológico Consolida 360)
        const pitchTemplate = `Mi prioridad estratégica inmediata es ${prioridad.toLowerCase()}. 

Para lograrlo, requiero una inversión de $${monto.toLocaleString()} USD. Esta iniciativa proyecta un rendimiento (ROI) del ${roiText}, lo cual representa un esfuerzo de apenas ${mesesCaja} meses de mi flujo de caja actual. 

Lo más relevante es que el capital se recuperará íntegramente en un plazo estimado de ${mesesPayback} meses, permitiendo que la empresa se autofinancie y escale de forma rentable.`;

        // 4. Inyectamos en el campo de texto final
        const pitchElement = document.getElementById('ej10_pitch_final');
        if(pitchElement) {
            pitchElement.value = pitchTemplate;
            // Disparamos el guardado automático para el Pitch
            WorkbookCore.saveProgress('ej10_pitch_final', pitchTemplate);
        }
        
        updateProgressBar();
    };

    // --- 4. PERSISTENCIA Y SINCRONIZACIÓN ---
    const updateProgressBar = () => {
        const inputs = document.querySelectorAll('.autosave-input');
        const filled = Array.from(inputs).filter(i => i.value.trim() !== "").length;
        const progress = (filled / inputs.length) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    };

    // Escuchamos al Core para hidratar datos de la nube
    window.addEventListener('coreHydrated', () => {
        document.querySelectorAll('.autosave-input').forEach(input => {
            const val = localStorage.getItem('cuaderno_' + input.dataset.id);
            if(val) input.value = val;
        });
        if(typeof calculateEj3Scores === 'function') calculateEj3Scores();
    });

    // --- 2.5 MOTOR DE RENDERIZADO DE CONTENIDO (DINÁMICO) ---
    const renderContent = () => {
        const container = document.getElementById('workbook-container');
        const section = sectionsData[currentSectionIndex];
        let content = '';

        // Migración Quirúrgica: Inyectamos el HTML manteniendo textos e IDs originales de la App Externa
        if (section.id === 'consolidacion') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Para consolidar tu empresa, primero debemos ser realistas con tu situación actual. 
                        Ingresa los datos solicitados para evaluar tu posición en el mercado.
                    </p>

                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tu Sueldo de Mercado Mensual (USD)</label>
                            <input type="number" 
                                   id="ej1_sueldo" 
                                   data-id="ej1_sueldo"
                                   class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-lg font-bold text-[#0F3460] focus:ring-2 focus:ring-[#0F3460] outline-none transition-all" 
                                   placeholder="Ej: 5000">
                        </div>
                    </div>
                </div>
            `;
        } else if (section.id === 'politicas') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Define las directrices para la gestión de excedentes y reinversión estratégica.
                    </p>

                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Política de Distribución de Utilidades (%)</label>
                            <input type="number" 
                                   id="ej2_politica" 
                                   data-id="ej2_politica"
                                   class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-lg font-bold text-[#0F3460] focus:ring-2 focus:ring-[#0F3460] outline-none transition-all" 
                                   placeholder="Ej: 30">
                        </div>
                    </div>
                </div>
            `;
        } else if (section.id === 'autoevaluacion') {
            const categories = [
                { title: 'FILOSOFÍA Y ESTRATEGIA', prefix: 'm1', items: ['Propósito y Valores', 'Visión a 3 años', 'Plan Estratégico', 'Cultura de Ejecución'] },
                { title: 'CULTURA Y EQUIPO', prefix: 'm2', items: ['Puestos Clave', 'Sistema de Reclutamiento', 'Plan de Capacitación', 'Indicadores de Desempeño'] },
                { title: 'MARKETING Y VENTAS', prefix: 'm3', items: ['Propuesta de Valor', 'Embudo de Ventas', 'Presupuesto Marketing', 'CRM y Seguimiento'] },
                { title: 'OPERACIONES Y PROCESOS', prefix: 'm4', items: ['Manual de Procesos', 'Control de Calidad', 'Gestión de Inventarios', 'Servicio al Cliente'] },
                { title: 'FINANZAS Y LEGAL', prefix: 'm5', items: ['Presupuesto Anual', 'Flujo de Caja', 'Cumplimiento Legal', 'Auditoría Interna'] },
                { title: 'TECNOLOGÍA E INNOVACIÓN', prefix: 'm6', items: ['Software de Gestión', 'Ciberseguridad', 'Mejora Continua', 'I+D'] }
            ];

            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Evalúa el nivel de madurez operativa de tu empresa en cada área clave.
                            </p>
                        </div>
                        <div class="bg-[#0F3460] text-white p-6 rounded-2xl text-center min-w-[160px] shadow-lg shadow-blue-900/20">
                            <p class="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1">Score de Madurez</p>
                            <div class="text-4xl font-black"><span id="ej3-total-score">0</span><span class="text-lg opacity-50">/48</span></div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${categories.map(cat => `
                            <div class="space-y-4">
                                <h3 class="text-xs font-black text-[#957C3D] uppercase tracking-widest border-b border-gray-100 pb-2">${cat.title}</h3>
                                <div class="space-y-3">
                                    ${cat.items.map((item, idx) => `
                                        <div class="flex items-center justify-between gap-4">
                                            <span class="text-xs font-bold text-gray-600">${item}</span>
                                            <select 
                                                id="ej3_${cat.prefix}_i${idx + 1}" 
                                                data-id="ej3_${cat.prefix}_i${idx + 1}"
                                                onchange="calculateEj3Scores()"
                                                class="autosave-input p-2 rounded-lg border border-gray-100 bg-gray-50 text-[10px] font-bold text-[#0F3460] focus:ring-2 focus:ring-[#0F3460] outline-none transition-all min-w-[100px]"
                                            >
                                                <option value="0">0 - No existe</option>
                                                <option value="1">1 - En proceso</option>
                                                <option value="2">2 - Consolidado</option>
                                            </select>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-8 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                        <svg class="w-5 h-5 text-[#0F3460] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <p class="text-[10px] text-blue-800 leading-tight">
                            <strong>Nota de Calificación:</strong> 2 = Sistema documentado y funcional. 1 = Acciones aisladas sin estandarizar. 0 = Ausencia total de gestión en el área.
                        </p>
                    </div>
                </div>
            `;
        } else if (section.id === 'fcl') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-black text-[#0F3460] mb-2 flex items-center gap-2">
                                ${section.title}
                                <span id="fcl-trigger" class="btn-help-trigger" title="¿Qué es el FCL?">i</span>
                            </h2>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Calcula tu excedente operativo mensual para determinar tu capacidad de inversión y crecimiento. 
                                La <strong>Verdad Única de Caja</strong> es el promedio de los últimos 3 meses.
                            </p>
                        </div>
                        <div class="bg-[#957C3D] text-white p-6 rounded-2xl text-center min-w-[200px] shadow-lg shadow-orange-900/10">
                            <p class="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">FCL Promedio (USD)</p>
                            <div class="text-3xl font-black">$<span id="ej4_fcl_promedio">0</span></div>
                        </div>
                    </div>

                    <div class="flex gap-2 p-1 bg-gray-100 rounded-2xl mb-8">
                        <button id="tab-fcl-1" onclick="switchFclTab(1)" class="fcl-tab flex-1 py-3 text-xs font-bold rounded-xl transition-all bg-white text-[#0F3460] shadow-sm">MES 1</button>
                        <button id="tab-fcl-2" onclick="switchFclTab(2)" class="fcl-tab flex-1 py-3 text-xs font-bold rounded-xl transition-all text-gray-400 hover:text-gray-600">MES 2</button>
                        <button id="tab-fcl-3" onclick="switchFclTab(3)" class="fcl-tab flex-1 py-3 text-xs font-bold rounded-xl transition-all text-gray-400 hover:text-gray-600">MES 3</button>
                    </div>

                    ${[1, 2, 3].map(m => `
                        <div id="fcl-month-${m}" class="fcl-content space-y-8 ${m !== 1 ? 'hidden' : ''}">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="space-y-2">
                                    <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Ingresos Totales (Ventas)</label>
                                    <input type="number" id="ej4_m${m}_ingresos" data-id="ej4_m${m}_ingresos" oninput="calculateFCL(${m})" class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-lg font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] transition-all" placeholder="0">
                                </div>
                                <div class="space-y-2">
                                    <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Costos Variables (Directos)</label>
                                    <input type="number" id="ej4_m${m}_cv" data-id="ej4_m${m}_cv" oninput="calculateFCL(${m})" class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-lg font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] transition-all" placeholder="0">
                                </div>
                                <div class="space-y-2">
                                    <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Gastos Fijos (Operativos)</label>
                                    <input type="number" id="ej4_m${m}_gf" data-id="ej4_m${m}_gf" oninput="calculateFCL(${m})" class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-lg font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] transition-all" placeholder="0">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="p-4 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
                                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Utilidad Bruta</span>
                                    <span class="text-xl font-black text-gray-400">$<span id="ej4_m${m}_bruta_res">0</span></span>
                                </div>
                                <div class="p-4 bg-blue-50 rounded-2xl flex justify-between items-center border border-blue-100">
                                    <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider">FCL Mes ${m}</span>
                                    <span class="text-xl font-black text-[#0F3460]">$<span id="ej4_m${m}_op_res">0</span></span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (section.id === 'prioridades') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Con base en tu diagnóstico, define las 3 prioridades estratégicas para consolidar tu empresa.
                    </p>

                    <div class="grid grid-cols-1 gap-8">
                        ${[1, 2, 3].map(p => `
                            <div class="group">
                                <label class="block text-[10px] font-black text-[#957C3D] uppercase tracking-[0.2em] mb-3 transition-colors group-focus-within:text-[#0F3460]">Prioridad ${p}</label>
                                <textarea 
                                    id="ej5_p${p}" 
                                    data-id="ej5_p${p}"
                                    class="autosave-input w-full p-6 rounded-2xl border border-gray-100 bg-gray-50 text-sm text-[#0F3460] font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-[#0F3460] focus:bg-white outline-none transition-all resize-none h-28" 
                                    placeholder="Ej: Implementar un sistema de manuales de procesos para el área de ventas..."></textarea>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                        <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <svg class="w-6 h-6 text-[#0F3460]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <p class="text-[11px] text-blue-900 leading-normal font-medium">
                            <strong>Consejo Senior:</strong> Asegúrate de que tus prioridades sean "S.M.A.R.T." (Específicas, Medibles, Alcanzables, Relevantes y con un Tiempo definido).
                        </p>
                    </div>
                </div>
            `;
        } else if (section.id === 'rendimiento') {
            const criteria = [
                'Factibilidad Técnica',
                'Alineación Estratégica',
                'Urgencia / Necesidad',
                'Impacto en Cliente'
            ];

            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Evalúa tus iniciativas desde dos ángulos: su viabilidad operativa (puntos) y su rendimiento financiero estimado (ROI).
                    </p>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        ${[1, 2, 3].map(inv => `
                            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col h-full">
                                <h3 class="text-xs font-black text-[#957C3D] uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">OPCIÓN DE INVERSIÓN ${inv}</h3>
                                
                                <div class="space-y-4 mb-8">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Viabilidad Operativa</p>
                                    ${criteria.map((c, idx) => `
                                        <div class="flex flex-col gap-1">
                                            <span class="text-[10px] font-bold text-gray-600">${c}</span>
                                            <select 
                                                id="ej6_inv${inv}_c${idx + 1}" 
                                                data-id="ej6_inv${inv}_c${idx + 1}"
                                                onchange="calculateROIScores()"
                                                class="autosave-input p-2 rounded-lg border border-gray-100 bg-white text-[10px] font-bold text-[#0F3460] focus:ring-2 focus:ring-[#0F3460] outline-none transition-all"
                                            >
                                                <option value="0">0 - Bajo / Difícil</option>
                                                <option value="1">1 - Medio / Regular</option>
                                                <option value="2">2 - Alto / Ideal</option>
                                            </select>
                                        </div>
                                    `).join('')}
                                    <div class="pt-4 border-t border-gray-200 flex justify-between items-center">
                                        <span class="text-[10px] font-black text-[#0F3460]">PUNTOS VIABILIDAD</span>
                                        <span class="text-lg font-black text-[#0F3460]"><span id="ej6_inv${inv}_total">0</span><span class="text-xs opacity-30">/8</span></span>
                                    </div>
                                </div>

                                <div class="space-y-4 mt-auto">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Retorno Financiero</p>
                                    <div>
                                        <label class="block text-[9px] font-bold text-gray-500 mb-1 italic">Monto de la Inversión (USD)</label>
                                        <input type="number" id="ej6_inv${inv}_monto" data-id="ej6_inv${inv}_monto" oninput="calculateROIScores()" class="autosave-input w-full p-3 rounded-xl border border-gray-100 bg-white text-xs font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460]" placeholder="0">
                                    </div>
                                    <div>
                                        <label class="block text-[9px] font-bold text-gray-500 mb-1 italic">Retorno Estimado Mensual (USD)</label>
                                        <input type="number" id="ej6_inv${inv}_retorno" data-id="ej6_inv${inv}_retorno" oninput="calculateROIScores()" class="autosave-input w-full p-3 rounded-xl border border-gray-100 bg-white text-xs font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460]" placeholder="0">
                                    </div>
                                    <div class="p-4 bg-[#0F3460] rounded-xl text-center shadow-lg shadow-blue-900/10">
                                        <p class="text-[9px] font-bold text-blue-200 uppercase tracking-widest mb-1">ROI ESTIMADO</p>
                                        <p class="text-xl font-black text-white"><span id="ej6_inv${inv}_roi_res">0%</span></p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (section.id === 'monto') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Compara el costo de tus iniciativas contra tu flujo de caja real. 
                                Esto determina si puedes autofinanciarte o si requieres capital externo.
                            </p>
                        </div>
                        <div class="bg-[#F5F5F0] p-4 rounded-2xl border border-gray-200 text-center min-w-[180px]">
                            <p class="text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-1">FCL Promedio Disponible</p>
                            <div class="text-xl font-black text-[#0F3460]">$${(parseFloat((document.getElementById('ej4_fcl_promedio')?.innerText || "0").replace(/,/g, '')) || 0).toLocaleString()}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${[1, 2, 3].map(inv => `
                            <div class="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <h3 class="text-[10px] font-black text-[#957C3D] uppercase tracking-widest mb-4">OPCIÓN ${inv}</h3>
                                
                                <div class="space-y-6">
                                    <div>
                                        <p class="text-[9px] font-bold text-gray-400 uppercase mb-1">Monto Requerido</p>
                                        <p class="text-xl font-black text-[#0F3460]">$<span id="ej7_inv${inv}_monto_display">0</span></p>
                                    </div>

                                    <div class="p-4 rounded-xl border-2 border-dashed border-gray-100 transition-colors">
                                        <p class="text-[9px] font-bold text-gray-400 uppercase mb-2">Esfuerzo de Caja</p>
                                        <div class="flex items-baseline gap-1">
                                            <span id="ej7_inv${inv}_meses" class="text-3xl font-black text-gray-300">0</span>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase">Meses</span>
                                        </div>
                                    </div>

                                    <div class="pt-2">
                                        <p class="text-[9px] font-medium text-gray-400 leading-tight">
                                            *Si el resultado es > 6 meses, se recomienda financiamiento externo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-10 p-6 bg-[#0F3460] rounded-2xl text-white flex items-center gap-6 shadow-xl shadow-blue-900/20">
                        <div class="hidden md:flex w-16 h-16 bg-white/10 rounded-full items-center justify-center shrink-0">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <div>
                            <h4 class="text-sm font-bold mb-1 uppercase tracking-wider">Regla de Integridad de Negocio</h4>
                            <p class="text-xs text-blue-100 leading-relaxed opacity-80">
                                Una inversión sana no debe comprometer más de 6 meses de tu Flujo de Caja Libre. 
                                Si tus indicadores están en <span class="text-red-400 font-bold uppercase">Rojo</span>, estás ante un riesgo de descapitalización operativa.
                            </p>
                        </div>
                    </div>

                    <div id="ej7-advisory-cat" class="hidden mt-8 animate-fadeIn">
                        <div class="cat-advisory-box">
                            <div class="w-12 h-12 bg-[#957C3D] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                            </div>
                            <div class="flex-1">
                                <h4 class="text-[11px] font-black text-[#0F3460] uppercase tracking-widest">¿Necesitas blindar tu inversión?</h4>
                                <p class="text-[10px] text-gray-600 leading-relaxed mt-1">Tus indicadores muestran un esfuerzo de caja elevado. Una sesión estratégica puede ayudarte a optimizar tus márgenes antes de invertir.</p>
                            </div>
                            <button onclick="window.parent.document.getElementById('btn-open-contact').click()" class="px-5 py-3 bg-[#0F3460] text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#164275] transition-all shadow-md">
                                Solicitar Mentoría
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (section.id === 'plazo') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2 flex items-center gap-2">
                        ${section.title}
                        <span id="plazo-trigger" class="btn-help-trigger" title="¿Qué es el Payback?">i</span>
                    </h2>
                    <p class="text-sm text-gray-500 mb-10 leading-relaxed">
                        Analiza el tiempo estimado para recuperar tu inversión inicial. Entre más corto sea el plazo, mayor es la velocidad de crecimiento de tu flujo de caja.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${[1, 2, 3].map(inv => `
                            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all hover:bg-white hover:shadow-lg group">
                                <h3 class="text-[10px] font-black text-[#957C3D] uppercase tracking-widest mb-6">PROYECTO ${inv}</h3>
                                
                                <div class="space-y-4 mb-8">
                                    <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span class="text-[9px] font-bold text-gray-400 uppercase">Inversión</span>
                                        <span class="text-xs font-black text-gray-600">$<span id="ej8_inv${inv}_monto_display">0</span></span>
                                    </div>
                                    <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span class="text-[9px] font-bold text-gray-400 uppercase">Retorno/Mes</span>
                                        <span class="text-xs font-black text-gray-600">$<span id="ej8_inv${inv}_retorno_display">0</span></span>
                                    </div>
                                </div>

                                <div class="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
                                    <p class="text-[9px] font-bold text-gray-400 uppercase mb-1">Recuperación en</p>
                                    <div class="flex justify-center items-baseline gap-1">
                                        <span id="ej8_inv${inv}_meses" class="text-3xl font-black text-gray-300">0</span>
                                        <span class="text-[10px] font-bold text-gray-400 uppercase">Meses</span>
                                    </div>
                                </div>

                                <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p class="text-[8px] text-center text-gray-400 italic leading-tight">
                                        *Referencia: El retorno ideal es < 12 meses.
                                    </p>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-5 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-green-800 uppercase tracking-wider mb-1">Alta Eficiencia</p>
                                <p class="text-[10px] text-green-700 leading-tight">Recuperación en 12 meses o menos. Proyecto altamente recomendado para autofinanciamiento.</p>
                            </div>
                        </div>
                        <div class="p-5 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-red-800 uppercase tracking-wider mb-1">Retorno Lento</p>
                                <p class="text-[10px] text-red-700 leading-tight">Más de 12 meses. Requiere una revisión profunda de márgenes o escala del modelo.</p>
                            </div>
                        </div>
                    </div>

                    <div id="ej8-advisory-cat" class="hidden mt-8 animate-fadeIn">
                        <div class="cat-advisory-box">
                            <div class="w-12 h-12 bg-[#957C3D] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div class="flex-1">
                                <h4 class="text-[11px] font-black text-[#0F3460] uppercase tracking-widest">¿El retorno es demasiado lento?</h4>
                                <p class="text-[10px] text-gray-600 leading-relaxed mt-1">Si tus proyectos superan los 12 meses de recuperación, necesitamos revisar la escala o el margen de contribución. Agenda una mentoría para optimizar tu modelo.</p>
                            </div>
                            <button onclick="window.parent.document.getElementById('btn-open-contact').click()" class="px-5 py-3 bg-[#0F3460] text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#164275] transition-all shadow-md">
                                Optimizar Modelo
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else if (section.id === 'riesgos') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Identifica los factores que podrían poner en riesgo tu plan de consolidación y define tus estrategias de blindaje.
                    </p>

                    <div class="space-y-8">
                        ${[1, 2, 3].map(r => `
                            <div class="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="md:col-span-2">
                                        <label class="block text-[10px] font-black text-[#957C3D] uppercase tracking-widest mb-2">Riesgo Detectado ${r}</label>
                                        <input type="text" 
                                               id="ej9_r${r}_desc" 
                                               data-id="ej9_r${r}_desc" 
                                               class="autosave-input w-full p-3 rounded-xl border border-gray-200 bg-white text-sm font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] transition-all" 
                                               placeholder="Ej: Aumento en costos de materia prima...">
                                    </div>
                                    <div>
                                        <label class="block text-[10px] font-black text-[#957C3D] uppercase tracking-widest mb-2">Nivel de Impacto</label>
                                        <select id="ej9_r${r}_impacto" 
                                                data-id="ej9_r${r}_impacto" 
                                                class="autosave-input w-full p-3 rounded-xl border border-gray-200 bg-white text-sm font-bold text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] transition-all">
                                            <option value="Bajo">Bajo</option>
                                            <option value="Medio">Medio</option>
                                            <option value="Alto">Alto</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Plan A: Mitigación (Prevención)</label>
                                        </div>
                                        <textarea id="ej9_r${r}_plana" 
                                                  data-id="ej9_r${r}_plana" 
                                                  class="autosave-input w-full p-4 rounded-xl border border-gray-200 bg-white text-xs font-medium text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] resize-none h-24 transition-all" 
                                                  placeholder="¿Cómo evitaremos que este riesgo ocurra?"></textarea>
                                    </div>
                                    <div class="space-y-2">
                                        <div class="flex items-center gap-2">
                                            <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Plan B: Contingencia (Reacción)</label>
                                        </div>
                                        <textarea id="ej9_r${r}_planb" 
                                                  data-id="ej9_r${r}_planb" 
                                                  class="autosave-input w-full p-4 rounded-xl border border-gray-100 bg-white text-xs font-medium text-[#0F3460] outline-none focus:ring-2 focus:ring-[#0F3460] resize-none h-24 transition-all" 
                                                  placeholder="¿Qué haremos si el riesgo se materializa?"></textarea>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-4">
                        <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                        </div>
                        <p class="text-[10px] text-orange-800 leading-tight">
                            <strong>Blindaje Estratégico:</strong> Un plan de consolidación sin Matriz de Riesgos es solo una expresión de deseos. El Plan B asegura la continuidad operativa de tu empresa ante imprevistos.
                        </p>
                    </div>
                </div>
            `;
        } else if (section.id === 'estrategica') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                        <div class="max-w-xl">
                            <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Esta es la síntesis de tu plan de consolidación. Revisa la narrativa generada y ajústala para que refleje tu visión empresarial.
                            </p>
                        </div>
                        <button onclick="calculateStrategicPitch()" class="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F3460] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                            Sincronizar Datos
                        </button>
                    </div>

                    <div class="relative group">
                        <div class="absolute -inset-1 bg-gradient-to-r from-[#0F3460] to-[#957C3D] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div class="relative bg-white border border-gray-100 rounded-2xl p-2">
                            <label class="block text-[10px] font-black text-[#957C3D] uppercase tracking-widest mb-2 px-4 pt-4">Tu Pitch de Inversión Consolida 360°</label>
                            <textarea id="ej10_pitch_final" 
                                      data-id="ej10_pitch_final" 
                                      class="autosave-input w-full p-6 text-sm md:text-base font-medium text-[#0F3460] leading-relaxed bg-transparent outline-none resize-none h-64" 
                                      placeholder="Cargando síntesis estratégica..."></textarea>
                        </div>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-4">
                        <div class="flex-1 min-w-[200px] p-4 bg-[#F5F5F0] rounded-xl border border-gray-100">
                            <p class="text-[9px] font-bold text-gray-400 uppercase mb-1">Estatus del Pitch</p>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span class="text-[11px] font-bold text-[#0F3460]">Listo para exportación PDF</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (section.id === 'final') {
            content = `
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fadeIn">
                    <h2 class="text-2xl font-black text-[#0F3460] mb-2">${section.title}</h2>
                    <p class="text-sm text-gray-500 mb-8 leading-relaxed">
                        Establece los pasos inmediatos para ejecutar tu inversión. La disciplina en los primeros 90 días determina el éxito del retorno proyectado.
                    </p>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    <th class="p-4 border-b">Actividad Crítica</th>
                                    <th class="p-4 border-b w-32">Fecha Límite</th>
                                    <th class="p-4 border-b w-48">Responsable</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[1, 2, 3, 4, 5].map(i => `
                                    <tr>
                                        <td class="p-2 border-b">
                                            <input type="text" data-id="ej11_act_${i}" class="autosave-input w-full p-2 text-xs font-bold text-[#0F3460] bg-transparent outline-none focus:bg-blue-50 rounded-lg transition-all" placeholder="Ej: Contratación de agencia...">
                                        </td>
                                        <td class="p-2 border-b">
                                            <input type="date" data-id="ej11_date_${i}" class="autosave-input w-full p-2 text-[10px] font-bold text-gray-500 bg-transparent outline-none focus:bg-blue-50 rounded-lg transition-all">
                                        </td>
                                        <td class="p-2 border-b">
                                            <input type="text" data-id="ej11_resp_${i}" class="autosave-input w-full p-2 text-[10px] font-bold text-gray-500 bg-transparent outline-none focus:bg-blue-50 rounded-lg transition-all" placeholder="Nombre...">
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-12 p-10 bg-gradient-to-br from-[#0F3460] to-[#16213E] rounded-[2rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/40">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#957C3D] to-transparent opacity-50"></div>
                        
                        <h3 class="text-3xl font-black mb-4">¡Diagnóstico Completado!</h3>
                        <p class="text-blue-200 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
                            Has finalizado con éxito el rigor técnico de la Sesión C. Tu plan de consolidación y estrategia de inversión están listos para la fase de implementación.
                        </p>
                        
                        <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button onclick="WorkbookCore.submitFinal()" class="group relative px-10 py-5 bg-[#957C3D] hover:bg-[#B59C5D] text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl">
                                <span class="relative z-10 flex items-center gap-3">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                                    Cerrar y Sincronizar Plan
                                </span>
                            </button>
                        </div>
                        
                        <p class="mt-6 text-[10px] text-blue-400 font-bold uppercase tracking-widest opacity-60">Dream Platform v1.0 | Mi Empresa Crece</p>
                    </div>
                </div>
            `;
        }

        // --- MOTOR DE INYECCIÓN Y ACTIVACIÓN ---
        container.innerHTML = content;
        
        const counter = document.getElementById('section-counter');
        if(counter) counter.innerText = `SECCIÓN ${currentSectionIndex + 1} DE ${sectionsData.length}`;
        
        // Hidratación de Campos
        document.querySelectorAll('.autosave-input').forEach(input => {
            const val = localStorage.getItem('cuaderno_' + input.dataset.id);
            if(val) input.value = val;
        });

        // Disparadores de Lógica por Sección
        if (section.id === 'autoevaluacion') calculateEj3Scores();
        if (section.id === 'fcl') [1,2,3].forEach(m => calculateFCL(m));
        if (section.id === 'rendimiento') calculateROIScores();
        if (section.id === 'monto') calculateMontoEvaluacion();
        if (section.id === 'plazo') calculatePlazoEvaluacion();
        if (section.id === 'estrategica') calculateStrategicPitch();

        updateProgressBar();
    };

    // --- 5. CONTROLADORES DE NAVEGACIÓN (FOOTER) ---
    // Conectamos los botones del "cascarón" index.html con la lógica de secciones
    document.getElementById('prev-section')?.addEventListener('click', () => {
        if (currentSectionIndex > 0) showSection(currentSectionIndex - 1);
    });
    document.getElementById('next-section')?.addEventListener('click', () => {
        if (currentSectionIndex < sectionsData.length - 1) showSection(currentSectionIndex + 1);
    });

    // --- 6. GESTIÓN DE MODALES DE AYUDA (DELEGACIÓN DE EVENTOS) ---
    // Escuchamos clics en el contenedor principal para capturar disparadores dinámicos
    const workbookContainer = document.getElementById('workbook-container');

    workbookContainer.addEventListener('click', (e) => {
        if (e.target.id === 'fcl-trigger') {
            document.getElementById('fcl-modal').classList.add('active');
        } else if (e.target.id === 'plazo-trigger') {
            document.getElementById('plazo-modal').classList.add('active');
        }
    });

    // Cierre de modales (Elementos estáticos inyectados en el index.html)
    document.getElementById('fcl-close')?.addEventListener('click', () => {
        document.getElementById('fcl-modal').classList.remove('active');
    });
    document.getElementById('plazo-close')?.addEventListener('click', () => {
        document.getElementById('plazo-modal').classList.remove('active');
    });

    // Cierre de seguridad al hacer clic fuera del contenido (Backdrop)
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('help-overlay')) {
            e.target.classList.remove('active');
        }
    });

    // ACTIVACIÓN INICIAL DEL SISTEMA
    renderNav();
    renderContent();
});