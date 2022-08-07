"use strict";
//any e um tipo que pode receber qualquer tipo
let valorAny;
//exemplos
valorAny = 3;
valorAny = 'olá';
valorAny = true;
//problema do uso do valor any
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testão';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
//ma pratica utilizar o any
//somarString(valorString, valorString2);
