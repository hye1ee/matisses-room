import { Clue } from "./clue.js";

// Main Function
document.body.appendChild(
  Clue("Looks like the frame shook.\nCan you clean it up?")
);

let asset = 1;
let asset1X = 400;
let asset2Y = 400;
let asset3X = -800;

document.addEventListener("wheel", (evt) => {
  if (asset == 1) {
    if (evt.deltaY > 50) asset1X += 10;
    else if (evt.deltaY < -50) asset1X -= 10;
    document.getElementById(
      "codomas1"
    ).style.transform = `translate(${asset1X}px,0)`;
    if (asset1X == 0) asset += 1;
  } else if (asset == 2) {
    if (evt.deltaY > 50) asset2Y -= 10;
    else if (evt.deltaY < -50) asset2Y += 10;
    document.getElementById(
      "codomas2"
    ).style.transform = `translate(0, ${asset2Y}px)`;
    if (asset2Y == 0) asset += 1;
  } else if (asset == 3) {
    if (evt.deltaY > 50) asset3X -= 10;
    else if (evt.deltaY < -50) asset3X += 10;
    document.getElementById(
      "codomas3"
    ).style.transform = `translate(${asset3X}px,0)`;
    if (asset3X == 0) {
      window.location.replace(window.location.origin + "/icarus.html");
    }
  }
});
