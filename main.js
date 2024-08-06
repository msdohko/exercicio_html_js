const form = document.getElementById('formCalculo');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const numeroA = document.getElementById('numeroA').value;
const numeroB = document.getElementById('numeroB').value;
const mensagem = document.getElementById('mensagem');

if (numeroB > numeroA) {
    mensagem.textContent = `Está VALIDO, campo B: ${numeroB} é maior que campo A: ${numeroA}.`;
    mensagem.style.color = 'green';
} else if (numeroB === numeroA) {
    mensagem.textContent = 'Para comparação os números não poder ser iguais.';
    mensagem.style.color = 'black';
} else {
    mensagem.textContent = `Está INVALIDO, campo A: ${numeroA} é maior que campo B: ${numeroB}.`;
    mensagem.style.color = 'red';
} 

});

numeroA.addEventListener('focus', function()) {
    numeroA.value='';
}

numeroB.addEventListener('focus', function()) {
    numeroB.value='';
}