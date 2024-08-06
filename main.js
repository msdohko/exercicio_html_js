const form = document.getElementById('formCalculo');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const valorNumeroA = Number(numeroA.value);
const valorNumeroB = Number(numeroB.value);

if (valorNumeroB > valorNumeroA) {
    mensagem.textContent = `Está VALIDO, campo B: ${valorNumeroB} é maior que campo A: ${valorNumeroA}.`;
    mensagem.style.color = 'green';
} else if (valorNumeroB === valorNumeroA) {
    mensagem.textContent = 'Para comparação os números não poder ser iguais.';
    mensagem.style.color = 'black';
} else {
    mensagem.textContent = `Está INVALIDO, campo A: ${valorNumeroA} é maior que campo B: ${valorNumeroB}.`;
    mensagem.style.color = 'red';
} 

document.getElementById('numeroA').value='';
document.getElementById('numeroB').value='';
});