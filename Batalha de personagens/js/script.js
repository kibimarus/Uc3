
let tagPontosPlayer = document.getElementById("pontos-jogador")
let tagPontosCPU = document.getElementById("pontos-maquina")

let pontosPlayer = 0
let pontosMaquina = 0


function jogar(jogada){


    let jogadaNumero = Math.floor(Math.random() * 5)


    let jogadaMaquina = ""

    switch(jogadaNumero){

        case 0:
            jogadaMaquina = "Arqueiro"
            break

        case 1:
            jogadaMaquina = "Guerreiro"
            break

        case 2:
            jogadaMaquina = "Ladino"
            break

        case 3:
            jogadaMaquina = "Mago"
            break

        case 4:
            jogadaMaquina = "Paladino"
            break
    }

    let vencedor = quemVenceu(jogada, jogadaMaquina)


    alert(
        "Player jogou: " + jogada +
        "\nMáquina jogou: " + jogadaMaquina
    )


    if(vencedor == "EMPATE"){

        alert("Deu empate!")

    }

    else if(vencedor == "PLAYER"){

        alert("PLAYER venceu!!")

        pontosPlayer++

    }

    else{

        alert("MÁQUINA venceu!!")

        pontosMaquina++
    }


    atualizaPlacar()
}


function quemVenceu(jogadaP, jogadaM){

    // ?  empate

    if(jogadaP == jogadaM){

        return "EMPATE"
    }


    // ? Guerreiro vence 

    else if(
        jogadaP == "Guerreiro" &&
        (jogadaM == "Arqueiro" || jogadaM == "Ladino")
    ){

        return "PLAYER"
    }


    // ? Mago vence 

    else if(
        jogadaP == "Mago" &&
        (jogadaM == "Guerreiro" || jogadaM == "Paladino")
    ){

        return "PLAYER"
    }


    // ? Arqueiro vence 

    else if(
        jogadaP == "Arqueiro" &&
        (jogadaM == "Mago" || jogadaM == "Paladino")
    ){

        return "PLAYER"
    }


    // ? Ladino vence 

    else if(
        jogadaP == "Ladino" &&
        (jogadaM == "Mago" || jogadaM == "Arqueiro")
    ){

        return "PLAYER"
    }


    // ? Paladino vence 

    else if(
        jogadaP == "Paladino" &&
        (jogadaM == "Guerreiro" || jogadaM == "Ladino")
    ){

        return "PLAYER"
    }

    else{

        return "MÁQUINA"
    }
}
function atualizaPlacar(){

    // ? o innerhtml não está funcionando// ver oq é
    tagPontosPlayer.innerHTML =
        "Player Pontos: " + pontosPlayer

    tagPontosCPU.innerHTML =
        "Máquina Pontos: " + pontosMaquina

        verificaFimDeJogo()
}

  
function verificaFimDeJogo() {
    if (pontosPlayer >= 5) {
        alert("O PLAYER venceu a partida!")
        resetarJogo()
    } else if (pontosMaquina >= 5) {
        alert("A MÁQUINA venceu a partida!")
        resetarJogo()
    }
}
 
function resetarJogo() {
    pontosPlayer = 0
    pontosMaquina = 0
 
    tagPontosPlayer.innerHTML = "Player Pontos: 0"
    tagPontosCPU.innerHTML = "Máquina Pontos: 0"
}