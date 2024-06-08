// Variável de controle para indicar se o jogo está sendo executado/andamento ou parado.
let executando = false;
const startBotao = document.querySelector("#btn--start");
const numSorteado = document.querySelector(".num--atual");


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
    alert(`O palpite foi ${palpite}`)
}