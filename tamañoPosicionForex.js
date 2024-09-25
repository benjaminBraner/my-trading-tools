const precioEntradaInput = document.querySelector('.entry-inp-forex');
const precioStopLossInput = document.querySelector('.sl-inp-forex');

// Función para manejar el evento input
const handleInputChange = (input) => {
    const currentValue = input.value;
    // Si el valor actual es vacío, restablecer a '1'
    if (currentValue === '') {
        input.value = '1.';
        return;
    }

    // Evitar escribir cualquier cosa delante del '1'
    if (!currentValue.startsWith('1.')) {
        input.value = '1.'; // Restablecer a '1' si no comienza con '1'
        return;
    }

    // Si el valor comienza con '1' y no tiene un punto
    if (currentValue.startsWith('1.') && !currentValue.includes('.')) {
        // Añadir el punto antes del segundo carácter
        input.value = '1.' + currentValue.slice(1);
    }
     // Filtrar solo números y el punto
	input.value = input.value.replace(/[^0-9.]/g, ''); // Permite solo números y punto
console.log(input.value)

};

// Agrega el evento input a ambos inputs
precioEntradaInput.addEventListener('input', () => handleInputChange(precioEntradaInput));
precioStopLossInput.addEventListener('input', () => handleInputChange(precioStopLossInput));


function calcularTamanoPosicion() {

	const capital = parseFloat(document.querySelector('.inp-cap-forex').value);
     const porcentajeRiesgo = parseFloat(document.querySelector('.risk-inp-forex').value);
     const precioEntrada = parseFloat(document.querySelector('.entry-inp-forex').value);
     const precioStopLoss = parseFloat(document.querySelector('.sl-inp-forex').value);
	const valorPipPorLote = 10;           

	const riesgoDolares = capital * (porcentajeRiesgo / 100);
	
	const stopLossPips = Math.abs(precioEntrada - precioStopLoss) * 10000;
	
	const tamanoPosicion = riesgoDolares / (stopLossPips * valorPipPorLote);
	
	function convertirEscala(numero) {
		const valorBase = 100000; // 1 es igual a 100,000
		return numero * valorBase;
	 }


     document.querySelector('.risk-dol-forex').value = riesgoDolares;
     document.querySelector('.tam-pos-dol-forex').value = convertirEscala(tamanoPosicion);
     document.querySelector('.tam-pos-act-forex').value = tamanoPosicion;

 }
 
 document.querySelector(".btn-calc-position-size-forex").addEventListener("click", (e) => {
     e.preventDefault();
     calcularTamanoPosicion();
});
 
 
