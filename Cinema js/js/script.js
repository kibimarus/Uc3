function calcular() {

    let filme = document.getElementById("filme").value;
    let quantidade = document.getElementById("quantidade").value;
    let combo = document.getElementById("combo").value;

    let nomeFilme;
    let precoCombo = 0;

    switch (filme) {
        case "D039":
            nomeFilme = "O Poderoso Chefão";
            break;

        case "B678":
            nomeFilme = "Matrix";
            break;

        case "D889":
            nomeFilme = "O Senhor dos Anéis";
            break;

        case "M912":
            nomeFilme = "Interestelar";
            break;

        case "G007":
            nomeFilme = "O Resgate do Soldado Ryan";
            break;
    }

    switch (combo) {
        case "COMBO-005":
            precoCombo = 15.90;
            break;

        case "COMBO-072":
            precoCombo = 17.90;
            break;

        case "COMBO-777":
            precoCombo = 14.90;
            break;

        case "COMBO-215":
            precoCombo = 25.90;
            break;

        case "nenhum":
            precoCombo = 0;
            break;
    }

    let dataHoje = new Date();
    let numeroDia = dataHoje.getDay();

    let precoIngresso;

    if (numeroDia == 1 || numeroDia == 3 || numeroDia == 5) {
        precoIngresso = 32.50;
    } else {
        precoIngresso = 36.00;
    }

    let totalIngressos = precoIngresso * quantidade;
    let total = totalIngressos + precoCombo;

    document.getElementById("resultado").innerHTML = `
        <h2>Resumo do pedido</h2>
        <p>Filme: ${nomeFilme}</p>
        <p>Ingressos: ${quantidade}</p>
        <p>Preço do ingresso: R$ ${precoIngresso.toFixed(2)}</p>
        <p>Combo: ${combo}</p>
        <h3>Total: R$ ${total.toFixed(2)}</h3>
    `;
}