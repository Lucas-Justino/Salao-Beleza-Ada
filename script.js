function descobrirNome() {
    let nome = prompt('Bem vindo ao nosso salão de beleza. Qual seu nome?');
    return nome;
}

function cumprimentarCliente(nome) {
    console.log(`Olá, ${nome}`);
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