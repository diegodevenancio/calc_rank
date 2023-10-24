//Calculadora de Partidas Rankeadas
//Percebi que poderia realizar função para todo o código

//Declaração de variáveis
let vitoria = 10
let derrota = 2
let nome = "Hulk"

//Chamada das funções
//Criei uma variável para receber o resultado de vitórias - derrotas da função calc
saldoVitoria = calc(vitoria, derrota)
nivel(saldoVitoria)
mensagem(saldoVitoria, nivel)

//Função para calcular o número de vitórias - derrotas
function calc(){
    return vitoria - derrota
}

//Função para identificar em qual nível o herói de encontra
function nivel(saldoVitoria) {
    if (saldoVitoria <= 10) {
        return "nível de Ferro"
    } else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
        return "nível de Bronze"
    } else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
        return "nível de Prata"
    } else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
        return "nível de Ouro"
    } else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
        return "nível de Diamante"
    } else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
        return "nível de Lendário"
    } else {
        return "nível de Imortal"
    }
}

//Essa é a função principal que utiliza todas as outras funções acima
//Nessa função é apresentado o nome do herói, a quantidades de vitórias que ele tem e qual o nível ele está
function mensagem(saldoVitoria, nivel){
    if (saldoVitoria <= 10){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    } else if(saldoVitoria >= 11 && saldoVitoria <= 20){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }else if(saldoVitoria >= 21 && saldoVitoria <= 50){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }else if(saldoVitoria >= 51 && saldoVitoria <= 80){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }else if(saldoVitoria >= 81 && saldoVitoria <= 90){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }else if(saldoVitoria >= 91 && saldoVitoria <= 100){
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }else{
        console.log("O Herói de nome " + nome + " tem saldo de " + saldoVitoria + " vitórias e está no " + nivel(saldoVitoria))
    }
}
