document.addEventListener('DOMContentLoaded', function() {
    // --- CONFIGURACIÓN INICIAL ---
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');
    const sectionsData = [
        { id: 'evaluacion', title: '1. Dependencia Operativa', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>` },
        { id: 'vocacion', title: '2. Vocación Puestos Clave', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>` },
        { id: 'prioridades', title: '3. Prioridades de Mejora', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` },
        { id: 'mision', title: '4. Misión de Puesto', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>` },
        { id: 'delegacion', title: '5. Delegación Efectiva', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h.01M12 7h.01M16 7h.01M9 17h6M9 14h6M9 11h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>` },
        { id: 'feedback', title: '6. Feedback Ágil', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z" /></svg>` },
        { id: 'roleplay', title: '7. Role-Play', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` },
        { id: 'plan', title: '8. Mi Plan de Implementación', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>` }
    ];

// --- CÓDIGO A REEMPLAZAR EN app.js ---

// --- GENERACIÓN DINÁMICA DE CONTENIDO ---
sectionsData.forEach(data => {
    // Crear link de navegación
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="#${data.id}" class="nav-link flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors duration-300">
            <span class="completion-icon text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            ${data.icon}
            <span class="flex-grow">${data.title}</span>
        </a>`;
    navMenu.appendChild(li);

    // Crear contenedor de sección con diseño premium y respiro visual
    const section = document.createElement('section');
    section.id = data.id;
    // Optimizamos el padding (p-6 md:p-12) para que el contenido respire y usamos sombras más sutiles
    section.className = 'avoid-break section-content bg-white shadow-2xl shadow-blue-900/5 rounded-3xl p-6 md:p-12 mb-12 border border-white/20 transition-all duration-500';
    mainContent.appendChild(section);
});

// --- SISTEMA DE REINICIO MAESTRO (Minimalista - Fase Final) ---
// Inyectamos un disparador discreto al final del menú de navegación
const resetLi = document.createElement('li');
resetLi.className = 'mt-10 pt-4 border-t border-gray-100';
resetLi.innerHTML = `
    <button id="btn-reset-workbook" class="w-full flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-all duration-300 text-sm font-medium group">
        <span class="p-1 rounded-md group-hover:bg-red-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </span>
        <span>Borrar Progreso</span>
    </button>`;
navMenu.appendChild(resetLi);

document.getElementById('btn-reset-workbook').addEventListener('click', function() {
    // Protocolo de Seguridad: Doble Confirmación para evitar borrados accidentales
    if (confirm("⚠️ ¿Deseas resetear el workbook? Se perderán todas las respuestas actuales de este cuaderno.")) {
        if (confirm("🚨 Esta acción es irreversible y limpiará tu avance guardado. ¿Confirmar reinicio total?")) {
            // 1. Filtrado quirúrgico: Solo eliminamos llaves con el prefijo 'cuaderno_'
            // Esto respeta la sesión del usuario y otras configuraciones de Dreams.
            Object.keys(localStorage)
                .filter(key => key.startsWith('cuaderno_'))
                .forEach(key => localStorage.removeItem(key));
            
            // 2. Refresco de interfaz: Recargamos para limpiar el DOM y estado del script
            window.location.reload();
        }
    }
});
    
// --- INYECTAR CONTENIDO HTML EN SECCIONES ---
    const instructionsBoxClass = "bg-blue-50 border-l-4 border-brand-blue p-4 mb-8 rounded-r-lg";

    document.getElementById('evaluacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[0].icon} ${sectionsData[0].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Identificar la dependencia del equipo del líder en decisiones, procesos clave e incidentes imprevistos.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Marca con una "X" la casilla que mejor represente tu situación actual en la escala, siendo 1 "Nunca" y 5 "Siempre". Sé honesto contigo mismo, este diagnóstico es para tu beneficio.</p>
        </div>
        <div class="overflow-x-auto"><table class="w-full text-left">
            <thead class="bg-gray-50"><tr><th class="p-4 font-bold">Afirmación</th><th class="p-4 text-center font-bold">1<br>(Nunca)</th><th class="p-4 text-center font-bold">2<br>(Rara vez)</th><th class="p-4 text-center font-bold">3<br>(A veces)</th><th class="p-4 text-center font-bold">4<br>(Frecuentemente)</th><th class="p-4 text-center font-bold">5<br>(Siempre)</th></tr></thead>
            <tbody></tbody>
        </table></div>
        <div class="mt-6 text-right"><button id="calculate-score" class="bg-brand-orange text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors">Calcular Puntaje</button></div>
        <div id="score-result" class="mt-6 p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg" style="display: none;"><h4 class="font-bold text-lg brand-blue">Resultado del Diagnóstico</h4><p id="score-text" class="text-gray-700"></p></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión Final</h3><p class="text-gray-600 mt-2">Según mi diagnóstico, el mayor 'cuello de botella' en mi operación hoy es...</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="evaluacion" data-id="evaluacion_reflexion" placeholder="Ej: La autorización final de cotizaciones, ya que todas deben pasar por mí, retrasando la respuesta al cliente."></textarea></div>`;

    document.getElementById('vocacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[1].icon} ${sectionsData[1].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
             <p><strong>Objetivo del ejercicio:</strong> Ayudar al líder a diagnosticar si sus colaboradores clave están operando desde un enfoque en la ejecución de tareas o desde un enfoque de propiedad sobre los resultados. El fin es identificar la brecha entre el desempeño actual y el impacto estratégico esperado.</p>
             <p class="mt-2"><strong>Instrucción:</strong> Describe las funciones principales de 2 de tus puestos clave y cuál crees que es la mejor forma de delegar esta función para responsabilizarlos. Piensa en un colaborador clave y analiza sus acciones y decisiones recientes para diagnosticar su enfoque predominante.</p>
        </div>
        <div id="puestos-clave-container" class="space-y-8"></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Actividad Adicional</h3>
        <div class="mt-4"><label class="block font-semibold text-gray-700">Mi Problema Más Recurrente:</label><p class="text-sm text-gray-500 mb-2">De la lista anterior, identifica el enfoque de "Seguidor de Instrucciones/ Falta Ownership" que sea el más problemático para los resultados de tus colaboradores clave.</p><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_problema_recurrente" placeholder="Mi equipo espera instrucciones detalladas en lugar de proponer soluciones."></textarea></div>
        <div class="mt-4"><label class="block font-semibold text-gray-700">¿Cómo crees que este comportamiento impacta negativamente los resultados de tu PYME?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_impacto_negativo" placeholder="Retrasa los proyectos, genera retrabajos y aumenta mi carga operativa."></textarea></div>
        <div class="mt-4"><label class="block font-semibold text-gray-700">Del enfoque que identificaste en tu operación, ¿qué te impide resolverlo hoy?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="vocacion" data-id="vocacion_impedimento" placeholder="Falta de tiempo para capacitar y el temor a que cometan errores costosos."></textarea></div>
        </div>`;
    
    //-- MODIFICADO: Añadimos el contenedor grid para las dos columnas que generará el script más abajo.
    document.getElementById('prioridades').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[2].icon} ${sectionsData[2].title.substring(3)}</h2>
            <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Comprender cómo el colaborador puede resolver de manera satisfactoria y autónoma un problema con sentido de ownership.</p>
            <p class="mt-2"><strong>Instrucción:</strong> De tus 2 colaboradores clave, identifica un problema o situación desafiante que haya enfrentado en el último año en relación con las funciones de su puesto, y que desde tu perspectiva no haya tenido una solución óptima por parte del colaborador.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            </div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión</h3><p class="text-gray-600 mt-2">¿Qué harías diferente como líder para transformar una función de ejecución mecánica en uno orientado al resultado?</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="prioridades" data-id="prioridades_reflexion" placeholder="En lugar de solo asignar la tarea, explicaría el 'para qué' y el impacto que tiene en el cliente. Luego, establecería métricas de éxito claras."></textarea></div>`;
    
    // CÓDIGO A REEMPLAZAR EN app.js

    document.getElementById('mision').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[3].icon} ${sectionsData[3].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Documentar por escrito la nueva definición para un puesto clave que sea clara, potente e inspiradora, como base para guiar al colaborador y líder en qué significa Lograr Ownership/Dominar el puesto.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Adoptaremos las funciones identificadas en la "Definición Vocación Puestos Clave" para construir esta ficha.</p>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-2xl font-bold text-brand-blue mb-4">Ficha de Rol Estratégico - <span id="mision_p1_titulo_ficha" class="text-brand-orange">Puesto Clave 1</span></h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Nombre del Rol:</label><input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" data-section="mision" data-id="mision_p1_nombre_rol" placeholder="Ej: Gerente de Operaciones"></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Responsabilidades Clave (El Territorio):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-40" data-section="mision" data-id="mision_p1_responsabilidades" placeholder="1. Gestión de inventarios.&#10;2. Supervisión de logística y entregas.&#10;3. Optimización de procesos internos."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Misión del Rol (Objetivo Principal - El QUÉ y PARA QUÉ):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" data-section="mision" data-id="mision_p1_mision_rol" placeholder="Ej: Asegurar la entrega de proyectos al cliente dentro del plazo y presupuesto acordados, manteniendo un nivel de satisfacción superior al 90%."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Prioridades de Éxito del puesto:</label><p class="text-sm text-gray-500 mb-2">¿Cómo se mide qué se está logrando la vocación del puesto? Deben ser sencillos de rastrear.</p><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" placeholder="1. Cumplir meta de ventas&#10;2. Inventario actualizado y sin fallos&#10;3. Sucursal limpia y ordenada" data-section="mision" data-id="mision_p1_prioridades_exito"></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Plazo de Revisión:</label>
                    <div class="mt-2 flex flex-wrap gap-x-8 gap-y-2">
                        <label class="flex items-center cursor-pointer hover:text-brand-blue transition-colors"><input type="radio" name="plazo_revision_p1" class="autosave-input h-4 w-4 text-brand-blue" value="Semanal" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2 text-sm">Semanal</span></label>
                        <label class="flex items-center cursor-pointer hover:text-brand-blue transition-colors"><input type="radio" name="plazo_revision_p1" class="autosave-input h-4 w-4 text-brand-blue" value="Quincenal" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2 text-sm">Quincenal</span></label>
                        <label class="flex items-center cursor-pointer hover:text-brand-blue transition-colors"><input type="radio" name="plazo_revision_p1" class="autosave-input h-4 w-4 text-brand-blue" value="Mensual" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2 text-sm">Mensual</span></label>
                        <label class="flex items-center cursor-pointer hover:text-brand-blue transition-colors"><input type="radio" name="plazo_revision_p1" class="autosave-input h-4 w-4 text-brand-blue" value="Trimestral" data-section="mision" data-id="mision_p1_plazo_revision"> <span class="ml-2 text-sm">Trimestral</span></label>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-2xl font-bold text-brand-blue mb-4">Ficha de Rol Estratégico - <span id="mision_p2_titulo_ficha" class="text-brand-orange">Puesto Clave 2</span></h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Nombre del Rol:</label><input type="text" class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md" data-section="mision" data-id="mision_p2_nombre_rol" placeholder="Ej: Líder de Proyectos"></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Responsabilidades Clave (El Territorio):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-40" data-section="mision" data-id="mision_p2_responsabilidades" placeholder="1. Planificación de proyectos.&#10;2. Asignación de tareas al equipo.&#10;3. Comunicación con stakeholders."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Misión del Rol (Objetivo Principal - El QUÉ y PARA QUÉ):</label><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-24" data-section="mision" data-id="mision_p2_mision_rol" placeholder="Ej: Garantizar que los proyectos se completen a tiempo, dentro del presupuesto y cumplan con los estándares de calidad."></textarea></div>
                <div class="md:col-span-2"><label class="block font-semibold text-gray-700">Prioridades de Éxito del puesto:</label><p class="text-sm text-gray-500 mb-2">¿Cómo se mide qué se está logrando la vocación del puesto? Deben ser sencillos de rastrear.</p><textarea class="autosave-input w-full mt-1 p-2 border border-gray-300 rounded-md h-32" placeholder="1. 95% de proyectos entregados a tiempo.&#10;2. Satisfacción del cliente > 8/10.&#10;3. Presupuesto del proyecto sin desviaciones > 5%. " data-section="mision" data-id="mision_p2_prioridades_exito"></textarea></div>
                <div><label class="block font-semibold text-gray-700">Plazo de Revisión:</label><div class="mt-2 space-y-2">
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Semanal" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Semanal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Quincenal" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Quincenal</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Mensual" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Mensual</span></label>
                    <label class="flex items-center"><input type="radio" name="plazo_revision_p2" class="autosave-input" value="Trimestral" data-section="mision" data-id="mision_p2_plazo_revision"> <span class="ml-2">Trimestral</span></label>
                </div></div>
            </div>
        </div>
        
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Reflexión Adicional</h3>
            <div class="mt-4"><label class="block font-semibold text-gray-700">¿Qué recursos o capacitaciones crees que necesita la persona en este rol para cumplir exitosamente con su Misión y Responsabilidades Clave?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="mision" data-id="mision_recursos_necesarios" placeholder="Necesita un curso avanzado de Excel para análisis de datos y acceso a un software de gestión de inventarios."></textarea></div>
            <div class="mt-4"><label class="block font-semibold text-gray-700">¿Qué cambio observarías en tu relación con tu equipo si cada delegación incluyera propósito, claridad y seguimiento?</label><textarea class="autosave-input w-full mt-1 p-3 border border-gray-300 rounded-lg" data-section="mision" data-id="mision_cambio_observado" placeholder="El equipo sería más proactivo, habría menos errores por falta de comunicación y yo podría enfocarme más en la estrategia."></textarea></div>
        </div>`;
    
    document.getElementById('delegacion').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[4].icon} ${sectionsData[4].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Realizar un diagnóstico rápido de cuánto aplicas como líder las buenas prácticas de delegación.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Selecciona las últimas 3 tareas o proyectos importantes que delegaste a tu colaborador clave y evalúa si aplicaste cada una de las 7 buenas prácticas de delegación.</p>
        </div>
        <div class="overflow-x-auto"><table class="w-full text-left" id="delegacion-table">
            <thead><tr class="bg-gray-50">
                <th class="p-4 font-bold">Buena Práctica de Delegación</th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 1" data-section="delegacion" data-id="delegacion_tarea1_nombre"></th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 2" data-section="delegacion" data-id="delegacion_tarea2_nombre"></th>
                <th class="p-4 text-center font-bold"><input type="text" class="autosave-input w-full p-1 border border-gray-300 rounded" placeholder="Tarea 3" data-section="delegacion" data-id="delegacion_tarea3_nombre"></th>
                <th class="p-4 text-center font-bold bg-blue-100 text-brand-blue">Promedio</th>
            </tr></thead>
            <tbody></tbody>
            <tfoot><tr class="bg-gray-100 font-bold">
                <td class="p-4">Total</td>
                <td class="p-4 text-center" id="total-tarea1">0/7</td>
                <td class="p-4 text-center" id="total-tarea2">0/7</td>
                <td class="p-4 text-center" id="total-tarea3">0/7</td>
                <td class="p-4 text-center bg-blue-100 text-brand-blue" id="total-promedio">0/7</td>
            </tr></tfoot>
        </table></div>
        
        <div class="mt-8">
            <details class="bg-gray-50 rounded-lg border border-gray-200">
                <summary class="p-4 font-semibold text-brand-blue cursor-pointer flex items-center justify-between">
                    <span>Ver Buenas Prácticas de Delegación</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div class="p-4 border-t border-gray-200">
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Vincular siempre al objetivo de puesto</li>
                        <li>Formalizar en una breve sesión de coordinación</li>
                        <li>Diferencia entre Orientación a la Tarea y Orientación al Objetivo</li>
                        <li>Diferenciar tareas recurrentes y excepciones</li>
                        <li>Asignar fecha y hora de entrega</li>
                        <li>Respaldar siempre por escrito</li>
                        <li>Preguntas de control para consolidar el compromiso</li>
                    </ul>
                </div>
            </details>
        </div>
        
        <div class="mt-8">
            <h3 class="text-2xl font-bold text-gray-800">Conclusiones</h3>
            <div class="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700">
                <ol class="list-decimal list-inside space-y-2">
                    <li>¿Tus áreas de oportunidad (calificaciones bajas) podrían relacionarse con algún problema recurrente en tu operación?</li>
                    <li>¿Crees que sea relevante que como líder también abordes tus áreas de oportunidad?</li>
                    <li>¿Cuál de estas áreas de oportunidad te parece prioritario abordar primero?</li>
                </ol>
            </div>
            <textarea class="autosave-input w-full mt-4 p-3 border border-gray-300 rounded-lg h-32" data-section="delegacion" data-id="delegacion_observaciones" placeholder="Escribe aquí tus reflexiones basadas en las preguntas anteriores..."></textarea>
        </div>`;
    
    const feedbackContentHTML = (idPuesto, labelPuesto) => `
        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 class="text-2xl font-bold text-yellow-800 mb-4 text-center">Retroalimentación Semáforo: <span id="feedback_${idPuesto}_titulo_retro" class="text-brand-orange">${labelPuesto}</span></h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input type="text" class="autosave-input p-2 border rounded" placeholder="Nombre del colaborador" data-section="feedback" data-id="feedback_${idPuesto}_nombre">
                <input type="date" class="autosave-input p-2 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_fecha">
                <input type="text" class="autosave-input p-2 border rounded" placeholder="Rol / puesto" data-section="feedback" data-id="feedback_${idPuesto}_rol">
            </div>
            <div class="mb-6"><label class="block font-semibold mb-1">Objetivo de Puesto a Evaluar:</label><textarea class="autosave-input w-full p-2 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_objetivo" placeholder="Ej: Reducir el tiempo de respuesta..."></textarea></div>
            <div class="mb-6"><label class="block font-semibold mb-1">Prioridades del puesto:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-32" data-section="feedback" data-id="feedback_${idPuesto}_prioridades" placeholder="1. Atender tickets..."></textarea></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div><h4 class="font-bold text-lg mb-2">1. Autoevaluación</h4><div class="space-y-3" id="semaforo-colaborador-${idPuesto}"></div></div>
                <div><h4 class="font-bold text-lg mb-2">2. Evaluación del Líder</h4><div class="space-y-3" id="semaforo-lider-${idPuesto}"></div></div>
            </div>
            <div class="mb-6"><h4 class="font-bold text-lg mb-2">3. Retroalimentación</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label class="font-semibold">Colaborador:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-40" data-section="feedback" data-id="feedback_${idPuesto}_retro_colaborador"></textarea></div>
                <div><label class="font-semibold">Líder:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-40" data-section="feedback" data-id="feedback_${idPuesto}_retro_lider"></textarea></div>
            </div></div>
            <div>
                <h4 class="font-bold text-lg mb-2">4. Plan de Acción Acordado</h4>
                <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead><tr class="bg-gray-200"><th class="p-2">Acción</th><th class="p-2">Responsable</th><th class="p-2">Fecha Límite</th><th class="p-2">Próxima Sesión</th></tr></thead>
                    <tbody>
                        ${Array.from({ length: 5 }, (_, i) => `
                            <tr>
                                <td><input type="text" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_accion${i + 1}_desc"></td>
                                <td><input type="text" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_accion${i + 1}_resp"></td>
                                <td><input type="date" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_accion${i + 1}_fecha"></td>
                                <td><input type="date" class="autosave-input w-full p-1 border rounded" data-section="feedback" data-id="feedback_${idPuesto}_accion${i + 1}_proxima_sesion"></td>
                            </tr>`).join('')}
                    </tbody>
                </table></div>
            </div>
        </div>`;

    document.getElementById('feedback').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[5].icon} ${sectionsData[5].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo:</strong> Implementar un sistema para mejorar los resultados y Ownership.</p>
        </div>
        
        <div class="flex gap-2 mb-6 border-b border-gray-200">
            <button class="feedback-tab-btn active px-6 py-2 font-bold text-brand-blue border-b-2 border-brand-blue transition-all" data-target="feedback-p1-content">Puesto Clave 1</button>
            <button class="feedback-tab-btn px-6 py-2 font-bold text-gray-400 hover:text-brand-blue transition-all" data-target="feedback-p2-content">Puesto Clave 2</button>
        </div>

        <div id="feedback-p1-content" class="feedback-tab-content">
            ${feedbackContentHTML('p1', 'Puesto Clave 1')}
        </div>
        <div id="feedback-p2-content" class="feedback-tab-content hidden">
            ${feedbackContentHTML('p2', 'Puesto Clave 2')}
        </div>`;

    document.getElementById('roleplay').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[6].icon} ${sectionsData[6].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Permitir la práctica del ciclo dinámico de delegación y feedback en un entorno seguro, y afinar las habilidades para conducir entrevistas de seguimiento.</p>
            <p class="mt-2"><strong>Instrucción:</strong> Si estás en el rol de "Observador" durante los ejercicios de role-play, utiliza esta tabla para tomar notas estructuradas. Tu feedback es crucial para el aprendizaje de tus compañeros.</p>
        </div>
        <div class="mb-6"><h4 class="font-bold text-lg">Escenario de Role-Play:</h4><div class="flex space-x-4 mt-2">
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_rigidez"> Rigidez en la lista de tareas</label>
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_imprevistas"> Delegación de tareas imprevistas</label>
            <label><input type="checkbox" class="autosave-input" data-section="roleplay" data-id="roleplay_escenario_semaforo"> Feedback con semáforo</label>
        </div></div>
        <div class="overflow-x-auto"><table class="w-full text-left">
            <thead><tr class="bg-gray-50"><th class="p-4 font-bold">Aspectos Clave a Observar</th><th class="p-4 font-bold">Aciertos / Fortalezas del Líder</th><th class="p-4 font-bold">Oportunidades de Mejora / Recomendaciones</th></tr></thead>
            <tbody id="roleplay-table-body"></tbody>
        </table></div>
        <div class="mt-8"><h3 class="text-2xl font-bold text-gray-800">Mi Aprendizaje del Role-Play</h3><p class="text-gray-600 mt-2">¿Qué idea o estrategia te llevas de esta práctica que aplicarás en tu PYME?</p><textarea class="autosave-input w-full mt-2 p-3 border border-gray-300 rounded-lg h-32" data-section="roleplay" data-id="roleplay_aprendizaje" placeholder="Me di cuenta que tiendo a dar la solución en lugar de guiar con preguntas. Practicaré el hacer preguntas de control para asegurar el entendimiento."></textarea></div>`;

    const ganttTableHTML = (idPuesto) => `
        <div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100 mb-10">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-brand-blue text-white">
                        <th class="p-4 border-b font-bold w-1/3 text-sm uppercase">Acciones Acordadas</th>
                        <th class="p-4 border-b font-bold w-1/4 text-sm uppercase">Fechas Clave</th>
                        <th class="p-4 border-b font-bold text-sm uppercase">¿Posible Obstáculo?</th>
                        <th class="p-4 border-b font-bold text-sm uppercase">¿Cómo lo Superaré?</th>
                    </tr>
                </thead>
                <tbody>
                    ${[1, 2, 3, 4, 5].map(i => `
                        <tr class="border-b bg-gray-50/30">
                            <td rowspan="2" class="p-4 align-top font-medium text-gray-700 border-r">
                                <div id="gantt_${idPuesto}_a${i}_desc" class="italic text-gray-400 text-sm">Sin acción definida en Ej. 6</div>
                            </td>
                            <td class="p-3 text-xs border-r">
                                <span class="font-bold text-brand-blue">LÍMITE:</span> 
                                <span id="gantt_${idPuesto}_a${i}_limite" class="text-gray-600">--</span>
                            </td>
                            <td rowspan="2" class="p-2 border-r bg-white">
                                <textarea class="autosave-input w-full p-2 text-xs border rounded-md h-20 focus:ring-1 focus:ring-brand-orange" data-section="plan" data-id="plan_${idPuesto}_a${i}_obstaculo" placeholder="¿Qué podría fallar?"></textarea>
                            </td>
                            <td rowspan="2" class="p-2 bg-white">
                                <textarea class="autosave-input w-full p-2 text-xs border rounded-md h-20 focus:ring-1 focus:ring-green-500" data-section="plan" data-id="plan_${idPuesto}_a${i}_estrategia" placeholder="Plan de mitigación..."></textarea>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-3 text-xs border-r">
                                <span class="font-bold text-brand-orange">PRÓXIMA SESIÓN:</span> 
                                <span id="gantt_${idPuesto}_a${i}_prox" class="text-gray-600">--</span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;

    document.getElementById('plan').innerHTML = `
        <h2 class="text-3xl font-bold brand-orange mb-4 flex items-center gap-3">${sectionsData[7].icon} ${sectionsData[7].title.substring(3)}</h2>
        <div class="${instructionsBoxClass}">
            <p><strong>Objetivo del ejercicio:</strong> Visualizar el cronograma de ejecución y blindar el cumplimiento de los acuerdos mediante la gestión proactiva de riesgos.</p>
            <p class="mt-2 text-sm"><strong>Nota:</strong> Las acciones y fechas se sincronizan automáticamente desde el <strong>Ejercicio 6. Feedback Ágil</strong>.</p>
        </div>

        <h3 class="text-xl font-bold text-brand-blue mb-4">Cronograma Detallado: <span id="plan_puesto1_titulo" class="text-brand-orange">Puesto Clave 1</span></h3>
        ${ganttTableHTML('p1')}

        <h3 class="text-xl font-bold text-brand-blue mb-4 mt-12">Cronograma Detallado: <span id="plan_puesto2_titulo" class="text-brand-orange">Puesto Clave 2</span></h3>
        ${ganttTableHTML('p2')}
    `;
    

    // --- LÓGICA DE NAVEGACIÓN Y ESTADO ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-content');

    function showSection(hash) {
        sections.forEach(section => {
            section.classList.toggle('active', '#' + section.id === hash);
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
        
        if (hash === '#plan') {
            updatePlanTitles();
        }
    }

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

    // --- LÓGICA DE COMPLETITUD Y PROGRESO ---
    function checkCompletion() {
        let completedSections = 0;
        const sectionsToCheck = sectionsData.filter(s => s.id !== 'resumen');

        sectionsToCheck.forEach(data => {
            const sectionInputs = document.querySelectorAll(`.autosave-input[data-section="${data.id}"]`);
            let isComplete = false;
            if (sectionInputs.length > 0) {
                isComplete = Array.from(sectionInputs).some(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') return input.checked;
                    return input.value.trim() !== '';
                });
            }
            
            const navLink = document.querySelector(`.nav-link[href="#${data.id}"]`);
            const icon = navLink.querySelector('.completion-icon');
            if (isComplete) {
                completedSections++;
                icon.classList.remove('text-gray-400');
                icon.classList.add('text-green-500');
            } else {
                icon.classList.add('text-gray-400');
                icon.classList.remove('text-green-500');
            }
        });
        const progress = (completedSections / sectionsToCheck.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    // --- AUTOSAVE ---
    function loadSavedData() {
        const allInputs = document.querySelectorAll('.autosave-input');
        allInputs.forEach(input => {
            const savedValue = localStorage.getItem('cuaderno_' + input.dataset.id);
            if (savedValue) {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    if (input.value === savedValue || (input.type === 'checkbox' && savedValue === 'true')) {
                        input.checked = true;
                    }
                } else {
                    input.value = savedValue;
                }
            }
        });
        
        // --- DISPARADORES DE DINÁMICAS Y TRAZABILIDAD ---
        // 1. Recalcula promedios de la tabla de delegación (Ej. 5)
        updateDelegacionTotals();
        // 2. Actualiza la barra de progreso y checks de navegación
        checkCompletion();
        // 3. Renderiza el reporte final con la data recuperada
        populateFinalReport();
        // 4. Sincroniza Títulos, Herencia de Objetivos y Tablero Gantt (Ej. 3, 4, 6 y 8)
        updatePlanTitles();
    }

    mainContent.addEventListener('input', function(e) {
        if (e.target.classList.contains('autosave-input')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            
            // Guardar el valor actual
            localStorage.setItem('cuaderno_' + input.dataset.id, valueToSave);

            // --- LÓGICA DE HERENCIA AUTOMÁTICA (RERESOLUCIÓN DE IDENTIDAD) ---
            const replicar = (targetId, value) => {
                // Mapeo de Identidad: Vincula IDs genéricos con los IDs específicos del DOM (Hallazgo C)
                const mappings = {
                    'feedback_nombre': ['feedback_p1_nombre', 'feedback_p2_nombre']
                };

                // Si el ID tiene mapeo, lo usamos; si no, usamos el ID original
                const targetIds = mappings[targetId] || [targetId];

                targetIds.forEach(id => {
                    const targets = document.querySelectorAll(`.autosave-input[data-id="${id}"]`);
                    targets.forEach(t => {
                        if (t !== input) {
                            t.value = value;
                            localStorage.setItem('cuaderno_' + id, value);
                        }
                    });
                });
            };

            // 1. Replicar Nombre del Participante
            if (input.dataset.id === 'nombre_participante') replicar('feedback_nombre', valueToSave);
            
            // 2. Replicar Títulos de Puestos a Secciones de Misión, Feedback, Plan de Acción y Prioridades
            if (input.dataset.id === 'vocacion_p1_titulo') {
                replicar('mision_p1_nombre_rol', valueToSave);
                replicar('feedback_p1_rol', valueToSave); // ID actualizado tras la refactorización
                
                // Actualización visual en múltiples secciones (3, 4, 6 y 8)
                const spanPrio1 = document.getElementById('prioridades_p1_titulo');
                const spanMision1 = document.getElementById('mision_p1_titulo_ficha');
                const spanRetro1 = document.getElementById('feedback_p1_titulo_retro');
                const spanPlan1 = document.getElementById('plan_puesto1_titulo');
                
                if(spanPrio1) spanPrio1.textContent = valueToSave || 'Puesto Clave 1';
                if(spanMision1) spanMision1.textContent = valueToSave || 'Puesto Clave 1';
                if(spanRetro1) spanRetro1.textContent = valueToSave || 'Puesto Clave 1';
                if(spanPlan1) spanPlan1.textContent = valueToSave || 'Puesto Clave 1';
            }

            if (input.dataset.id === 'vocacion_p2_titulo') {
                replicar('mision_p2_nombre_rol', valueToSave);
                replicar('feedback_p2_rol', valueToSave); // ID actualizado tras la refactorización
                
                // Actualización visual en múltiples secciones (3, 4, 6 y 8)
                const spanPrio2 = document.getElementById('prioridades_p2_titulo');
                const spanMision2 = document.getElementById('mision_p2_titulo_ficha');
                const spanRetro2 = document.getElementById('feedback_p2_titulo_retro');
                const spanPlan2 = document.getElementById('plan_puesto2_titulo');
                
                if(spanPrio2) spanPrio2.textContent = valueToSave || 'Puesto Clave 2';
                if(spanMision2) spanMision2.textContent = valueToSave || 'Puesto Clave 2';
                if(spanRetro2) spanRetro2.textContent = valueToSave || 'Puesto Clave 2';
                if(spanPlan2) spanPlan2.textContent = valueToSave || 'Puesto Clave 2';
            }

            // 3. Replicar Enfoque (Ej. 2) y Misión (Ej. 4) a Feedback (Ej. 6)
            // Sincronización del Enfoque del Ejercicio 2
            if (input.dataset.id === 'vocacion_p1_enfoque') replicar('feedback_p1_objetivo', valueToSave);
            if (input.dataset.id === 'vocacion_p2_enfoque') replicar('feedback_p2_objetivo', valueToSave);
            
            // Sincronización de la Misión del Ejercicio 4 (con IDs actualizados a la nueva estructura)
            if (input.dataset.id === 'mision_p1_mision_rol') replicar('feedback_p1_objetivo', valueToSave);
            if (input.dataset.id === 'mision_p1_prioridades_exito') replicar('feedback_p1_prioridades', valueToSave);
            // ---------------------------------------------------------------

            if(input.closest('#delegacion-table')) {
                updateDelegacionTotals();
            }
            // Sincronización instantánea de Títulos y Tablero Gantt
            if (input.dataset.section === 'vocacion' || input.dataset.section === 'feedback') {
                updatePlanTitles();
            }
            checkCompletion();
            populateFinalReport();
        }
    });
        mainContent.addEventListener('change', function(e) {
            if (e.target.classList.contains('autosave-input') && (e.target.type === 'radio' || e.target.type === 'checkbox' || e.target.tagName === 'SELECT')) {
            const input = e.target;
            const valueToSave = (input.type === 'checkbox') ? input.checked : input.value;
            localStorage.setItem('cuaderno_' + input.dataset.id, valueToSave);
            if(input.closest('#delegacion-table')) {
                updateDelegacionTotals();
            }
            checkCompletion();
            }
    });

    // --- LÓGICA ESPECIALIZADA POR SECCIÓN ---

    function updatePlanTitles() {
        const placeholderP1 = 'Puesto Clave 1';
        const placeholderP2 = 'Puesto Clave 2';
        const emptyAction = 'Sin acción definida en Ej. 6';
        
        const tituloP1 = localStorage.getItem('cuaderno_vocacion_p1_titulo') || placeholderP1;
        const tituloP2 = localStorage.getItem('cuaderno_vocacion_p2_titulo') || placeholderP2;
        
        // --- 1. Sincronización de Títulos Visuales (Spans) ---
        const syncSpan = (id, val, defaultVal) => {
            const el = document.getElementById(id);
            if(el) el.textContent = (val && val.trim() !== '') ? val : defaultVal;
        };

        syncSpan('prioridades_p1_titulo', tituloP1, placeholderP1);
        syncSpan('prioridades_p2_titulo', tituloP2, placeholderP2);
        syncSpan('mision_p1_titulo_ficha', tituloP1, placeholderP1);
        syncSpan('mision_p2_titulo_ficha', tituloP2, placeholderP2);
        syncSpan('feedback_p1_titulo_retro', tituloP1, placeholderP1);
        syncSpan('feedback_p2_titulo_retro', tituloP2, placeholderP2);
        syncSpan('plan_puesto1_titulo', tituloP1, placeholderP1);
        syncSpan('plan_puesto2_titulo', tituloP2, placeholderP2);

        // --- AJUSTE QUIRÚRGICO: Sincronización de etiquetas en cuadros de prioridad (Sesión 8) ---
        document.querySelectorAll('.p1-name').forEach(el => el.textContent = tituloP1 || placeholderP1);
        document.querySelectorAll('.p2-name').forEach(el => el.textContent = tituloP2 || placeholderP2);

        // --- 2. Sincronización de Datos (Inputs de Feedback) ---
        const enfoqueP1 = localStorage.getItem('cuaderno_vocacion_p1_enfoque') || '';
        const enfoqueP2 = localStorage.getItem('cuaderno_vocacion_p2_enfoque') || '';
        const inputObjP1 = document.querySelector('[data-id="feedback_p1_objetivo"]');
        const inputObjP2 = document.querySelector('[data-id="feedback_p2_objetivo"]');
        if(inputObjP1 && enfoqueP1) inputObjP1.value = enfoqueP1;
        if(inputObjP2 && enfoqueP2) inputObjP2.value = enfoqueP2;

        // --- 3. Sincronización del Tablero Gantt (Sección 8) ---
        ['p1', 'p2'].forEach(p => {
            for (let i = 1; i <= 5; i++) {
                // Obtener datos guardados de la Sección 6
                const desc = localStorage.getItem(`cuaderno_feedback_${p}_accion${i}_desc`) || '';
                const limite = localStorage.getItem(`cuaderno_feedback_${p}_accion${i}_fecha`) || '--';
                const prox = localStorage.getItem(`cuaderno_feedback_${p}_accion${i}_proxima_sesion`) || '--';

                // Ubicar elementos de destino en el Gantt
                const elDesc = document.getElementById(`gantt_${p}_a${i}_desc`);
                const elLimite = document.getElementById(`gantt_${p}_a${i}_limite`);
                const elProx = document.getElementById(`gantt_${p}_a${i}_prox`);

                if(elDesc) {
                    elDesc.textContent = desc.trim() !== '' ? desc : emptyAction;
                    elDesc.classList.toggle('italic', desc.trim() === '');
                    elDesc.classList.toggle('text-gray-400', desc.trim() === '');
                }
                if(elLimite) elLimite.textContent = limite;
                if(elProx) elProx.textContent = prox;
            }
        });
    }


    // --- LÓGICA DE PESTAÑAS (TABS) PARA FEEDBACK ---
    mainContent.addEventListener('click', function(e) {
        if (e.target.classList.contains('feedback-tab-btn')) {
            const btns = document.querySelectorAll('.feedback-tab-btn');
            const contents = document.querySelectorAll('.feedback-tab-content');
            const targetId = e.target.dataset.target;

            // Actualizar estado visual de los botones
            btns.forEach(btn => {
                const isActive = btn === e.target;
                btn.classList.toggle('active', isActive);
                btn.classList.toggle('text-brand-blue', isActive);
                btn.classList.toggle('border-brand-blue', isActive);
                btn.classList.toggle('border-b-2', isActive);
                btn.classList.toggle('text-gray-400', !isActive);
            });

            // Mostrar/Ocultar el contenido correspondiente
            contents.forEach(content => {
                content.classList.toggle('hidden', content.id !== targetId);
            });
        }
    });

    // Sección 1: Dependencia operativa
    const questions = [
        "Las decisiones importantes se detienen si no estoy yo para aprobarlas.", "Mi equipo me consulta cómo resolver problemas que podrían solucionar ellos mismos.", "Siento que tengo que microgestionar las tareas para asegurar que se hagan correctamente.", "Dedico la mayor parte de mi tiempo a \"apagar incendios\" operativos inesperados.", "Los proyectos o iniciativas importantes se retrasan si no estoy directamente involucrado.", "Mi equipo tiene dificultades para tomar iniciativa sin una instrucción explícita.", "Me siento abrumado(a) por la cantidad de tareas operativas diarias que solo yo puedo resolver."
    ];
    const tableBody = document.querySelector('#evaluacion tbody');
    questions.forEach((q, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        let cells = `<td class="p-4">${q}</td>`;
        for (let i = 1; i <= 5; i++) {
            cells += `<td class="p-4 text-center"><input type="radio" name="q${index}" value="${i}" class="autosave-input h-5 w-5 text-brand-blue focus:ring-brand-orange" data-section="evaluacion" data-id="evaluacion_q${index}"></td>`;
        }
        row.innerHTML = cells;
        tableBody.appendChild(row);
    });
    document.getElementById('calculate-score').addEventListener('click', function() {
        let totalScore = 0, questionsAnswered = 0;
        for (let i = 0; i < questions.length; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                totalScore += parseInt(selected.value);
                questionsAnswered++;
            }
        }
        const scoreResultDiv = document.getElementById('score-result'), scoreText = document.getElementById('score-text');
        if (questionsAnswered < questions.length) {
            scoreText.textContent = 'Por favor, responde todas las preguntas para calcular tu puntaje.';
            scoreResultDiv.style.display = 'block';
            return;
        }
        let resultText = `Tu puntaje es ${totalScore}. `;
        if (totalScore <= 14) resultText += "Nivel de Dependencia Bajo: ¡Excelente! Tu equipo opera con un alto grado de autonomía.";
        else if (totalScore <= 25) resultText += "Nivel de Dependencia Moderado: Hay un buen equilibrio, pero existen áreas donde el equipo aún depende de ti.";
        else resultText += "Nivel de Dependencia Alto: Eres un cuello de botella significativo para tu operación. Es crucial que empieces a delegar.";
        scoreText.textContent = resultText;
        scoreResultDiv.style.display = 'block';
    });

// --- CÓDIGO A REEMPLAZAR EN app.js ---

// Sección 2: Vocación Puestos Clave
const puestosContainer = document.getElementById('puestos-clave-container');
for (let i = 1; i <= 2; i++) {
    const puestoDiv = document.createElement('div');
    // Optimizamos el contenedor interno: eliminamos el fondo pesado y el padding excesivo para ganar ancho real
    puestoDiv.className = 'avoid-break border-b border-gray-100 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0';
    puestoDiv.innerHTML = `<h3 class="text-xl font-bold text-gray-800 mb-4">Puesto Clave ${i}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Título del puesto" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_titulo">
            <input type="text" placeholder="Antigüedad de Creación" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_antiguedad_creacion">
            <input type="number" placeholder="Personas que han ocupado el puesto (Histórico)" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_num_personas">
            <input type="text" placeholder="Antigüedad persona actual" class="autosave-input p-2 border rounded" data-section="vocacion" data-id="vocacion_p${i}_antiguedad_actual">
        </div>
        <div class="mt-4"><label class="block font-semibold">Funciones Principales</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-24" data-section="vocacion" data-id="vocacion_p${i}_funciones" placeholder="1. Supervisar equipo de ventas.&#10;2. Realizar reportes semanales.&#10;3. Atender clientes clave."></textarea></div>
        <div class="mt-4"><label class="block font-semibold">Enfoque en el Objetivo (El "Para Qué")</label><textarea class="autosave-input w-full mt-1 p-2 border rounded h-24" data-section="vocacion" data-id="vocacion_p${i}_enfoque" placeholder="Asegurar que el equipo alcance la meta de ventas mensual para garantizar la rentabilidad del área."></textarea></div>`;
    puestosContainer.appendChild(puestoDiv);
}

    // Sección 3: Prioridades de Mejora
    const prioridadesContainer = document.querySelector('#prioridades .grid');
    //-- CÓDIGO RESTAURADO: Este loop genera las dos columnas para la sección 3.
    for (let i = 1; i <= 2; i++) {
        const div = document.createElement('div');
        div.className = 'bg-gray-50 p-6 rounded-lg';
        div.innerHTML = `<h3 class="text-xl font-bold text-gray-800 mb-4">Análisis para <span id="prioridades_p${i}_titulo" class="text-brand-orange">Puesto Clave ${i}</span></h3>
            <div class="space-y-4">
            <div><label class="block font-semibold text-gray-700">La Situación Inicial:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_situacion" placeholder="Un cliente importante se quejó por un retraso en la entrega."></textarea></div>
            <div><label class="block font-semibold text-gray-700">Comportamiento / Decisión:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_comportamiento" placeholder="El colaborador me reenvió el correo del cliente sin proponer una solución."></textarea></div>
            <div><label class="block font-semibold text-gray-700">El Resultado:</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_resultado" placeholder="Tuve que intervenir, contactar al cliente y resolver el problema yo mismo."></textarea></div>
            <div><label class="block font-semibold text-gray-700">El Ownership (Abordaje idóneo):</label><textarea class="autosave-input w-full mt-1 p-2 border rounded" data-section="prioridades" data-id="prioridades_c${i}_ownership" placeholder="Analizar la causa del retraso, contactar al cliente con una disculpa y una nueva fecha, y luego informarme con un plan."></textarea></div>
            </div>`;
        prioridadesContainer.appendChild(div);
    }
    
    // Sección 5: Delegación Efectiva
    const delegacionTableBody = document.querySelector('#delegacion-table tbody');
    const delegacionPreguntas = ["¿Vinculaste la tarea con Misión del puesto?", "¿Sugeriste que se repasara el objetivo?", "¿Aclaraste si era tarea recurrente?", "¿Estableciste FECHA y HORA exactas?", "¿Hubo respaldo ESCRITO?", "¿Confirmaste si tenía recursos?", "¿Preguntaste cómo podías ayudar?"];
    delegacionPreguntas.forEach((pregunta, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        let cells = `<td class="p-4">${pregunta}</td>`;
        for (let i = 1; i <= 3; i++) {
            cells += `<td class="p-4 text-center"><select class="autosave-input p-2 border rounded delegacion-select" data-tarea="${i}" data-section="delegacion" data-id="delegacion_t${i}_p${index}"><option value="--">--</option><option value="1">Sí</option><option value="0">No</option></select></td>`;
        }
        cells += `<td class="p-4 text-center font-bold bg-blue-50" id="promedio-p${index}">0%</td>`;
        row.innerHTML = cells;
        delegacionTableBody.appendChild(row);
    });

    function updateDelegacionTotals() {
        for (let i = 1; i <= 3; i++) {
            let total = 0;
            document.querySelectorAll(`.delegacion-select[data-tarea="${i}"]`).forEach(s => {
                if(s.value !== '--') total += parseInt(s.value)
            });
            document.getElementById(`total-tarea${i}`).textContent = `${total}/7`;
        }
        updateDelegacionAverages(); 
    }

    function updateDelegacionAverages() {
        let totalSum = 0;
        
        delegacionPreguntas.forEach((pregunta, index) => {
            let rowSum = 0;
            let answeredCount = 0;
            for (let i = 1; i <= 3; i++) {
                const select = document.querySelector(`select[data-id="delegacion_t${i}_p${index}"]`);
                if (select.value !== '--') {
                    rowSum += parseInt(select.value);
                    answeredCount++;
                }
            }
            const average = answeredCount > 0 ? (rowSum / answeredCount) * 100 : 0;
            document.getElementById(`promedio-p${index}`).textContent = `${average.toFixed(0)}%`;
        });

        for (let i = 1; i <= 3; i++) {
            const totalText = document.getElementById(`total-tarea${i}`).textContent;
            totalSum += parseInt(totalText.split('/')[0]);
        }

        const averageTotal = totalSum / 3;
        document.getElementById('total-promedio').textContent = `${averageTotal.toFixed(1)}/7`;
    }

    // Sección 6: Feedback Semáforo (Visual)
    const semaforoOptions = [
        { color: 'Verde', text: 'Cumplí el objetivo con excelencia.', ring: 'ring-green-500', bg: 'bg-green-100', text_color: 'text-green-800' },
        { color: 'Azul', text: 'Buen desempeño, con mejora menor.', ring: 'ring-blue-500', bg: 'bg-blue-100', text_color: 'text-blue-800' },
        { color: 'Amarillo', text: 'Resultado regular, requiere ajustes.', ring: 'ring-yellow-500', bg: 'bg-yellow-100', text_color: 'text-yellow-800' },
        { color: 'Rojo', text: 'Insuficiente, demanda intervención.', ring: 'ring-red-500', bg: 'bg-red-100', text_color: 'text-red-800' }
    ];
    // Poblar semáforos para ambos puestos (P1 y P2)
    ['p1', 'p2'].forEach(idPuesto => {
        const colabDiv = document.getElementById(`semaforo-colaborador-${idPuesto}`);
        const liderDiv = document.getElementById(`semaforo-lider-${idPuesto}`);
        
        semaforoOptions.forEach(opt => {
            // Generar HTML para Autoevaluación (Colaborador)
            if (colabDiv) {
                colabDiv.innerHTML += `
                    <div>
                        <input type="radio" name="semaforo_colaborador_${idPuesto}" id="sc_${idPuesto}_${opt.color}" class="autosave-input semaforo-radio sr-only" value="${opt.color}" data-section="feedback" data-id="feedback_${idPuesto}_semaforo_colaborador">
                        <label for="sc_${idPuesto}_${opt.color}" style="--tw-ring-color: ${opt.ring.replace('ring-','')}" class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${opt.bg} ${opt.text_color}">
                            <span class="font-bold">${opt.color}:</span><span class="ml-2">${opt.text}</span>
                        </label>
                    </div>`;
            }
            // Generar HTML para Evaluación Definitiva (Líder)
            if (liderDiv) {
                liderDiv.innerHTML += `
                    <div>
                        <input type="radio" name="semaforo_lider_${idPuesto}" id="sl_${idPuesto}_${opt.color}" class="autosave-input semaforo-radio sr-only" value="${opt.color}" data-section="feedback" data-id="feedback_${idPuesto}_semaforo_lider">
                        <label for="sl_${idPuesto}_${opt.color}" style="--tw-ring-color: ${opt.ring.replace('ring-','')}" class="flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${opt.bg} ${opt.text_color}">
                            <span class="font-bold">${opt.color}:</span><span class="ml-2">${opt.text}</span>
                        </label>
                    </div>`;
            }
        });
    });
    
    // Sección 7: Role-Play
    const roleplayTableBody = document.getElementById('roleplay-table-body');
    const roleplayAspectos = [`Claridad del Objetivo/Misión`, `Tipo de Preguntas`, `Manejo del Semáforo / Feedback`, `Acuerdo de Acciones`, `Comunicación No Verbal`];
    roleplayAspectos.forEach((aspecto, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        row.innerHTML = `<td class="p-4">${aspecto}</td>
            <td class="p-2"><textarea class="autosave-input w-full p-2 border rounded" data-section="roleplay" data-id="roleplay_a${index}_aciertos" placeholder="Aciertos observados..."></textarea></td>
            <td class="p-2"><textarea class="autosave-input w-full p-2 border rounded" data-section="roleplay" data-id="roleplay_a${index}_mejoras" placeholder="Oportunidades de mejora..."></textarea></td>`;
        if (roleplayTableBody) roleplayTableBody.appendChild(row);
    });

// --- MOTOR DE EXPORTACIÓN REFORZADO (DREAMS ENGINE V1.2) ---
document.getElementById('export-pdf').addEventListener('click', async function() {
    const content = document.getElementById('reporte');
    const loadingIndicator = document.getElementById('loading');
    
    if (!content) return alert('Error: No se halló el contenedor maestro del reporte.');

    // Validación de Librerías Críticas (Protección contra fallos de carga)
    if (typeof html2canvas === 'undefined') {
        return alert('Aviso técnico: La librería de captura (html2canvas) no se ha cargado. Por favor, verifica tu conexión a internet y recarga la página.');
    }

    // 1. RE-POBLACIÓN FORZADA: Aseguramos que la última data escrita esté en el reporte
    if (typeof populateFinalReport === 'function') populateFinalReport();

    loadingIndicator.style.display = 'block';

    try {
        // 2. PREPARACIÓN DE ESCENA (Optimización de Visibilidad - Fase 3)
        // Sustituimos cssText por setProperty para asegurar prioridad absoluta sobre Tailwind
        // Desplazamos el reporte a una zona "fantasma" fuera de la vista para su captura íntegra.
        content.classList.remove('hidden');
        content.style.setProperty('display', 'block', 'important');
        content.style.setProperty('position', 'absolute', 'important');
        content.style.setProperty('left', '-9999px', 'important');
        content.style.setProperty('width', '1000px', 'important');
        content.style.setProperty('background', 'white', 'important');

        // 3. RETARDO QUIRÚRGICO DE ESTABILIZACIÓN
        // Aumentamos a 1 segundo para garantizar que el motor de JS de Chrome/Safari termine de dibujar el Cronograma
        await new Promise(resolve => setTimeout(resolve, 1000));

        const canvas = await html2canvas(content, { 
            scale: 2, 
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 1000,
            windowWidth: 1000, // Forzamos al canvas a creer que la ventana mide 1000px
            onclone: (clonedDoc) => {
                // Aseguramos que en el clon el reporte sea visible por si el original falla
                const clonedReport = clonedDoc.getElementById('reporte');
                if (clonedReport) {
                    clonedReport.style.display = 'block';
                    clonedReport.style.visibility = 'visible';
                    clonedReport.style.opacity = '1';
                }
            }
        });

        // 4. RESTAURACIÓN INMEDIATA
        content.classList.add('hidden');
        content.style.cssText = ''; 

        // 5. ENSAMBLAJE PDF (REFORZADO - Resolución de Namespace)
        const jsPDFConstructor = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
        
        if (!jsPDFConstructor) {
            throw new Error("Librería jsPDF no detectada. Verifique la conexión a internet o el enlace CDN.");
        }
        
        const pdf = new jsPDFConstructor('p', 'mm', 'a4');
        
        // Convertimos a JPEG para máxima compatibilidad con jsPDF
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (imgData === "data:,") throw new Error("Canvas capturado vacío.");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        // Cálculo manual de proporciones para evitar el error 'UNKNOWN' de getImageProperties
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;
        const imgHeightInMm = pdfWidth / ratio;

        let heightLeft = imgHeightInMm;
        let position = 0;

        // Inserción explícita especificando el formato 'JPEG'
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeightInMm, undefined, 'FAST');
        heightLeft -= pdfHeight;

        // Bucle de paginación unificado (Format: JPEG - Fase 3)
        while (heightLeft > 0) {
            position = heightLeft - imgHeightInMm;
            pdf.addPage();
            // Unificamos a 'JPEG' para que coincida con el buffer original y evitar corrupción de datos
            pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeightInMm, undefined, 'FAST');
            heightLeft -= pdfHeight;
        }

        const participantName = (localStorage.getItem('cuaderno_nombre_participante') || 'Participante').trim();
        pdf.save(`Plan_Maestro_Accion_${participantName.replace(/\s+/g, '_')}.pdf`);

    } catch (err) {
        console.error("Critical Error en Exportación Dreams:", err);
        
        let userMessage = "⚠️ Aviso técnico: El proceso de exportación ha fallado.";
        
        // --- HARDENING: Detección de errores de Origen Cruzado (Fase 5) ---
        // Si el navegador bloquea la lectura del canvas por una imagen externa, 
        // err.name suele ser 'SecurityError' o el mensaje contiene 'tainted'.
        if (err.name === 'SecurityError' || err.message.toLowerCase().includes('tainted')) {
            userMessage += "\n\nCausa: Bloqueo de seguridad (CORS). No se pudo procesar el logo o una imagen externa. Verifica que las rutas de assets sean correctas y estén en el mismo servidor.";
        } else {
            userMessage += "\n\nDetalle técnico: " + (err.message || "Error desconocido en el motor de renderizado.");
        }
        
        alert(userMessage);
    } finally {
        loadingIndicator.style.display = 'none';
    }
});

    // --- INICIALIZACIÓN FINAL ---
    const initialHash = window.location.hash || `#${sectionsData[0].id}`;
    if (document.querySelector(initialHash)) {
        showSection(initialHash);
    } else {
        showSection(`#${sectionsData[0].id}`);
    }
    // --- AUTOMATIZACIÓN DEL REPORTE FINAL (DREAMS ENGINE) ---
    function populateFinalReport() {
        const reportContainer = document.getElementById('reporte-dinamico-content');
        if (!reportContainer) return;

        // Función auxiliar con Sanitización de Datos (Fase 3 - Integridad jsPDF)
        const getVal = (id) => {
            let val = localStorage.getItem('cuaderno_' + id);
            
            // 1. Validamos existencia y contenido real
            if (!val || val === 'false' || val === 'undefined' || val.trim() === '') {
                return 'Pendiente de completar'; // Retornamos texto plano para evitar conflictos de tags en tablas
            }

            // 2. Sanitización Quirúrgica: Eliminamos etiquetas HTML que el usuario haya podido ingresar
            // Esto asegura que el motor de captura no procese código malicioso o tags mal cerrados.
            return val.replace(/<\/?[^>]+(>|$)/g, "").trim();
        };

        // Función interna para generar las tablas del cronograma en el reporte
        const renderGanttReport = (p) => {
            let rows = "";
            for (let i = 1; i <= 5; i++) {
                const desc = localStorage.getItem(`cuaderno_feedback_${p}_accion${i}_desc`);
                if (!desc || desc.trim() === "") continue; // Solo incluimos filas con acciones definidas
                
                rows += `
                    <tr class="border-b border-gray-100">
                        <td class="p-2 text-xs font-medium text-gray-700">${desc}</td>
                        <td class="p-2 text-xs text-gray-500">${getVal(`feedback_${p}_accion${i}_fecha`)}</td>
                        <td class="p-2 text-xs text-gray-600 bg-gray-50/50">${getVal(`plan_${p}_a${i}_obstaculo`)}</td>
                        <td class="p-2 text-xs text-brand-blue font-semibold">${getVal(`plan_${p}_a${i}_estrategia`)}</td>
                    </tr>`;
            }
            return rows || '<tr><td colspan="4" class="p-4 text-center text-gray-400 italic text-xs">Sin acciones detalladas</td></tr>';
        };

        const html = `
            <div class="grid grid-cols-2 gap-8 mb-8">
                <div class="p-4 bg-gray-50 rounded-lg">
                    <p class="text-xs uppercase font-bold text-gray-400 mb-1">Empresario / Líder</p>
                    <p class="text-xl font-bold brand-blue">${getVal('nombre_participante')}</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-lg">
                    <p class="text-xs uppercase font-bold text-gray-400 mb-1">Organización / PYME</p>
                    <p class="text-xl font-bold brand-blue">${getVal('nombre_empresa')}</p>
                </div>
            </div>

            <div class="p-6 border-l-4 border-brand-orange bg-orange-50 mb-8">
                <h4 class="text-sm font-bold brand-orange uppercase mb-2">📍 Diagnóstico: El Cuello de Botella</h4>
                <p class="text-gray-700 leading-relaxed italic">"${getVal('evaluacion_reflexion')}"</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="p-5 border border-gray-100 rounded-xl">
                    <h4 class="font-bold brand-blue border-b pb-2 mb-3 text-sm uppercase">${getVal('vocacion_p1_titulo')}</h4>
                    <p class="text-xs text-gray-600"><span class="font-bold">Misión:</span> ${getVal('mision_p1_mision_rol')}</p>
                    <p class="text-xs text-brand-orange mt-2"><span class="font-bold">Prioridad Inmediata:</span> ${getVal('feedback_p1_accion1_desc')}</p>
                </div>
                <div class="p-5 border border-gray-100 rounded-xl">
                    <h4 class="font-bold brand-blue border-b pb-2 mb-3 text-sm uppercase">${getVal('vocacion_p2_titulo')}</h4>
                    <p class="text-xs text-gray-600"><span class="font-bold">Misión:</span> ${getVal('mision_p2_mision_rol')}</p>
                    <p class="text-xs text-brand-orange mt-2"><span class="font-bold">Prioridad Inmediata:</span> ${getVal('feedback_p2_accion1_desc')}</p>
                </div>
            </div>

            <div class="space-y-6">
                <h4 class="text-center text-sm font-black uppercase tracking-widest text-gray-400">Cronograma de Implementación</h4>
                
                <div>
                    <p class="text-[10px] font-bold text-brand-blue mb-1 uppercase">${getVal('vocacion_p1_titulo')}</p>
                    <table class="w-full text-left border-collapse border border-gray-100">
                        <thead><tr class="bg-gray-100 text-[9px] uppercase"><th class="p-2">Acción</th><th class="p-2">Fecha</th><th class="p-2">Obstáculo</th><th class="p-2">Estrategia</th></tr></thead>
                        <tbody>${renderGanttReport('p1')}</tbody>
                    </table>
                </div>

                <div>
                    <p class="text-[10px] font-bold text-brand-blue mb-1 uppercase">${getVal('vocacion_p2_titulo')}</p>
                    <table class="w-full text-left border-collapse border border-gray-100">
                        <thead><tr class="bg-gray-100 text-[9px] uppercase"><th class="p-2">Acción</th><th class="p-2">Fecha</th><th class="p-2">Obstáculo</th><th class="p-2">Estrategia</th></tr></thead>
                        <tbody>${renderGanttReport('p2')}</tbody>
                    </table>
                </div>
            </div>
        `;
        reportContainer.innerHTML = html;
    }

    loadSavedData();

    // --- CANAL DE COMUNICACIÓN (Sincronización Iframe - Fase 2) ---
    // Establece un "buzón" para recibir órdenes de la plataforma central (academia.js)
    window.addEventListener('message', function(event) {
        // Verificamos que el mensaje sea una señal de sincronización de Dreams
        if (event.data && event.data.type === 'syncSession') {
            console.log("Dreams Engine: Sincronización de sesión activada.");
            // Refrescamos la información del cuaderno para asegurar que esté al día con la plataforma
            loadSavedData();
        }
    }, false);
});


