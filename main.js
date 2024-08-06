const form = document.getElementById('formCalculo');

form.addEventListener('submit', function(e) {
    e.preventDefault();

const numeroA = document.getElementById('numeroA').value;
const numeroB = document.getElementById('numeroB').value;
const mensagem = document.getElementById('mensagem');

if (numeroB > numeroA) {
    mensagem.textContent = `Número no campo B é ${numeroB}, sendo assim maior que no campo A que é ${numeroA}. Comparação Válida`;
    mensagem.style.color = 'green';
    numeroA.value = '';
    numeroB.value = '';
} else if (numeroB === numeroA) {
    mensagem.textContent = 'Para comparação os números não poder ser iguais.';
    mensagem.style.color = 'black';
    numeroA.value = '';
    numeroB.value = '';
} else {
    mensagem.textContent = `Número no campo A é ${numeroA}, sendo assim maior que no campo B que é ${numeroB}. Comparação Inválida.`;
    mensagem.style.color = 'red';
    numeroA.value = '';
    numeroB.value = '';
} 

});
