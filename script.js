let root = document.documentElement;
let width = document.getElementById("width");
let height = document.getElementById("height");
let soundButton = document.getElementById("sound");
let volOffIcon = document.getElementById("soundOff");
let volOnIcon = document.getElementById("soundOn");
let startButton = document.getElementById("startButton");
let textContainer = document.getElementById("text-container");

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
  kid_laughing_audio.currentTime = 0;
  kid_laughing_audio.play();
  startGame();
});

//chapters

let chapters = [
  { id: 1, title: "Your Time", content: "" },
  { id: 2, title: "Going Out", content: "" },
  { id: 3, title: "A Release", content: "" },
  { id: 4, title: "Let it In!", content: "" },
  { id: 5, title: "Let it Out!", content: "" },
  { id: 6, title: "The Great Outdoors", content: "" },
  { id: 7, title: "Cut it off", content: "" },
  { id: 8, title: "A Familiar Feeling", content: "" },
];
function startGame() {
  ThemeSong.play();
  startChapter(1);
}
function startChapter(chapterId) {
  const chapter = chapters.find((chapter) => chapter.id === chapterId);
  console.log(chapter);

  ShowChapterDescription(chapter);
  // play game
  // move on to next game
}

function ShowChapterDescription(chapter) {
  textContainer.innerHTML = "";
  //chapter
  let chapterNum = document.createElement("h2");
  chapterNum.innerHTML = `Chapter: ${chapter.id}`;
  textContainer.appendChild(chapterNum);

  let chapterTitle = document.createElement("h1");
  chapterTitle.innerHTML = chapter.title;
  textContainer.appendChild(chapterTitle);
  let beginChapterButton = document.createElement("button");
  beginChapterButton.innerHTML = "Begin";
  textContainer.appendChild(beginChapterButton);
  // title
  // button to play game
}
