import { Clue } from "./clue.js";

// Main Function
document.body.appendChild(Clue("The horse likes rules\n ↑ ↓ → ←"));

let x = 0;
let y = 0;
window.addEventListener("keydown", (evt) => {
  if (evt.key === "ArrowDown") {
    y += 5;
  } else if (evt.key === "ArrowUp") {
    y -= 5;
  } else if (evt.key === "ArrowLeft") {
    x -= 5;
  } else if (evt.key === "ArrowRight") {
    x += 5;
  }
  document.getElementById(
    "horse"
  ).style.transform = `translate(${x}px, ${y}px)`;

  if (x == 205 && y == -130) {
    window.location.replace(window.location.origin + "/madame.html");
  }
});
