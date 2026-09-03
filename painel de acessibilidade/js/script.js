let texto = document.getElementById("texto")
tagBody = document.querySelector("body")
let status = document.getElementById("status")
let tamanho =  19

function aumentar () {
    tamanho = tamanho + 2
    texto.style.fontSize = tamanho + "px"
    status.innerHTML = " A função Aumentar a fonte foi utilizada!"
}

function diminuir (){
    tamanho = tamanho - 2
    texto.style.fontSize = tamanho + "px"
    status.innerHTML = " A função Diminuir fonte foi utilizada!"
}

function noturno (){
    tagBody.style.background = "none"
    tagBody.style.backgroundColor = "black" 
    tagBody.style.color = "white"
    status.innerHTML = " A função Modo Noturno foi utilizada!"
}