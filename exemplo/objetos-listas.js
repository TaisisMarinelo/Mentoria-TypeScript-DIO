"use strict";
//Definido por inferencia
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'Desenvolvedora'
};
//pessoa.idade = '29'; não funciona pq ele esta esperando tipo number e passamos tipo string
pessoa.idade = 29;
//Definido por descrição -> garante que todos os objetos sigam o padrão
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
//Grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogadora"] = 3] = "Jogadora";
    Profissao[Profissao["Gerente"] = 4] = "Gerente";
    Profissao[Profissao["Escritora"] = 5] = "Escritora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 26,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática dicreta', 'programação']
};
const monica = {
    nome: 'Mónica',
    idade: 25,
    materias: ['Matemática dicreta', 'programação']
};
//varreu a lista de materias e imprimiu no console
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
