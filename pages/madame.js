import { Clue } from "./clue.js";

// Main Function
document.body.appendChild(
  Clue("When you truly focus on Madame,\nshe will smile!")
);

document.getElementById("mouth").addEventListener("click", () => {
  window.location.replace(window.location.origin + "/circus.html");
});
