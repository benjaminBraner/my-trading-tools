const precioEntradaInput = document.getElementById('precioEntrada')
const apalancamientoInput = document.getElementById('apalancamiento')
const cantidadInput = document.getElementById('cantidad')
const precioSalidaInput = document.getElementById('precioSalida')

const respMargenInicial = document.getElementById('margen-inicial')
const respGanancia = document.getElementById('ganancia')
const respRoi = document.getElementById('roi')

const botonCalcular = document.getElementById('calcularProfit')

function calcularProfit(precioEntrada, apalancamiento, cantidad, precioSalida) {
	const margenInicial = cantidad / apalancamiento 
	const porcentajeCambio = ((precioSalida - precioEntrada) / precioEntrada) * 100
	const multiplicadorPorcentaje = porcentajeCambio / 100;
	const profitUSDT = cantidad * multiplicadorPorcentaje
	const profitPorcentaje = (profitUSDT / margenInicial) * 100 
     
	return {
		margenInicial,
		profitUSDT,
		profitPorcentaje
	}
}

botonCalcular.addEventListener('click', function (e) {
	e.preventDefault()
	const precioEntrada = precioEntradaInput.value
	const apalancamiento = apalancamientoInput.value
	const cantidad = cantidadInput.value
	const precioSalida = precioSalidaInput.value

	const { margenInicial, profitUSDT, profitPorcentaje } = calcularProfit(
		precioEntrada,
		apalancamiento,
		cantidad,
		precioSalida
	)

	respMargenInicial.value = margenInicial + '$'
	respGanancia.value = profitUSDT + '$'
	respRoi.value = profitPorcentaje + '%'
})
