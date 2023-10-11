const players = document.querySelectorAll(".fa-play");
const audios = document.querySelectorAll("audio");
let musicName;
players.forEach((player) => {
  player.addEventListener("click", (event) => {
    musicName = event.target.dataset.name;
    audios.forEach((audio) => {
      if (audio.dataset.name === musicName) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
