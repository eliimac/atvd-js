
function imc(peso, altura){
    imc = peso /(altura * altura)
    return imc
}

function testeNumero(){
    let num1 = parseFloat(document.getElementById("peso").value)
    let num2 = parseFloat(document.getElementById('altura').value)

    if (isNaN(num1) || isNaN(num2)){
        alert('Por favor, insira números válidos.')
        return
    }

    const resultado = imc(num1,num2)

    alert(`O seu imc é ${resultado}`)

    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
}

