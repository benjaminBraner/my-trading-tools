const calculo = () => {
     const capital = parseFloat(document.querySelector('.inp-cap').value);
     const riesgoPorcentaje = parseFloat(document.querySelector('.risk-inp').value);
     const entry = parseFloat(document.querySelector('.entry-inp').value);
     const stoploss = parseFloat(document.querySelector('.sl-inp').value);

     const riesgo = (capital / 100) * riesgoPorcentaje;
     const diferencia = entry - stoploss;
     const tamañoPosicion = riesgo / diferencia;
     const diferenciaPorcentaje = (diferencia / entry) * 100;
     const tamañoPosicionDolares = (capital * riesgoPorcentaje) / diferenciaPorcentaje

     document.querySelector('.risk-dol').value = riesgo;
     document.querySelector('.tam-pos-dol').value = tamañoPosicionDolares;
     document.querySelector('.tam-pos-act').value = tamañoPosicion;
}


document.querySelector(".btn-calc-position-size").addEventListener("click", (e) => {
     e.preventDefault();
     calculo();
});