
    
    let tagpeso = document.getElementById("peso")
    let tagaltura = document.getElementById("altura")
    let tagResultado = document.getElementById("resultado")
    
    function calcular(){
    
        if (tagpeso.value ==""){
            alert("Preencha o campo Peso!")
            return
        } 
        else if (tagaltura.value ==""){
            alert("Preencha o campo Altura!")
            return
        }
        let peso = Number(tagpeso.value)
        let altura = Number(tagaltura.value)
    
        let imc = peso / (altura * altura)
    
        let classificacao = ""
        let tagBody = document.querySelector("body");
    
        if (imc < 18.5){
            classificacao = "Abaixo do peso"
            tagBody.style.background = "none"
            tagBody.style.backgroundColor = "lightgreen"
        }
        else if (imc < 25){
            classificacao = "Peso normal"
            tagBody.style.background = "none"
            tagBody.style.backgroundColor = "green"
        }
        else if (imc < 30){
            classificacao = "Sobrepeso"
            tagBody.style.background = "none"
            tagBody.style.backgroundColor = "orange"
        }
        else {
            classificacao = "Obesidade"
            tagBody.style.background = "none"
            tagBody.style.backgroundColor = "red"
        }
    
        tagResultado.innerHTML = "Sua classificação é: " + classificacao
    
    }