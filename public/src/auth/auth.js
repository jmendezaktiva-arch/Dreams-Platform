//public/src/auth
import { auth, db, doc, getDoc } from '../shared/firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Diccionario de Redirección por Rol
const ROLE_REDIRECTS = {
    'Admin': '/admin.html',
    'Cliente': '/dashboard.html',
    'Capacitador': '/academia.html',
    'Consultor': '/consultoria.html'
};

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await redirectByUserRole(user.uid);
    } catch (error) {
        console.error("Error en login:", error.message);
        alert("Credenciales incorrectas.");
    }
};

export const redirectByUserRole = async (uid) => {
    try {
        // Corregido: Apuntamos a la colección 'usuarios' según el blueprint
        const userDoc = await getDoc(doc(db, "usuarios", uid));
        
        if (userDoc.exists()) {
            const userData = userDoc.data();
            // Corregido: El campo en Firestore y en las reglas es 'rol' (en español)
            const role = userData.rol;
            
            // Confirmación visual del reconocimiento de rol
            alert(`¡Conexión exitosa! Perfil detectado: ${role}`);
            
            // Redirección basada en el diccionario ROLE_REDIRECTS
            const targetPath = ROLE_REDIRECTS[role] || '/index.html';
            window.location.href = targetPath;
        } else {
            alert("Acceso denegado: Tu usuario no tiene un perfil de rol configurado en Firestore.");
            console.error("Error: No existe documento en la colección 'usuarios' para el UID:", uid);
        }
    } catch (error) {
        alert("Error crítico al verificar permisos de usuario.");
        console.error("Detalle del error en Firestore:", error);
    }
};