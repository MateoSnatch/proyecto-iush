// Obtener elementos del DOM
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Manejar registro de usuario
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reg-name').value;
    const password = document.getElementById('reg-password').value;
    const weight = parseFloat(document.getElementById('reg-weight').value);
    const height = parseFloat(document.getElementById('reg-height').value);

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find(user => user.name === name);
    if (existingUser) {
        alert('El usuario ya está registrado. Intenta con otro nombre.');
        return;
    }

    users.push({ name, password, weight, height });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    registerForm.reset();
});

// Manejar inicio de sesión
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.name === name && u.password === password);

    if (user) {
        // Guardar el usuario activo en localStorage
        localStorage.setItem('activeUser', JSON.stringify(user));
        alert(`Bienvenido, ${user.name}.`);
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
