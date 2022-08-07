// Como podemos melhorar o esse código usando TS? 

enum Ocupacao {
    Padeiro,
    Atriz
}

interface humanos {
    nome: string,
    idade: number,
    Trabalho: Ocupacao,
}

let pessoa1: humanos = {
    nome: "maria",
    idade: 29,
    Trabalho: Ocupacao.Atriz

}

let pessoa2: humanos = {
    nome: "roberto",
    idade: 19,
    Trabalho: Ocupacao.Padeiro

}

let pessoa3: humanos = {

    nome: "laura",
    idade: 32,
    Trabalho: Ocupacao.Atriz

}

let pessoa4: humanos = {
    nome: "carlos",
    idade: 19,
    Trabalho: Ocupacao.Padeiro

}