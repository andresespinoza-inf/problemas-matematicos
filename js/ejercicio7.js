document.addEventListener('DOMContentLoaded', function() {
    const t = 3.2;
    
    const termino1 = 0.5 * Math.exp(2 * t);
    const termino2 = 3.8 * Math.pow(Math.log(t), 3);
    const resultadoA = termino1 - termino2;
    const numerador = 6 * Math.pow(t, 2) + 6 * t - 2;
    const denominador = Math.pow(t, 2) - 1;
    const resultadoB = numerador / denominador;

    document.getElementById('resultadoA').innerHTML = `
        <h4>Parte (a)</h4>
        <p class="mb-1"><strong>Expresión:</strong> ½e<sup>2t</sup> - 3.8 ln<sup>3</sup>t</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoA.toFixed(4)}</p>
    `;
    
    document.getElementById('resultadoB').innerHTML = `
        <h4>Parte (b)</h4>
        <p class="mb-1"><strong>Expresión:</strong> (6t<sup>2</sup> + 6t - 2)/(t<sup>2</sup> - 1)</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoB.toFixed(4)}</p>
    `;
});