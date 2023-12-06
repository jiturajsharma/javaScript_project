
const keyDisplay = document.querySelector('.key');

document.addEventListener('keypress', function (event) {

    keyDisplay.textContent = `Key Code: ${event.keyCode}, Key: ${event.key}`;
});
