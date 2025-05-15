document.addEventListener('DOMContentLoaded', function() {
    const z = 4.5;
    
    const resultadoA = 0.4 * Math.pow(z, 4) + 3.1 * Math.pow(z, 2) - 162.3 * z - 80.7;
    const numerador = Math.pow(z, 3) - 23;
    const denominador = Math.cbrt(Math.pow(z, 2) + 17.5);
    const resultadoB = numerador / denominador;
    
    document.getElementById('resultadoA').innerHTML = `
        <h4>Parte (a)</h4>
        <p class="mb-1"><strong>Expresión:</strong> 0.4z⁴ + 3.1z² - 162.3z - 80.7</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoA.toFixed(4)}</p>
    `;
    
    document.getElementById('resultadoB').innerHTML = `
        <h4>Parte (b)</h4>
        <p class="mb-1"><strong>Expresión:</strong> (z³ - 23) / ∛(z² + 17.5)</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoB.toFixed(4)}</p>
    `;
});