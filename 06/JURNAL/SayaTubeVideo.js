class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul tidak boleh null dan maksimal 200 karakter");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5 digit
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count <= 0 || count > 25000000) {
            throw new Error("Penambahan play count harus positif dan maksimal 25 juta");
        }
        try {
            let newCount = this.playCount + count;
            if (newCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Error: Play count melebihi batas integer!");
            }
            this.playCount = newCount;
        } catch (error) {
            console.error(error.message);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}\n`);
    }
}

export default SayaTubeVideo;
