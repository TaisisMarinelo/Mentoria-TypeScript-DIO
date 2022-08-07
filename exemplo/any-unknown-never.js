"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'teste2';
unknownValor = true;
unknownValor = '';
let stringTeste2 = 'teste do teste';
// o unknown não atribui a tipos
//stringTeste2 = unknownValor;
// para funcionar e preciso validar os tipos
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
//lança um erro com a função, tipo de retorno não e :void, más sim um tipo :never que trata de um processo encerrado de forma abrupta
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
