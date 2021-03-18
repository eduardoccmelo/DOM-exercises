let container = document.querySelector(".container");
let button = document.querySelector(".button-add");

button.addEventListener("click", () => {
  let box = document.createElement("div");
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation === true) {
      box.remove();
    }
  });
});
