// Obtener el formulario de registro
const registerForm = document.getElementById('register-form');

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
    window.location.href = 'login.html';
});
