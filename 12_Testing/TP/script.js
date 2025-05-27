function CariTandaBilangan(x) {
  if (x < 0) return "Negatif";
  if (x > 0) return "Positif";
  return "Nol";
}

function cekTanda() {
  const x = parseInt(document.getElementById("inputX").value);
  const hasil = CariTandaBilangan(x);
  document.getElementById("output").textContent = `Tanda bilangan: ${hasil}`;
}