alert(`Cálculo de média`)

let qtdAluno = parseInt(prompt('Digite a quantidade de alunos:'))
let notas = null

let maiorNota = null
let menorNota = null

let contador = 0
while(contador < qtdAluno){
    let nota = parseFloat(prompt('Digite a nota:'))
    contador +1
    notas += nota

    if(maiorNota == null){
        maiorNota = nota
    }
    else if(nota > maiorNota){
        maiorNota = nota
    }
    if(menorNota == null){
        menorNota = nota
    }
    else if(menorNota>nota){
        menorNota = nota
    }
    
    contador ++
}

let media = notas /qtdAluno

console.log(`A média da turma foi: ${media}\n A maior nota foi ${maiorNota}\n A menor nota foi ${menorNota}`)