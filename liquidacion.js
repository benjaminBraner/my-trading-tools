const inputEntrada = document.querySelector(".entrada");
const inputApalancamiento = document.querySelector(".apalancamiento");
const btn = document.getElementById("calcular-liquidacion");
const respLiquidacionLong = document.querySelector(".liq-long");
const respLiquidacionShort = document.querySelector(".liq-short");

function calcularPrecioLiquidacion1(precioEntrada, apalancamiento, esLong) {
     const factor = esLong ? 1 : -1;
     const precioLiquidacion = precioEntrada * (1 - (factor / apalancamiento));

     return precioLiquidacion;
}

btn.addEventListener("click", (e) => {
     e.preventDefault();
     const precioDeEntrada = parseFloat(inputEntrada.value);
     const apalancamiento = parseFloat(inputApalancamiento.value);

     const precioLiquidacionLong = calcularPrecioLiquidacion1(precioDeEntrada, apalancamiento, true);
     const precioLiquidacionShort = calcularPrecioLiquidacion1(precioDeEntrada, apalancamiento, false);

     respLiquidacionLong.value = precioLiquidacionLong;
     respLiquidacionShort.value = precioLiquidacionShort;
})