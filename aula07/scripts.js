const calcGorjeta = (valorConta, qualiServico) => valorConta * qualiServico

const resultado = (gorjeta) => {
    const resultDiv = document.getElementById("result")
    resultDiv.textContent = `A gorjeta sugerida é: R$ ${gorjeta.toFixed(2)}`
}

document.getElementById('formGorjeta').addEventListener("submit", (event) => {
    event.preventDefault()
    const valorConta = parseFloat(document.getElementById("valorConta").value)
    const qualiServico = parseFloat(document.getElementById('qualiServico').value)

    if (isNaN(valorConta) || valorConta <= 0){
        alert('Por favor, insira um valor válido para a conta')
        return
    }

    const gorjeta = calcGorjeta(valorConta, qualiServico)
    resultado(gorjeta)

    // document.getElementById("valorConta").value = ""
    // document.getElementById("result").value = ""
})