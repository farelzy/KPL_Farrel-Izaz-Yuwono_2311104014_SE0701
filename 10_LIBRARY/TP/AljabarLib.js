const AljabarLibraries = {
  AkarPersamaanKuadrat: function([a, b, c]) {
    const D = b * b - 4 * a * c;

    if (D < 0) return [];

    const akar1 = (-b + Math.sqrt(D)) / (2 * a);
    const akar2 = (-b - Math.sqrt(D)) / (2 * a);

    return [akar1, akar2];
  },

  HasilKuadrat: function([a, b]) {
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;
    return [a2, ab2, b2];
  }
};

module.exports = AljabarLibraries;
