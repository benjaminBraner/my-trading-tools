const precioEntradaInputForex = document.querySelector('.entry-inp-forex');
const precioStopLossInput = document.querySelector('.sl-inp-forex');
document.querySelector('.risk-inp-forex').value = "0.5";
// Función para manejar el evento input


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
     document.querySelector('.tam-pos-dol-forex').value = convertirEscala(tamanoPosicion).toFixed(4)
     document.querySelector('.tam-pos-act-forex').value = tamanoPosicion.toFixed(4);

 }
 
 document.querySelector(".btn-calc-position-size-forex").addEventListener("click", (e) => {
     e.preventDefault();
     calcularTamanoPosicion();
});
 
 
