let acertos = 0;
let vitorias = 0;
let derrotas = 0;
let running = false;

const randNum = document.querySelector(".num--atual");
const startBtn = document.querySelector("#btn--start");
const maisAlto = document.querySelector("#btn--alto");
const maisBaixo = document.querySelector("#btn--baixo");
const scoreBoard = document.querySelector(".num--vit");
const loserBoard = document.querySelector(".num--der");

function sortearNum() {
  let numAleatorio = Math.floor(Math.random() * 20) + 1;
  console.log(numAleatorio);
  randNum.textContent = numAleatorio;
  return numAleatorio;
}

function verificarAcerto(guess) {
  console.log(guess);
  if (!running) {
    alert("Inicie o jogo antes...");
    return;
  }

  let numAnterior = Number(randNum.textContent);
  while (numAnterior == randNum.textContent) {
    sortearNum();
  }

  let numNovo = Number(randNum.textContent);

  setTimeout(() => {
    if (guess === "alto" && numNovo > numAnterior) {
      alert("A sorte te favorece... o número é mais alto");
      checarVitoria();
    } else if (guess === "baixo" && numNovo < numAnterior) {
      alert("A sorte te favorece... o número é mais baixo");
      checarVitoria();
    } else {
      alert("There can be no hope in this hell... no hope at all!");
      gameOver();
    }
  }, 100);
}

function checarVitoria() {
  acertos++;
  if (acertos >= 3) {
    alert("🏆 Parabéns!!");
    vitorias++;
    scoreBoard.textContent = vitorias;
    resetarJogo();
  }
}

function gameOver() {
  derrotas++;
  loserBoard.textContent = derrotas;
  resetarJogo();
}

function resetarJogo() {
  running = false;
  acertos = 0;
  randNum.textContent = "";
}

function iniciarJogo() {
  running = true;
  sortearNum();
}

startBtn.addEventListener("click", iniciarJogo);
