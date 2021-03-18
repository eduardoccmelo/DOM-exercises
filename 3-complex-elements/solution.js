let container = document.querySelector(".container");
let button = document.querySelector(".button-add");

button.addEventListener("click", () => {
  let box = document.createElement("div");
  box.classList.add("box");
  container.append(box);
  let input = document.createElement("input");
  box.append(input);
  input.type = "color";
  box.addEventListener("input", () => {
    box.style.backgroundColor = input.value;
  });
});
