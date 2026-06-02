
let vitoriaJogador = 0;
let vitoriaMaquina = 0;
let tempoDePopup;
let tempoCor;

const placar = document.getElementById("placar");
const popup = document.getElementById("popup");
const tela = document.getElementById("tela");

function mudarCorTela(cor) {
    clearTimeout(tempoCor);

    tela.classList.remove(
        "bg-gray-800", "bg-green-700", "bg-red-700", "bg-yellow-500"
    );

    tela.classList.add(cor);

    tempoCor = setTimeout(() => {
        tela.classList.remove(cor);
        tela.classList.add("bg-gray-800");
    }, 1000);
}

function mostrarPopup(texto) {
    popup.innerText = texto;

    popup.style.top = "30px";

    clearTimeout(tempoDePopup);

    tempoDePopup = setTimeout(() => {
        popup.style.top = "-100px";
    }, 3000);
}

function escolhaMaquina() {
    const opçao = ["pedra", "papel", "tesoura"];
    const opçaoSorteada = Math.floor(Math.random() * 3);
    return opçao[opçaoSorteada]
}



function rodarJogo(escolhaJogador) {
    const resutadoMaquina = escolhaMaquina()



    if (escolhaJogador === resutadoMaquina) {
        console.log("empate");
        mostrarPopup("EMPATE, a maquina escolheu: " + resutadoMaquina)
        mudarCorTela("bg-yellow-500")

    }
    else if (escolhaJogador === "pedra" && resutadoMaquina === "tesoura" ||
        escolhaJogador === "papel" && resutadoMaquina === "pedra" ||
        escolhaJogador === "tesoura" && resutadoMaquina === "papel"
    ) {
        vitoriaJogador++
        console.log("venceu");
        mostrarPopup("VENCEU, a maquina escolheu: " + resutadoMaquina)
        mudarCorTela("bg-green-700")

    } else {
        vitoriaMaquina++
        console.log("perdeu");
        mostrarPopup("PERDEU, a maquina escolheu: " + resutadoMaquina)
        mudarCorTela("bg-red-700")

    }
    placar.innerText = vitoriaJogador + " - " + vitoriaMaquina;


}




pedra.addEventListener("click", () => {
    rodarJogo("pedra")
});

papel.addEventListener("click", () => {
    rodarJogo("papel")
});

tesoura.addEventListener("click", () => {
    rodarJogo("tesoura")
});