const fs = require('fs');

class GlossaryItem2311104014 {
    static ReadJSON() {
        try {
            const data = fs.readFileSync('./07/jurnal7_3_2311104014.json', 'utf8');
            const obj = JSON.parse(data);

            const glossEntry = obj.glossary.GlossDiv.GlossList.GlossEntry;

            console.log("=== Data Glossary (GlossEntry) ===");
            console.log(`ID: ${glossEntry.ID}`);
            console.log(`Sort As: ${glossEntry.SortAs}`);
            console.log(`Istilah: ${glossEntry.GlossTerm}`);
            console.log(`Akrnoym: ${glossEntry.Acronym}`);
            console.log(`Singkatan: ${glossEntry.Abbrev}`);
            console.log(`Definisi: ${glossEntry.GlossDef.para}`);
            console.log(`Lihat Juga: ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
            console.log(`Lihat: ${glossEntry.GlossSee}`);
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca atau parsing file JSON:", error);
        }
    }
}

module.exports = GlossaryItem2311104014;