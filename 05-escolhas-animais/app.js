'use strict'

function definirEscolha(){

    if(valor === "vertebrado"){

        const op1 = document.createElement("option")
        op1.value = "ave"
        op1.textContent = "Ave"

        const op2 = document.createElement("option")
        op2.value = "mamifero"
        op2.textContent = "Mamífero"

        grupo.appendChild(op1)
        grupo.appendChild(op2)

    }

    else if(valor === "invertebrado"){

        const op1 = document.createElement("option")
        op1.value = "inseto"
        op1.textContent = "Inseto"

        const op2 = document.createElement("option")
        op2.value = "anelideo"
        op2.textContent = "Anelídeo"

        grupo.appendChild(op1)
        grupo.appendChild(op2)

    }


}