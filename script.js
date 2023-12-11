function cortarCabelo(nome){
    saudacao(nome); //FUNÇÃO PARA DIZER OLÁ
    if(verificarHorario() === true){ //FUNÇÃO PARA VERIFICAR O HORARIO. ENQUANTO NAO ENCONTRAR O HORARIO, IR PERGUNTANDO
        iniciarCorte(); //FUNÇÃO PARA INICIAR O CORTE
        terminarCorte(); //FUNÇÃO PARA TERMINAR O CORTE
        let valorCorte = calcularValorCorte(); //FUNÇÃO PARA CALCULAR E DEVOLVER O VALOR DO CORTE
        verificarValorCorte(valorCorte); //FUNÇÃO PARA VERIFICAR SE O VALOR ENTREGUE FOI O VALOR DO CORTE. ENQUANTO NÃO ESTIVER CERTO, IR PEDINDO O VALOR.
    }
}

nome = prompt("Bem vindo ao nosso salão de beleza. Qual seu nome?")
cortarCabelo(nome);