function convertToBinary() {
  const decimalInput = document.getElementById('decimalInput').value;
  const resultElement = document.getElementById('binaryResult');

  // Vérifie si l’entrée est un nombre entier valide
  const decimalNumber = parseInt(decimalInput, 10);

  if (isNaN(decimalNumber)) {
    resultElement.textContent = 'Veuillez entrer un nombre entier valide.';
    return;
  }

  // Conversion en binaire
  const binary = decimalNumber.toString(2);
  resultElement.textContent = `Représentation binaire : ${binary}`;
}
