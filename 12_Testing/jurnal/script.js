function CariNilaiPangkat(a, b) {
  // Aturan validasi
  if (a === 0 && b === 0) return 1;
  if (a < 0) return -1;
  if (b < 0 || b > 10) return -2;

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;
  }

  if (hasil > 1000) return -3;

  return hasil;
}

function hitungPangkat() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);

  let pesan;
  switch (hasil) {
    case -1:
      pesan = "Error: Nilai a tidak boleh negatif.";
      break;
    case -2:
      pesan = "Error: Nilai b harus di antara 0 hingga 10.";
      break;
    case -3:
      pesan = "Error: Hasil melebihi batas maksimum (1000).";
      break;
    default:
      pesan = `Hasil dari ${a} pangkat ${b} adalah ${hasil}`;
  }

  document.getElementById("output").textContent = pesan;
}