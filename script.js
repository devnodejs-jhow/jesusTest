const textoInput = document.getElementById('texto');
const outputDiv = document.getElementById('output');

textoInput.addEventListener('input', () => {
    const texto = textoInput.value;
    outputDiv.textContent = texto;
});
