'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("aprovado" , "recuperacao" , "reprovado")
}

const calcularIMC = function(){

    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    let peso1 = Number(peso.value)
    let altura2 = Number(altura.value)

    let resultado1 = peso1 / (altura2 * altura2)
    
    removerClasses()
    if (resultado1 < 18.5){
        resultado.textContent = "Abaixo do peso"
        resultado.classList.add('abaixo')

    } else if (resultado1 >= 18.5 && resultado1 < 24.9) {
        resultado.textContent = "Peso normal"
        resultado.classList.add('normal')

    } else if (resultado1 >= 25.0 && resultado1 < 29.9) {
        resultado.textContent = "Acima do peso"
        resultado.classList.add('acima')

    } else if (resultado1 >= 30.0 && resultado1 < 34.9) {
        resultado.textContent = "Obesidade 1"
        resultado.classList.add('obesidade1')

    } else if (resultado1 >= 35.0 && resultado1 < 39.9) {
        resultado.textContent = "Obesidade 2"
        resultado.classList.add('obesidade2')

    } else {
        resultado.textContent = "Obesidade 3"
        resultado.classList.add('obesidade3')
    }
    
}