// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return (peso / ((altura / 100) ** 2)).toFixed(2);
}

// Obtener las características según el rango de IMC
function obtenerCaracteristicas(imc) {
    if (imc < 18.5) {
        return {
            rango: "Bajo peso",
            caracteristicas: [
                "Menor energía y resistencia.",
                "Necesidad de mejorar la alimentación.",
                "Posible debilidad física o inmunidad baja."
            ]
        };
    } else if (imc >= 18.5 && imc < 25) {
        return {
            rango: "Peso normal",
            caracteristicas: [
                "Salud equilibrada.",
                "Energía y movilidad óptimas.",
                "Mantener estilo de vida activo."
            ]
        };
    } else if (imc >= 25 && imc < 30) {
        return {
            rango: "Sobrepeso",
            caracteristicas: [
                "Mayor riesgo de problemas cardiovasculares.",
                "Recomendaciones de ejercicio aeróbico.",
                "Controlar la alimentación."
            ]
        };
    } else {
        return {
            rango: "Obesidad",
            caracteristicas: [
                "Mayor riesgo de enfermedades metabólicas.",
                "Se recomienda un plan supervisado.",
                "Actividades de bajo impacto recomendadas."
            ]
        };
    }
}

// Cargar los datos del usuario activo desde localStorage
const usuarioActivo = JSON.parse(localStorage.getItem('activeUser'));

if (usuarioActivo) {
    const imc = calcularIMC(usuarioActivo.weight, usuarioActivo.height);
    const { rango, caracteristicas } = obtenerCaracteristicas(imc);

    // Mostrar la información en la página
    document.getElementById('user-name').textContent = usuarioActivo.name;
    document.getElementById('user-imc').textContent = imc;
    document.getElementById('imc-range').textContent = rango;

    const featuresList = document.getElementById('imc-features');
    caracteristicas.forEach(caracteristica => {
        const li = document.createElement('li');
        li.textContent = caracteristica;
        featuresList.appendChild(li);
    });
} else {
    alert('No se encontró un usuario activo. Por favor, inicia sesión.');
    window.location.href = 'login.html';
}

