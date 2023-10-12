let root = document.documentElement;
let width = document.getElementById("width");
let height = document.getElementById("height");
window.addEventListener("resize", scale);

function scale() {
  let size = Math.min(window.innerWidth, window.innerHeight);
  root.style.setProperty("--size", size + "px");
  // root.style.setProperty("--font_one", size / 30 + "px");
  // root.style.setProperty("--border-thickness", Math.floor(size / 65) + "px");
}

scale();
