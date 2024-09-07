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
     console.log(profitUSDT)
     console.log(profitUSDT > 0)
     if (profitUSDT > 0) {
          respGanancia.classList.add("profit")
          respGanancia.classList.remove("loss")
          respRoi.classList.add("profit")
          respRoi.classList.remove("loss")
     } else {
          respGanancia.classList.remove("profit")
          respGanancia.classList.add("loss")
          respRoi.classList.remove("profit")
          respRoi.classList.add("loss")
     }
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

	respMargenInicial.value = margenInicial.toFixed(2) + '$'
	respGanancia.value = profitUSDT.toFixed(2) + '$'
	respRoi.value = profitPorcentaje.toFixed(2) + '%'
})
