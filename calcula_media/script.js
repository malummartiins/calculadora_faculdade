

function mensagem(tag, texto){    //function para poder trocar os textos na tela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function verificarNota(){
    let inputGA = document.getElementById('inputGA');  //pegar os elementos do input dentro da função
    let inputGB= document.getElementById('inputGB');

    let valorGA = parseFloat(inputGA.value) ; //transformar o input que eu peguei em um number para poder fazer calulos
    let valorGB = parseFloat(inputGB.value);

    let valorFinal = ((valorGA * 0.3) + (valorGB * 0.7));  //calculo da média da faculdade

    if ( valorFinal >= 6 - 0.000001){
        mensagem('h1','Aprovado!');
        mensagem('p', `Sua nota final é: ${valorFinal.toFixed(2)}`);  //tofixes para deixar apenas duas casas decimais
    }else{
        mensagem('h1', 'Reprovado!')
        mensagem('p', `Sua nota final é: ${valorFinal.toFixed(2)}`);
    }
    
}

function limparTela(){   //para o usuario poder limpar os campos de digitacao
    inputGA.value = '';
    inputGB.value = '';
    mensagem('h1', 'Chegou a hora mais</br> temida do semestre!');
    mensagem('p', '- GA representa 30% da nota </br> - GB representa 70% da nota');
}

