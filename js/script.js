const button = document.getElementById("button");
const grid = document.getElementById("grid");

function createSquare() {
  let currentElement = document.createElement("div");

  currentElement.classList.add("square");

  return currentElement;
}

button.addEventListener("click", function () {
  for (let i = 0; i < 100; i++) {
    let currentSquare = createSquare();

    currentSquare.addEventListener("click", function () {
      this.classList.toggle("bg-lightblue");
      console.log(i + 1);
    });

    currentSquare.innerText = i + 1;
    grid.append(currentSquare);
  }
});
