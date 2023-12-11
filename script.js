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

function pagamentoDinheiro(valor){ //VERIFICACAO DE PAGAMENTO IMPLEMENTADA APENAS PARA DINHEIRO
    let pagamento = prompt('Informe o valor a ser pago: ')
    while(pagamento < valor){
        pagamento = prompt('O valor não cobre o serviço total. Por favor, insira novamente:');
    }
    return pagamento - valor;
}

function pagamentoCartao(valor){
    alert('Por favor, insira ou aproxime o seu cartão!');
    alert(`Transação aprovada no valor de R$${valor},00`);
}

function pagamentoPix(valor){
    alert('Por favor, leia o QR Code')
    alert(`Pagamento de R$${valor},00 aprovado`);
}

function exibirComprovante(formaPagamento, valor, troco){
    let mensagem = '----------Comprovante de Pagamento----------\n' 
                 + 'Valor: R$' + valor + ',00.\n'
                 + 'Forma de Pagamento: ' + formaPagamento + '.\n';

    if(formaPagamento === "Dinheiro")
        mensagem += 'Troco: R$' + troco + ',00.\n';

    mensagem += 'Obrigado pela preferência. Volte Sempre!\n';
    alert(mensagem);
}

function confirmarValorPago(valor) {
    let opcaoPagamento = prompt('Informe a forma de pagamento:\n 1- Dinheiro\n 2- Cartão\n 3- Pix')
    let formaPagamento = "";
    let troco = 0;  
    switch(opcaoPagamento){
        case "1":
            troco = pagamentoDinheiro(valor);
            formaPagamento = "Dinheiro";
            break;
        case "2":
            pagamentoCartao(valor);
            formaPagamento = "Cartão";
            break;
        case "3":
            pagamentoPix(valor);
            formaPagamento = "Pix";
            break;
        default:
            alert("Opção Inexistente! Digite uma opção válida");
            confirmarValorPago(valor);
            break;
    }
    exibirComprovante(formaPagamento, valor, troco);
}


function salaoDeBeleza() {
    let nomeDoCliente = descobrirNome();
    cumprimentarCliente(nomeDoCliente);

    let disponibilidade = disponivelAgora();
    if(disponibilidade) {
        iniciarCorte();
        terminarCorte();
        let valor = informarValor(); //FIZ ESSA ALTERAÇÃO PARA DEVOLVER O VALOR DO CORTE
        confirmarValorPago(valor);
    } else {
        console.log('Então podemos marcar outra hora!');
    }
}

salaoDeBeleza();