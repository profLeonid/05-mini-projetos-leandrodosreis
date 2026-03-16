'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("aprovado" , "recuperacao" , "reprovado")
}

function calcularMedia(){
    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementById('nota2')
    const nota3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')

    let valor1 = Number(nota1.value)
    let valor2 = Number(nota2.value)
    let valor3 = Number(nota3.value)
    let resultado1 = (valor1 + valor2 + valor3) /3

    removerClasses()

    if(resultado1 >= 7){
        resultado.textContent = "Aprovado"
        resultado.classList.add('aprovado')

    }else if(resultado1 >= 5){
        resultado.textContent = "Recuperação"
        resultado.classList.add('recuperacao')

    }else if(resultado1 < 5){
        resultado.textContent = "Reprovado"
        resultado.classList.add('reprovado')
    }
}