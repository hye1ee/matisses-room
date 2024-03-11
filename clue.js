export const Clue = (text) => {
  const ClueContainer = document.createElement("div");
  ClueContainer.style = `
    width: fit-content;
    
    position: absolute;
    bottom: 30px;
    left: 40px;

    z-index: 100;
  `;

  const ClueIconWrapper = document.createElement("div");
  ClueIconWrapper.className = "clue-button";
  const ClueIcon = document.createElement("img");
  ClueIcon.src = "assets/clue.png";

  const NoteWrapper = document.createElement("div");
  NoteWrapper.style = `
    display: none;
    width : 280px;
    height: 340px;

    position: absolute;
    bottom: 180px;
    left: 0px;
    transition: all 0.1s;
  `;
  const NoteIcon = document.createElement("img");
  NoteIcon.src = "assets/note.png";
  const NoteText = document.createElement("div");
  NoteText.innerText = text;
  NoteText.style = `
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  ClueIconWrapper.addEventListener("pointerover", () => {
    NoteWrapper.style.display = "block";
  });
  ClueIconWrapper.addEventListener("pointerout", () => {
    NoteWrapper.style.display = "none";
  });

  ClueIconWrapper.appendChild(ClueIcon);
  NoteWrapper.append(NoteIcon, NoteText);
  ClueContainer.append(ClueIconWrapper, NoteWrapper);

  return ClueContainer;
};
