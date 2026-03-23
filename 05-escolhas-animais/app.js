'use strict'

document.getElementById("tipo").addEventListener("change", atualizarClasse)
document.getElementById("classe").addEventListener("change", atualizarGrupo)
document.getElementById("grupo").addEventListener("change", mostrarResultado)
const resultado = document.getElementById('resultado')

function atualizarClasse() {

    const tipo = document.getElementById("tipo").value
    const classe = document.getElementById("classe")
    const grupo = document.getElementById("grupo")

    classe.innerHTML = ""
    grupo.innerHTML = ""

    if (tipo === "vertebrado") {

        adicionarOpcao(classe, "escolha", "Escolha")
        adicionarOpcao(classe, "ave", "Ave")
        adicionarOpcao(classe, "mamifero", "Mamífero")

    } else if (tipo === "invertebrado") {

        adicionarOpcao(classe, "escolha", "Escolha")
        adicionarOpcao(classe, "inseto", "Inseto")
        adicionarOpcao(classe, "anelideo", "Anelídeo")
    }
}

function atualizarGrupo() {

    const classe = document.getElementById("classe").value
    const grupo = document.getElementById("grupo")

    grupo.innerHTML = ""

    if (classe === "ave") {

        adicionarOpcao(grupo, "escolha", "Escolha")
        adicionarOpcao(grupo, "carnivoro", "Carnivoro")
        adicionarOpcao(grupo, "onivoro", "Onivoro")

    } else if (classe === "mamifero") {

        adicionarOpcao(grupo, "escolha", "Escolha")
        adicionarOpcao(grupo, "onivoro", "Onivoro")
        adicionarOpcao(grupo, "herbivoro", "Herbivoro")

    } else if (classe === "inseto") {

        adicionarOpcao(grupo, "escolha", "Escolha")
        adicionarOpcao(grupo, "hematofago", "Hematofago")
        adicionarOpcao(grupo, "herbivoro", "Herbivoro")

    } else if (classe === "anelideo") {

        adicionarOpcao(grupo, "escolha", "Escolha")
        adicionarOpcao(grupo, "hematofago", "Hematofago")
        adicionarOpcao(grupo, "onivoro", "Onivoro")
    }

}

function mostrarResultado() {

    const resultado = document.getElementById('resultado')
    const classe = document.getElementById("classe").value
    const grupo = document.getElementById("grupo").value

    if (classe === "inseto" && grupo === "herbivoro") {
        resultado.textContent = "Lagarta"

    } else if (classe === "inseto" && grupo === "hematofago") {
        resultado.textContent = "Pulga"

    } else if (classe === "anelideo" && grupo === "hematofago") {
        resultado.textContent = "Sanguessuga"

    } else if (classe === "anelideo" && grupo === "onivoro") {
        resultado.textContent = "Minhoca"

    } else if (classe === "ave" && grupo === "carnivoro") {
        resultado.textContent = "Aguia"

    }else if (classe === "ave" && grupo === "onivoro") {
        resultado.textContent = "Pomba"

    }else if (classe === "mamifero" && grupo === "onivoro") {
        resultado.textContent = "Homem"

    }else if (classe === "mamifero" && grupo === "herbivoro") {
        resultado.textContent = "Vaca"
    }
}

function adicionarOpcao(select, valor, texto) {

    const option = document.createElement("option")
    option.value = valor
    option.textContent = texto

    select.appendChild(option)
}

