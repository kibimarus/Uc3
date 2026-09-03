let tagNome = document.getElementById("nome")

function cadastro(){
    let nome = tagNome.value.trim();

    if (nome == ""){
        alert("Preencha seu nome para continuar!")
        return
    }
}