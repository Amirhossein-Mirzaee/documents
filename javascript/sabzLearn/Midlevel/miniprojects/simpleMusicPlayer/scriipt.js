const $ = document;

const musicSrc = [
  "./musics/Haamim - Ghalbe Mani (128).mp3",
  "./musics/Haamim - Zendegi Kardam (320).mp3",
  "./musics/Haamim - Eshghe Ghadimi (320).mp3",
];

let audioIndex = 0;

const audioElem = $.querySelector("audio");
const timePlusHandler = () => {
  audioElem.currentTime += 5;
};
const timeMinusHandler = () => {
  audioElem.currentTime -= 5;
};

const preveiousHandler = () => {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = 2;
  }
  console.log(musicSrc[audioIndex]);
  audioElem.setAttribute("src", musicSrc[audioIndex]);
  playHandler();
};
const playHandler = () => {
  audioElem.play();
  console.log("played");
};
const pauseHandler = () => {
  audioElem.pause();
  console.log("paused");
};
const nextHandler = () => {
  audioIndex++;
  if (audioIndex > musicSrc.length - 1) {
    audioIndex = 0;
  }
  console.log(musicSrc[audioIndex]);
  audioElem.setAttribute("src", musicSrc[audioIndex]);
  playHandler();
};
