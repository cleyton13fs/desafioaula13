let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    showMessage('Um novo jogo começou. Tente adivinhar o número entre 1 e 10.', 'info');
}

function guessNumber() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        showMessage('Digite apenas números!', 'error');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        showMessage(`Parabéns! Você acertou o número em ${attempts} tentativa(s).`, 'success');
    } else {
        if (guess < randomNumber) {
            showMessage('Tente um número maior.', 'info');
        } else {
            showMessage('Tente um número menor.', 'info');
        }
    }
}

function resetGame() {
    document.getElementById('guessInput').value = '';
    showMessage('', 'info');

    startGame();
}

function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;

    messageElement.classList.remove('message-success', 'message-error', 'message-info');

    if (type === 'success') {
        messageElement.classList.add('message-success');
    } else if (type === 'error') {
        messageElement.classList.add('message-error');
    } else {
        messageElement.classList.add('message-info');
    }
}

window.onload = startGame;
