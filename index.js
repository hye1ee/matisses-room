import { Clue } from "./pages/clue.js";

// Main Function
document.body.appendChild(
  Clue(
    "Open the door wide and knock!\nIt will probably open up in the fifth time."
  )
);

const knock = [];
document.getElementById("window-inside").addEventListener("click", (evt) => {
  knock.push("knock");
  if (knock.length == 5) {
    window.location.replace(window.location.origin + "/funeral.html");
  }
});

document.getElementById("before-start").addEventListener("mouseover", () => {
  document.getElementById("before-overlay").style.visibility = "visible";
  document.getElementById("before-overlay").style.opacity = 1;
});
document.getElementById("before-start").addEventListener("mouseout", () => {
  document.getElementById("before-overlay").style.opacity = 0;
  document.getElementById("before-overlay").style.visibility = "hidden";
});
