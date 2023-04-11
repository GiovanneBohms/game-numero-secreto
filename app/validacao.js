function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML +=`<div>valor inválido</div>`
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=`
        <div>Valor fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3> O número secreto era ${numeroSecreto}</h3>
            `   
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += ` <div> O Número secreto é menor <i class="fa-solid fa-down-long"></i></div>` 
    } else  {
        elementoChute.innerHTML += ` <div> O Número secreto é maior <i class="fa-solid fa-up-long"></i></div>` 

    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}