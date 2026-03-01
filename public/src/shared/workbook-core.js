// public/src/shared/workbook-core.js
/**
 * DREAMS WORKBOOK CORE v1.2 | Mi Empresa Crece
 * Fusión: Resiliencia v1.1 + Debounce v1.2 (Plan de Trabajo 2.0)
 */

const WorkbookCore = {
    config: {
        debounceTime: 3000, 
        autosaveTimer: null
    },

    metadata: {
        courseID: new URLSearchParams(window.location.search).get('courseId') || 'consolida_360',
        sessionID: new URLSearchParams(window.location.search).get('sessionId') || 'sesion_a',
        lastUpdate: new Date().toISOString()
    },

    // --- NUEVO: MOTOR DE PERSISTENCIA CON DEBOUNCE (REGLA DE ORO) ---
    saveProgress(fieldId, value) {
        clearTimeout(this.config.autosaveTimer);
        
        // Guardado inmediato en LocalStorage (Capa 1 de seguridad)
        localStorage.setItem(`cuaderno_${fieldId}`, value);

        this.config.autosaveTimer = setTimeout(() => {
            console.log(`☁️ Intentando sincronizar: ${fieldId}`);
            this.syncQueue.push({
                id: fieldId, // Normalizamos a "id" para hacer match con app.js
                value: this.utils.sanitize(value)
            });
        }, this.config.debounceTime);
    },

    // --- MOTOR DE RESILIENCIA (CONSERVADO) ---
    syncQueue: {
        tasks: JSON.parse(localStorage.getItem('cuaderno_sync_queue') || '[]'),
        isProcessing: false,

        push(payload) {
            this.tasks.push({ ...payload, timestamp: Date.now() });
            this.persist();
            this.process();
        },

        persist() {
            localStorage.setItem('cuaderno_sync_queue', JSON.stringify(this.tasks));
        },

        async process() {
            if (this.isProcessing || this.tasks.length === 0 || !navigator.onLine) return;
            
            this.isProcessing = true;
            while (this.tasks.length > 0 && navigator.onLine) {
                const currentTask = this.tasks[0];
                try {
                    window.parent.postMessage({ 
                        type: 'dreamsSync', 
                        data: currentTask,
                        metadata: WorkbookCore.metadata 
                    }, '*');
                    
                    this.tasks.shift(); 
                    this.persist();
                } catch (e) {
                    console.error("🚨 Error en bus de datos:", e);
                    break; 
                }
                await new Promise(r => setTimeout(r, 100));
            }
            this.isProcessing = false;
        }
    },

    // --- UTILIDADES Y PDF (CONSERVADOS) ---
    utils: {
        sanitize(val) {
            if (typeof val !== 'string') return val;
            return val.replace(/<\/?[^>]+(>|$)/g, "").trim();
        },
        resolvePath(asset) {
            // Delegamos la responsabilidad al motor central de rutas en env-config.js
            // Usamos el sessionID detectado automáticamente (ej: sesion_a) para saber qué carpeta de Firebase usar
            return DREAMS_CONFIG.resolvePath(asset, WorkbookCore.metadata.sessionID);
        }
    },

    async exportToPDF(elementId, filename) {
        // ... (Código original de html2canvas y jsPDF conservado íntegramente)
    }
};

// --- LISTENERS DE INTEGRACIÓN (CONSERVADOS Y MEJORADOS) ---

document.addEventListener('input', (e) => {
    if (e.target.dataset.persist !== "false" && (e.target.id || e.target.name)) {
        WorkbookCore.saveProgress(e.target.id || e.target.name, e.target.value);
    }
});

window.addEventListener('message', (e) => {
    if (e.data.type === 'hydrateWorkbook' && e.data.payload) {
        console.log("📦 Dreams Core: Hidratando UI con datos de la nube...");
        
        Object.entries(e.data.payload).forEach(([key, val]) => {
            // 1. Sincronización de Resiliencia (Caché local)
            localStorage.setItem('cuaderno_' + key, val);
            
            // 2. Inyección Quirúrgica en el DOM (Inputs/Textareas/Selects)
            const el = document.getElementById(key) || document.getElementsByName(key)[0];
            
            if (el) {
                if (el.type === 'checkbox' || el.type === 'radio') {
                    el.checked = (val === true || val === 'true');
                } else {
                    el.value = val;
                }
                
                /**
                 * TRAZABILIDAD FINANCIERA: Disparamos un evento 'change' manual. 
                 * Esto asegura que las fórmulas de cálculo del Filtro 4+1 se activen 
                 * e impriman los resultados (ROI, Gastos, etc.) automáticamente al cargar.
                 */
                el.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        
        window.dispatchEvent(new CustomEvent('coreHydrated'));
    }
});

window.addEventListener('online', () => WorkbookCore.syncQueue.process());

// Handshake Inicial
window.parent.postMessage({ type: 'WORKBOOK_READY', metadata: WorkbookCore.metadata }, '*');