window.addEventListener("load", start);

let videoScr = document.querySelector("#videoScr");

function start() {
  document.querySelector("#screen").addEventListener("click", playVideo);
}
function playVideo() {
  console.log("playVideo");
  if (videoScr.paused == true) {
    videoScr.play();

    playBtn.style.backgroundImage = "url(img/pause.svg)";
    console.log(videoScr.paused);
  } else {
    videoScr.pause();
    playBtn.style.backgroundImage = "url(img/play.svg)";
  }
}
