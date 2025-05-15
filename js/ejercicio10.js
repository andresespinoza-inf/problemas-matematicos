document.addEventListener('DOMContentLoaded', function() {
    const x = Math.PI / 10;
    
    const ladoIzquierdoA = Math.pow(Math.cos(x), 2) - Math.pow(Math.sin(x), 2);
    const ladoDerechoA = 1 - 2 * Math.pow(Math.sin(x), 2);
    const esCorrectoA = Math.abs(ladoIzquierdoA - ladoDerechoA) < 0.0001;
    const ladoIzquierdoB = Math.tan(x) / (Math.sin(x) - 2 * Math.tan(x));
    const ladoDerechoB = 1 / (Math.cos(x) - 2);
    const esCorrectoB = Math.abs(ladoIzquierdoB - ladoDerechoB) < 0.0001;

    document.getElementById('resultadoA').innerHTML = `
        <h4>Parte (a)</h4>
        <p class="mb-1"><strong>Lado izquierdo:</strong> cos<sup>2</sup>x - sin<sup>2</sup>x = ${ladoIzquierdoA.toFixed(4)}</p>
        <p class="mb-1"><strong>Lado derecho:</strong> 1 - 2sin<sup>2</sup>x = ${ladoDerechoA.toFixed(4)}</p>
        <p class="mb-0"><strong>La identidad es <span class="${esCorrectoA ? 'verdadero' : 'falso'}">${esCorrectoA ? 'VERDADERA' : 'FALSA'}</span></strong></p>
    `;
    
    document.getElementById('resultadoB').innerHTML = `
        <h4>Parte (b)</h4>
        <p class="mb-1"><strong>Lado izquierdo:</strong> tanx/(sinx - 2tanx) = ${ladoIzquierdoB.toFixed(4)}</p>
        <p class="mb-1"><strong>Lado derecho:</strong> 1/(cosx - 2) = ${ladoDerechoB.toFixed(4)}</p>
        <p class="mb-0"><strong>La identidad es <span class="${esCorrectoB ? 'verdadero' : 'falso'}">${esCorrectoB ? 'VERDADERA' : 'FALSA'}</span></strong></p>
    `;
});