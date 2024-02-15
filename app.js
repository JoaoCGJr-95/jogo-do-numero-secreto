let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número inteiro entre 1 e 10';

let numTentativas = 1;
//console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});

}

function mensagemInicialJogo(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicialJogo();


function verificaChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você acertou o Número Secreto!');
        let palavraTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o Número Secreto com ${numTentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o Número Secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o Número Secreto é maior');
        }
        numTentativas++;
        limpaChute();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limpaChute(){
    chute = document.querySelector('input');
    chute.value = ''; // isso significa que receberá uma string vazia
}

function reiniciaJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaChute();
    numTentativas = 1;
    mensagemInicialJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true); //setAttribute é para setar a informação informada e inciar se é true or false.

}