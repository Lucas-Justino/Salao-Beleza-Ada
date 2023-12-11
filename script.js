function descobrirNome() {
    let nome = prompt('Bem vindo ao nosso salão de beleza. Qual seu nome?');
    return nome;
}

function cumprimentarCliente(nome) {
    console.log(`Olá, ${nome}`);
}

function disponivelAgora() {
    let horarioEscolhido = prompt('Pode ser às 9h30? (Responda com "sim" ou "não")');

    if (horarioEscolhido.toLowerCase() === 'sim') {
        return true;
    } else {
        let horariosDisponiveis = '13:40, 14:00, 15:30, 16:45, 17:00';
        console.log('Horários disponíveis: ' + horariosDisponiveis);

        let novoHorario = prompt('Escolha um dos horários disponíveis (' + horariosDisponiveis + ') no formato (hh:mm)');

        while (!horariosDisponiveis.includes(novoHorario)) {
            console.log('Horário inválido ou não disponível.');
            novoHorario = prompt('Por favor, escolha um dos horários disponíveis (' + horariosDisponiveis + ') no formato (hh:mm)');
        }

        return true;
    }
}

function iniciarCorte() {

}

function terminarCorte() {

}

function finalizandoAgora() {

}

function informarValor() {

}

function confirmarValorPago() {

}


function salaoDeBeleza() {
    let nomeDoCliente = descobrirNome();
    cumprimentarCliente(nomeDoCliente);

    let disponibilidade = disponivelAgora();
    if(disponibilidade) {
        iniciarCorte();
        terminarCorte();
        informarValor();
        confirmarValorPago();
    } else {
        console.log('Então podemos marcar outra hora!');
    }
}

salaoDeBeleza();