window.addEventListener("load", start);

let videoScr = document.querySelector("#videoScr");
let playBtn = document.querySelector("#playBtn");
function start() {
  document.querySelector("#screen").addEventListener("click", playVideo);
}
function playVideo() {
  console.log("playVideo");
  if (videoScr.paused == true) {
    videoScr.play();
    playBtn.classList.add("hidden");
    console.log(videoScr.paused);
  } else {
    videoScr.pause();
    playBtn.classList.remove("hidden");
  }
}
