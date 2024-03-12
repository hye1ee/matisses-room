import { Clue } from "./clue.js";
import { navigateTo } from "./utils.js";

// Main Function
document.body.appendChild(Clue("Can you draw a star for me?\n9 10 8 11 9 9"));

const order = [0, 0, 0, 0, 0, 0];
let click = 0;

const checkOrder = () => {
  const newOrder = [
    ...order.slice((click + 1) % 6),
    ...order.slice(0, (click + 1) % 6),
  ];
  console.log(order, newOrder, newOrder.toString());
  if (newOrder.toString() === "92,10,8,11,91,92") {
    const Overlay = document.createElement("div");
    Overlay.style = `
      width : 100%;
      height: 100%;
      opacity: 0;
      background-color: black;
      z-index: 500;
      position: absolute;
      top: 0;
      left: 0;
      transition : all 2s;
    `;
    document.body.append(Overlay);
    setTimeout(() => {
      Overlay.style.opacity = 1;
      setTimeout(() => {
        navigateTo("dne.html");
        // window.location.replace(window.location.origin + "/dne.html");
      }, 2000);
    }, 100);
  }
  click += 1;
};

document.getElementById("star8").addEventListener("click", () => {
  order[click % 6] = 8;
  checkOrder();
});
document.getElementById("star91").addEventListener("click", () => {
  order[click % 6] = 91;
  checkOrder();
});
document.getElementById("star92").addEventListener("click", () => {
  order[click % 6] = 92;
  checkOrder();
});
document.getElementById("star10").addEventListener("click", () => {
  order[click % 6] = 10;
  checkOrder();
});
document.getElementById("star11").addEventListener("click", () => {
  order[click % 6] = 11;
  checkOrder();
});
