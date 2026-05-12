const textarea = document.getElementById("text");
const words = document.getElementById("words");
const characters = document.getElementById("characters");

function loadcounter() {
  const text = textarea.value;

  // PALABRA SECRETA
  if (text.includes("ILOVELETTERO:)")) {
    words.textContent = "I too";
    characters.textContent = "💕";
    return;
  }

  // CONTADOR DE CARACTERES
  characters.textContent = text.length;

  // CONTADOR DE PALABRAS
  const listwords = text
    .trim()
    .split(/\s+/)
    .filter(palabra => palabra.length > 0);

  words.textContent =
    text.trim() === ""
      ? 0
      : listwords.length;
}

textarea.addEventListener("input", loadcounter);

loadcounter();