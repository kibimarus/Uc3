let pontos = 0
let placar = document.getElementById("placar")
let feedback = document.getElementById("feedback")

function responder(correta){
    if (correta){
        pontos = pontos + 1
        feedback.innerHTML = "Parabéns você acertou!"
    }

    else {
        pontos = pontos
        feedback.innerHTML = ""
    }
}