// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

let Saldo = 0;

function Somar(soma: number){
    if (campoSaldo) {
        Saldo += soma;
        campoSaldo.innerHTML = Saldo.toString();
        LimparCampo();
    }
}

function LimparCampo(){
    soma.value = '';
}

function LimparValorSaldo(){
    if (campoSaldo) {
        Saldo = 0;
        campoSaldo.innerHTML = Saldo.toString();
    }
}

botaoAtualizar?.addEventListener('click', ()=> {
    Somar(Number(soma.value))
});

botaoLimpar?.addEventListener('click', ()=> {
    LimparValorSaldo();
})



/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */