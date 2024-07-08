const button = document.getElementById("button");
const grid = document.getElementById("grid");
const bombs = randomNumberGenerator(16);
let score = 0;
let gameOver = false;
let createGrid = false;

function createSquare() {
  let currentElement = document.createElement("div");
  currentElement.classList.add("square");

  return currentElement;
}

button.addEventListener("click", function () {
  if (createGrid) return;
  createGrid = true;

  for (let i = 0; i < 100; i++) {
    let currentSquare = createSquare();

    currentSquare.addEventListener("click", function () {
      if (gameOver) return;
      if (bombs.includes(i)) {
        this.classList.add("bg-red");
        console.log("Hai calpestato una bomba! Game over.");
        console.log("Punteggio totale: " + score);
        gameOver = true;
      } else {
        this.classList.add("bg-lightblue");
        score++;

        if (score === 100 - bombs.lenght) {
          console.log("Hai vinto!");
          console.log("Punteggio totale: " + score);
          gameOver = true;
        }
      }
    });

    currentSquare.innerText = i + 1;
    grid.append(currentSquare);
  }
});

function randomNumberGenerator(quantity) {
  let bombs = [];
  while (bombs.length < quantity) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
  return bombs;
}
