import { Clue } from "./clue.js";
import { navigateTo } from "./utils.js";

// Main Function
document.body.appendChild(
  Clue("When you truly focus on Madame,\nshe will smile!")
);

document.getElementById("mouth").addEventListener("click", () => {
  navigateTo("circus.html");
  // window.location.replace(window.location.origin + "/circus.html");
});
