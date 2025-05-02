const fs = require('fs');

class TeamMember2311104014 {
    static ReadJSON() {
        try {
            // Baca file JSON (nama file sesuai dengan yang kamu punya)
            const data = fs.readFileSync('./07/jurnal7_2_2311104014.json', 'utf8');
            const obj = JSON.parse(data);

            console.log("Team member list:");
            obj.teamMember.forEach(member => {
                console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
            });
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca atau parsing file JSON:", error);
        }
    }
}

module.exports = TeamMember2311104014;