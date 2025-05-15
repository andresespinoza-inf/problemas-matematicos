document.addEventListener('DOMContentLoaded', function() {
    const c = 4.6;
    const d = 1.7;
    const a = c * Math.pow(d, 2);
    const b = (c + a) / (c - d);
    
    const termino1a = Math.exp(d - b);
    const termino2a = Math.cbrt(c + a);
    const termino3a = Math.pow(c * a, d);
    const resultadoA = termino1a + termino2a - termino3a;
    const termino1b = d / c;
    const termino2b = Math.pow((c * d) / b, 2);
    const termino3b = Math.pow(c, d);
    const termino4b = a / b;
    const resultadoB = termino1b + termino2b - termino3b - termino4b;

    document.getElementById('resultadoA').innerHTML = `
        <h4>Parte (a)</h4>
        <p class="mb-1"><strong>Expresión:</strong> e<sup>d - b</sup> + ∛(c + a) - (ca)<sup>d</sup></p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoA.toFixed(4)}</p>
    `;
    
    document.getElementById('resultadoB').innerHTML = `
        <h4>Parte (b)</h4>
        <p class="mb-1"><strong>Expresión:</strong> d/c + (cd/b)<sup>2</sup> - c<sup>d</sup> - a/b</p>
        <p class="mb-0"><strong>Resultado:</strong> ${resultadoB.toFixed(4)}</p>
    `;
});