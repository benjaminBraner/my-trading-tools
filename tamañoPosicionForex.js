const precioEntradaInputForex = document.querySelector('.entry-inp-forex')
const precioStopLossInput = document.querySelector('.sl-inp-forex')

function calcularTamanoPosicion() {
	const capital = parseFloat(document.querySelector('.inp-cap-forex').value)
	const porcentajeRiesgo = parseFloat(document.querySelector('.risk-inp-forex').value)
	const precioEntrada = parseFloat(document.querySelector('.entry-inp-forex').value)
	const precioStopLoss = parseFloat(document.querySelector('.sl-inp-forex').value)
                                                                                                
	const capitalARiesgo = capital * (porcentajeRiesgo / 100)
     
     const mayor = sacarMayor(precioEntrada, precioStopLoss)
	const riesgoPorUnidad = precioEntrada == mayor ? precioEntrada - precioStopLoss : precioStopLoss - precioEntrada
	const tamanoPosicionDolares = capitalARiesgo * (mayor / riesgoPorUnidad)
     const tamanoPosicionLotes = convertirADolaresALotes(tamanoPosicionDolares)

	document.querySelector('.risk-dol-forex').value = capitalARiesgo.toFixed(2)
	document.querySelector('.tam-pos-dolares-forex').value = tamanoPosicionDolares.toFixed(2)
	document.querySelector('.tam-pos-act-forex').value = tamanoPosicionLotes.toFixed(4)
}

const sacarMayor = (entrada, stopLoss) => entrada > stopLoss ? entrada : stopLoss;


const convertirADolaresALotes = (montoDolares, lote=50000) => montoDolares / lote;
 

document.querySelector('.btn-calc-position-size-forex').addEventListener('click', (e) => {
	e.preventDefault()
	calcularTamanoPosicion()
})


