// Variável de controle para indicar se o jogo está sendo executado/andamento ou parado.
let executando = false;
let acertos = 0;

const startBotao = document.querySelector("#btn--start");
const numSorteado = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit");
const placarDer = document.querySelector(".num--der");


// const start = document.getElementById("btn--start")

// AddEventListener pede uma função como CALLBACK, uma função que irá retornar/ será executada quando o click acontecer.
startBotao.addEventListener("click", startGame)

function startGame() {
    if (executando) {
        alert("Jogo já está em andamento... ✔")
        return
    } else {
        // Sorteamos um número entre 1 e 20
        numSorteado.textContent = Math.floor(Math.random()*20+1)
        executando = true    
    }
}

function verificarResposta(palpite) {
    let numAnterior = Number(numSorteado.textContent);
    numSorteado.textContent = Math.floor(Math.random()*20+1)
    let numNovo = numSorteado.textContent;
    // O IF!!!
    if (palpite === "alto" && numNovo > numAnterior) {
        acertos++;
        verificarVitoria();
        
    } else if (palpite === "baixo" && numNovo < numAnterior) {
        acertos++
        verificarVitoria();
        
    } else {
        gameOver();
    }
}

function sortearNum() {
    return numSorteado.textContent = Math.floor(Math.random()*20+1)
}

function verificarVitoria() {
    if (acertos >= 3) {
        placarVit.textContent++
        resetarJogo()
    }

}

function gameOver() {
    placarDer.textContent++;
    resetarJogo()
}

function resetarJogo() {
    executando = false
        numSorteado.textContent = "";
        acertos = 0;
}