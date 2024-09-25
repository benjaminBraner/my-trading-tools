function calcularTamanoPosicion() {

	const capital = parseFloat(document.querySelector('.inp-cap-forex').value);
     const porcentajeRiesgo = parseFloat(document.querySelector('.risk-inp-forex').value);
     const precioEntrada = parseFloat(document.querySelector('.entry-inp-forex').value);
     const precioStopLoss = parseFloat(document.querySelector('.sl-inp-forex').value);
	const valorPipPorLote = 10;           

	const riesgoDolares = capital * (porcentajeRiesgo / 100);
	
	const stopLossPips = Math.abs(precioEntrada - precioStopLoss) * 10000;
	
	const tamanoPosicion = riesgoDolares / (stopLossPips * valorPipPorLote);
	
	const riesgoUsd = stopLossPips * tamanoPosicion * valorPipPorLote;
	
     document.querySelector('.risk-dol-forex').value = riesgoDolares;
     document.querySelector('.tam-pos-dol-forex').value = riesgoUsd;
     document.querySelector('.tam-pos-act-forex').value = tamanoPosicion;
	return {
	    lotes: tamanoPosicion.toFixed(2),    
	    riesgoUSD: riesgoUsd.toFixed(2)  
	};
 }
 
 document.querySelector(".btn-calc-position-size-forex").addEventListener("click", (e) => {
     e.preventDefault();
     calcularTamanoPosicion();
});
//  const capitalInicial = 10000;        
//  const porcentajeRiesgo = 1;           
//  const precioEntrada = 1.1500;         
//  const precioStopLoss = 1.1400;        
//  const valorPipPorLote = 10;           
 
