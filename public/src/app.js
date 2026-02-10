import { login } from './auth/auth.js';

// Esperamos a que la página cargue totalmente
document.addEventListener('DOMContentLoaded', () => {
    
    // Localizamos el formulario de inicio de sesión por su ID
    const loginForm = document.getElementById('login-form');

    // Si el formulario existe en la pantalla actual, activamos la escucha
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            // 1. Evitamos que la página se recargue (comportamiento por defecto)
            e.preventDefault(); 

            // 2. Capturamos los datos escritos por el usuario
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // 3. Enviamos los datos a la función de autenticación
            await login(email, password);
        });
    }
});