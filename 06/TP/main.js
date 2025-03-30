const SayaTubeVideo = require('./SayaTubeVideo');

try {
    let video = new SayaTubeVideo("Tutorial Design By Contract - Farrel");
    video.printVideoDetails();

    video.increasePlayCount(1000000);
    video.printVideoDetails();

    video.increasePlayCount(10000000); // Uji batas maksimal
    video.printVideoDetails();

    for (let i = 0; i < 1000; i++) {
        video.increasePlayCount(10000000);
    }

} catch (error) {
    console.error("Error:", error.message);
}
