// public/src/shared/env-config.js (Versión para Producción)
const DREAMS_CONFIG = {
    // Estas variables las leerá del panel de Netlify si usas un build step, 
    // pero para tu arquitectura actual, usaremos un "Fallback" inteligente:
    FIREBASE_STORAGE_BASE: "https://firebasestorage.googleapis.com/v0/b/dreams-d1334.firebasestorage.app/o/",
    YOUTUBE_BASE_URL: "https://www.youtube.com/embed/",
    
    MODO_DESARROLLO: window.location.hostname === 'localhost',

    resolvePath: (fileName, session = 'shared') => {
        if (!fileName) return ''; 
        if (fileName.startsWith('http')) return fileName;
        
        const sessionInput = session.toLowerCase();
        let folderName = (sessionInput === 'shared') ? 'Shared' : `sesion-${sessionInput.replace('sesion-', '').replace('sesion_', '')}`;
        
        // Discriminador de subcarpeta (Ajustado por auditoría)
        let subFolder = 'images';
        if (sessionInput === 'shared') {
            // Si es logo va a brand, si no a slides
            subFolder = fileName.toLowerCase().includes('logo') ? 'brand' : 'slides';
        } else {
            subFolder = fileName.toLowerCase().endsWith('.mp3') ? 'media' : 'images';
        }

        const fullPath = `shared%2F${folderName}%2F${subFolder}%2F${encodeURIComponent(fileName)}`;
        return `${DREAMS_CONFIG.FIREBASE_STORAGE_BASE}${fullPath}?alt=media`;
    }
};
window.DREAMS_CONFIG = DREAMS_CONFIG;