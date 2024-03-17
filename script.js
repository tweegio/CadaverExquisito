document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const endButton = document.getElementById("endButton");
    const restartButton = document.getElementById("restartButton");
    const inputArea = document.getElementById("inputArea");
    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const resultArea = document.getElementById("resultArea");
    let result = '';

    startButton.addEventListener("click", function () {
        inputArea.style.display = "block";
        startButton.style.display = "none";
        endButton.style.display = "inline";
    });

    endButton.addEventListener("click", function () {
        inputArea.style.display = "none";
        endButton.style.display = "none";
        restartButton.style.display = "inline";
        resultArea.textContent = result;
    });

    restartButton.addEventListener("click", function () {
        result = '';
        resultArea.textContent = '';
        restartButton.style.display = "none";
        startButton.style.display = "inline";
    });

    submitButton.addEventListener("click", function () {
        const inputText = textInput.value.trim();
        if (inputText !== '') {
            result += inputText + '\n';
            textInput.value = '';
        }
    });
});
