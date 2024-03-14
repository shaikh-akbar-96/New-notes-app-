const notesEle = document.querySelector(".notes");
console.log("notesEle:", notesEle);
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const main = notesEle.querySelector(".main");
console.log("main:", main);
const textArea = notesEle.querySelector("textarea");
console.log("textArea:", textArea);

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");

  textArea.classList.toggle("hidden");
});
