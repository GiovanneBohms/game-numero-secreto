function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        console.log("valor inválido")
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log('número não é válido')
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}