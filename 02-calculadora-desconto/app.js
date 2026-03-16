'use strict'

const valorEconomizado = (preco, desconto) => preco * desconto /100

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

function selecionarCor (desconto){
    
    let classe = ''
    if(desconto <= 5) return'desconto5'
    if(desconto <= 10) return'desconto10'
    return'desconto11'

}

function handleClick(){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal (preco, valorEconomizado)
    const cor = selecionarCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto5','desconto10','desconto11')
    resultado.classList.add(cor)
}

//Minha versão

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("desconto5" , "desconto10", "desconto11" )
}

function handleClick(){
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

//vitor mono
//font