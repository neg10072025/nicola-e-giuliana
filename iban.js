document.getElementById('ibanToggle').addEventListener('click', function(event) {
  event.preventDefault(); // Impedisce il comportamento di default del link
  const ibanBox = document.getElementById('iban-box'); // Usa l'ID corretto
  ibanBox.classList.toggle('hidden'); // Mostra/nasconde la box con l'IBAN
});
