"use strict";
// Como podemos melhorar o esse código usando TS? 
var Ocupacao;
(function (Ocupacao) {
    Ocupacao[Ocupacao["Padeiro"] = 0] = "Padeiro";
    Ocupacao[Ocupacao["Atriz"] = 1] = "Atriz";
})(Ocupacao || (Ocupacao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    Trabalho: Ocupacao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    Trabalho: Ocupacao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    Trabalho: Ocupacao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    Trabalho: Ocupacao.Padeiro
};
