let resultadoFinal = pontuacao (200, 1)

function pontuacao (vitoria, derrota){

    let resultado = vitoria - derrota

   return resultado
}

switch(true){
    case (resultadoFinal < 10):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Ferro")
    break;
    case (resultadoFinal <20):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Bronze")
    break;
    case (resultadoFinal <50):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Prata")
    break;
    case (resultadoFinal <80):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Ouro")
    break;
    case (resultadoFinal <90):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Diamante")
    break;
    case (resultadoFinal <100):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Lendário")
    break;
    case (resultadoFinal >=101):
        console.log("O Heroi tem de saldo " + resultadoFinal + " está no nível: Imortal")
    break;

}