function convertToBinary() {
  const decimalInput = document.getElementById('decimalInput').value;
  const resultElement = document.getElementById('binaryResult');
  let decimal;

  // Vérifie si l’entrée est un nombre entier valide
  const decimalNumber = parseInt(decimalInput, 10);

  if (!isNaN(decimalNumber) && decimalInput !== '') {
    decimal = parseInt(decimalInput);
    let binaries = '';

    while (decimal > 0) {
      binaries = (decimal % 2) + binaries;
      decimal = Math.floor(decimal / 2);
    }
    resultElement.textContent = `Représentation binaire : ${binaries}`;
  } else {
    resultElement.textContent = 'Veuillez entrer un nombre entier valide'
}
}
