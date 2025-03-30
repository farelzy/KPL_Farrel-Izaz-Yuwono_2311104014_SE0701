import SayaTubeVideo from "./SayaTubeVideo.js";
import SayaTubeUser from "./SayaTubeUser.js";

function main() {
    try {
        let user = new SayaTubeUser("Farel");
        let judulFilm = [
            "Inception", "Interstellar", "The Dark Knight", "Avengers: Endgame", "Parasite", 
            "The Matrix", "Shutter Island", "Whiplash", "Joker", "Spirited Away"
        ];
        
        for (let i = 0; i < judulFilm.length; i++) {
            let video = new SayaTubeVideo(`Review Film ${judulFilm[i]} oleh Farel`);
            video.increasePlayCount(1000000);
            user.addVideo(video);
            video.printVideoDetails();
        }

        user.printAllVideoPlayCount();

        let testVideo = new SayaTubeVideo("Video Overflow Test");
        try {
            for (let i = 0; i < 1000; i++) {
                testVideo.increasePlayCount(25000000);
            }
        } catch (error) {
            console.error("Terjadi error saat menambah play count: ", error.message);
        }
        
    } catch (error) {
        console.error("Terjadi kesalahan: ", error.message);
    }
}

main();
