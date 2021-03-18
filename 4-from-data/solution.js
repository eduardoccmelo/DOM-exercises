const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

const container = document.querySelector(".container");

let button = document.querySelector(".button-add");

button.addEventListener("click", () => {
  let square = document.createElement("div");
  square.classList.add("box");
  square.style.backgroundColor = "lightgreen";
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = "lightseagreen";
  container.append(square);
  container.append(circle);
  container.append(square.cloneNode(true));
  container.append(circle.cloneNode(true));
});
