import { auth, db, doc, getDoc } from '../shared/firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Diccionario de Redirección por Rol
const ROLE_REDIRECTS = {
    'Admin': '/src/admin/dashboard.html',
    'Cliente': '/src/apps/dashboard.html',
    'Capacitador': '/src/academia/panel.html',
    'Consultor': '/src/consultoria/home.html'
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
    const userDoc = await getDoc(doc(db, "users", uid));
    
    if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;
        console.log(`Usuario identificado como: ${role}`);
        
        // Aquí puedes usar una función de enrutamiento o un simple window.location
        window.location.href = ROLE_REDIRECTS[role] || '/index.html';
    } else {
        console.error("No se encontró el perfil del usuario en Firestore.");
    }
};