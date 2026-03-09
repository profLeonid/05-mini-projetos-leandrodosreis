'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("desconto5" , "desconto10", "desconto11" )
}

function calcularDesconto(){
    const preco = document.getElementById('preco')
    const desconto = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    let preco1 = Number(preco.value)
    let desconto1 = Number(desconto.value)
    let resultado1 = preco1 - ((preco1/100) * desconto1)
    let valorEconomizado = preco1 - resultado1

    removerClasses()

    if(desconto1 <= 5){
        resultado.textContent = `Valor economizado: ${valorEconomizado} | Valor final: ${resultado1}`
        resultado.classList.add('desconto5')

    }else if(desconto1 <= 10 ){
        resultado.textContent = `Valor economizado: ${valorEconomizado} | Valor final: ${resultado1}`
        resultado.classList.add('desconto10')

    }else if(desconto1 > 10){
        resultado.textContent = `Valor economizado: ${valorEconomizado} | Valor final: ${resultado1}`
        resultado.classList.add('desconto11')

    }

}
