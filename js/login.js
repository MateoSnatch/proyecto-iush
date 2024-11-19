// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

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

