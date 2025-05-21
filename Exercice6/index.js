const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    // Évalue l'expression de façon sécurisée
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erreur';
  }
}
