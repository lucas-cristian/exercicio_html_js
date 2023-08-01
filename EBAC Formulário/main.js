document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const valorA = parseFloat(document.getElementById("valor-a").value);
    const valorB = parseFloat(document.getElementById("valor-b").value);

    if (valorB > valorA) {
        showMessage("Formulário válido!", "green");
    } else {
        showMessage("Formulário inválido! O valor B deve ser maior que o valor A.", "red");
    }

    document.getElementById("valor-a").value = "";
    document.getElementById("valor-b").value = "";
});

function showMessage(message, color) {
    const mensagemElement = document.getElementById("mensagemResultado");
    mensagemElement.textContent = message;
    mensagemElement.style.color = color;
    mensagemElement.classList.remove("hidden");
}
