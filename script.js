let root = document.documentElement;
let width = document.getElementById("width");
let height = document.getElementById("height");
let soundButton = document.getElementById("sound");
let volOffIcon = document.getElementById("soundOff");
let volOnIcon = document.getElementById("soundOn");
let startButton = document.getElementById("startButton");

window.addEventListener("resize", scale);
function scale() {
  let size = Math.min(document.body.clientWidth, document.body.clientHeight);
  root.style.setProperty("--size", size + "px");
  // root.style.setProperty("--font_one", size / 30 + "px");
  // root.style.setProperty("--border-thickness", Math.floor(size / 65) + "px");
}

scale();

var ThemeSong = new Audio("assets/audio/sad_music.m4a");
var kid_laughing_audio = new Audio("assets/audio/kid_laughing.m4a");
kid_laughing_audio.volume = 0.05;

ThemeSong.loop = true;
soundButton.addEventListener("click", () => {
  let muted = ThemeSong.muted;
  volOffIcon.style.display = muted ? "none" : "inline";
  volOnIcon.style.display = muted ? "inline" : "none";

  ThemeSong.muted = !ThemeSong.muted;
});

//startScreen
startButton.addEventListener("click", () => {
  ThemeSong.play();

  kid_laughing_audio.currentTime = 0;
  kid_laughing_audio.play();
});
