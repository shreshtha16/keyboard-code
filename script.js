const keyDisplay = document.getElementById('keyDisplay');
const keyCodeDisplay = document.getElementById('keyCodeDisplay');
const historyList = document.getElementById('historyList');

document.addEventListener('keydown', (event) => {
  const key = event.key === ' ' ? 'Space' : event.key;
  const keyCode = event.keyCode;
  const keyCombination = `${event.ctrlKey ? 'Ctrl+' : ''}${event.shiftKey ? 'Shift+' : ''}${event.altKey ? 'Alt+' : ''}${key}`;

  keyDisplay.textContent = keyCombination;
  keyCodeDisplay.textContent = keyCode;

});
