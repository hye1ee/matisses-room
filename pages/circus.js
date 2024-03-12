import { Clue } from "./clue.js";

// Main Function
document.body.appendChild(
  Clue("If the circus stops,\nyou will be able to pass.")
);

const ans = ["p", "o", "t", "s"];
window.addEventListener("keydown", (evt) => {
  const ansEl = ans.pop();

  if (evt.key !== ansEl) {
    ans.push(ansEl);
    return;
  }
  if (evt.key === "s") {
    document.getElementById("circus1").style.animation = NaN;
  } else if (evt.key === "t") {
    document.getElementById("circus2").style.animation = NaN;
  } else if (evt.key === "o") {
    document.getElementById("circus3").style.animation = NaN;
  } else if (evt.key === "p") {
    window.location.replace(window.location.origin + "/codomas.html");
  }
});
