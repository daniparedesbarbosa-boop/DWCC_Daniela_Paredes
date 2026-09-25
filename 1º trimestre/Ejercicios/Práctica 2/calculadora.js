const formulario = document.querySelector('#calculadora-form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evento) => {
	evento.preventDefault();

	const notaExamen = Number(document.querySelector('#nota-examen').value);
	const notaPractica = Number(document.querySelector('#nota-practica').value);
	const notaFinal = (notaExamen + notaPractica) / 2;
	const estado = notaFinal >= 5 ? 'Aprobado' : 'Suspenso';

	resultado.textContent = `Nota final: ${notaFinal.toFixed(2)} - ${estado}`;
	resultado.className = notaFinal >= 5 ? 'aprobado' : 'suspenso';
});
