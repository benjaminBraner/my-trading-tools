
const porcentajeRiesgoGuardado = localStorage.getItem('porcentajeRiesgo');
porcentajeRiesgoGuardado && (document.querySelector('.risk-inp-forex').value = porcentajeRiesgoGuardado)

function calcularTamanoPosicion() {
	const balance = parseFloat(document.querySelector('.inp-cap-forex').value)
	const porcentajeRiesgo = parseFloat(document.querySelector('.risk-inp-forex').value)
	const precioEntrada = parseFloat(document.querySelector('.entry-inp-forex').value)
	const precioStopLoss = parseFloat(document.querySelector('.sl-inp-forex').value)
	const instrumento = document.querySelector('.instrumento-inp').value

	if ([balance, porcentajeRiesgo, precioEntrada, precioStopLoss].some(val => isNaN(val) || val <= 0)) {
		alert('Por favor, introduce valores válidos.');
		return;
	 }
	 
	const montoArriesgado = balance * (porcentajeRiesgo / 100)
	const distanciaStopLoss = Math.abs(precioEntrada - precioStopLoss) 
	
	if (distanciaStopLoss === 0) {
		alert('El Stop Loss no puede ser igual al precio de entrada.')
		return
	}

	const lote = instrumento === 'forex' ? 100000 : 100
	const posicionLotes = (montoArriesgado / distanciaStopLoss) / lote
	const posicionUSD = posicionLotes * lote * precioEntrada

	document.querySelector('.riesgo-dolares').value = montoArriesgado.toFixed(2)
	document.querySelector('.tamaño-posicion-dolares').value = posicionUSD.toFixed(2)
	document.querySelector('.tamaño-posicion-lotes').value = posicionLotes.toFixed(4)
	
	localStorage.setItem('porcentajeRiesgo', porcentajeRiesgo)
}



document.querySelector('.btn-calc-tamaño-posicion').addEventListener('click', (e) => {
	e.preventDefault()
	calcularTamanoPosicion()
})



document.querySelector('.instrumento-inp').addEventListener('change', (e) => {
	const form = document.querySelector('.form-posicion');
	
	if (e.target.value === 'xau') {
	    form.classList.add('color-xau');  
	} else {
	    form.classList.remove('color-xau');  
	}
 });