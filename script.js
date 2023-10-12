let root = document.documentElement;
let width = document.getElementById("width");
let height = document.getElementById("height");
let soundButton = document.getElementById("sound");
let volOffIcon = document.getElementById("soundOff");
let volOnIcon = document.getElementById("soundOn");
window.addEventListener("resize", scale);

function scale() {
  let size = Math.min(document.body.clientWidth, document.body.clientHeight);
  root.style.setProperty("--size", size + "px");
  // root.style.setProperty("--font_one", size / 30 + "px");
  // root.style.setProperty("--border-thickness", Math.floor(size / 65) + "px");
}

scale();

var audio = new Audio("assets/sad_music.m4a");
audio.loop = true;
audio.muted = true;
soundButton.addEventListener("click", () => {
  audio.play();
  let muted = audio.muted;
  volOffIcon.style.display = muted ? "none" : "inline";
  volOnIcon.style.display = muted ? "inline" : "none";

  audio.muted = !audio.muted;
});
