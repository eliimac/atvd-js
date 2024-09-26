let tarefas = [];

// Loop para gerenciar as tarefas
while (true) {
    let acao = prompt("O que você deseja fazer? (adicionar/remover/atualizar/listar/sair)");

    if (acao === "adicionar") {
        let nome = prompt("Digite o nome da tarefa:");
        let responsavel = prompt("Digite o responsável pela tarefa:");
        let prazo = prompt("Digite o prazo da tarefa:");
        let prioridade = prompt("Digite a prioridade da tarefa:");
        
        let novaTarefa = { nome: nome, responsavel: responsavel, prazo: prazo, prioridade: prioridade };
        tarefas.push(novaTarefa);
        console.log(`Tarefa "${nome}" adicionada!`);

    } else if (acao === "remover") {
        let nome = prompt("Digite o nome da tarefa que deseja remover:");
        const index = tarefas.findIndex(tarefa => tarefa.nome === nome);
        
        if (index !== -1) {
            tarefas.splice(index, 1);
            console.log(`Tarefa "${nome}" removida!`);
        } else {
            console.log(`Tarefa "${nome}" não encontrada.`);
        }

    } else if (acao === "atualizar") {
        let nome = prompt("Digite o nome da tarefa que deseja atualizar:");
        const tarefa = tarefas.find(tarefa => tarefa.nome === nome);
        
        if (tarefa) {
            tarefa.prazo = prompt("Digite o novo prazo da tarefa:", tarefa.prazo);
            tarefa.prioridade = prompt("Digite a nova prioridade da tarefa:", tarefa.prioridade);
            console.log(`Tarefa "${nome}" atualizada!`);
        } else {
            console.log(`Tarefa "${nome}" não encontrada.`);
        }

    } else if (acao === "listar") {
        if (tarefas.length === 0) {
            console.log("Nenhuma tarefa registrada.");
        } else {
            console.log("Lista de tarefas:");
            for (let i = 0; i < tarefas.length; i++) {
                console.log(`${i + 1}. ${tarefas[i].nome} - Responsável: ${tarefas[i].responsavel}, Prazo: ${tarefas[i].prazo}, Prioridade: ${tarefas[i].prioridade}`);
            }
        }

    } else if (acao === "sair") {
        console.log("Saindo do gerenciador de tarefas.");
        break;

    } else {
        console.log("Ação inválida! Tente novamente.");
    }
}