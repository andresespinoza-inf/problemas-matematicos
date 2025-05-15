document.addEventListener('DOMContentLoaded', function() {
    const x = 6.5;
    const y = 3.8;
    
    const termino1 = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 2/3);
    const termino2 = (x * y) / (y - x);
    const resultadoA = termino1 + termino2;
    const termino1b = Math.sqrt(x + y) / Math.pow(x - y, 2);
    const termino2b = 2 * Math.pow(x, 2);
    const termino3b = x * Math.pow(y, 2);
    const resultadoB = termino1b + termino2b - termino3b;
    
    document.getElementById('resultadoA').innerHTML = `
        <h4>Parte (a)</h4>
        <p class="mb-1"><strong>Expresión:</strong> (x<sup>2</sup> + y<sup>2</sup>)<sup>2/3</sup> + xy/(y - x)</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoA.toFixed(4)}</p>
    `;
    
    document.getElementById('resultadoB').innerHTML = `
        <h4>Parte (b)</h4>
        <p class="mb-1"><strong>Expresión:</strong> √(x + y)/(x - y)<sup>2</sup> + 2x<sup>2</sup> - xy<sup>2</sup></p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoB.toFixed(4)}</p>
    `;
});