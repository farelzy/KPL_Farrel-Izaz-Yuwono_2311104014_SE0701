const MatematikaLibraries = {
  FPB: function(x, y) {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  },

  KPK: function(x, y) {
    const fpb = this.FPB(x, y);
    return (x * y) / fpb;
  },

  Turunan: function(z) {
    const hasil = [];
    for (let i = 1; i < z.length; i++) {
      const koef = z[i] * i;
      if (koef === 0) continue;
      const pangkat = i - 1;
      const term = pangkat === 0 ? `${koef}` :
                   pangkat === 1 ? `${koef}x` :
                   `${koef}x^${pangkat}`;
      hasil.push(term);
    }
    return hasil.join(' + ').replace(/\+ -/g, '- ');
  },

  Integral: function(z) {
    const hasil = [];
    for (let i = 0; i < z.length; i++) {
      const koef = z[i];
      const penyebut = i + 1;
      const term = `${koef}/${penyebut}x^${penyebut}`;
      hasil.push(term);
    }
    hasil.push('C');
    return hasil.join(' + ').replace(/\+ -/g, '- ');
  }
};

module.exports = MatematikaLibraries;
