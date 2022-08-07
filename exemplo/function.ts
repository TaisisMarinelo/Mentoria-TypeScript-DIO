//Defini os tipo de entrada : define o tipo de retorno
// (number, number): number

function somarValoresNumericos(numero1: number, numero2: number): number{
    return numero1+numero2;
}

//console.log(somarValoresNumericos(1,3));

//:void -> função que não retorna nada
function printaValoresNumericos(numero1 :  number, numero2: number):void{
    console.log(numero1+numero2);
}

function somaValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number)=> number): number{
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number):number{
    return numero/numero;
}


//1+3 = 4 * 4 = 16
console.log(somaValoresNumericosETratar(1,3,aoQuadrado));

//1+3 = 4 / 4 = 1
console.log(somaValoresNumericosETratar(1,3,dividirPorEleMesmo));
