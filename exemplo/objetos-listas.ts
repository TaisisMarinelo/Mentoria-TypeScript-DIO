//Definido por inferencia
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'Desenvolvedora'
}

//pessoa.idade = '29'; não funciona pq ele esta esperando tipo number e passamos tipo string
pessoa.idade = 29;

//Definido por descrição -> garante que todos os objetos sigam o padrão
const andre: {
    nome: string, idade: number, profissao: string
} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

//Grupo de constantes
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora,
    Gerente, 
    Escritora
}

//Interface que define que e uma forma mais facil de atribuir informações a objetos
interface pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends pessoa{
    materias: string[]
}


const vanessa: pessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const maria: pessoa = {
    nome: 'Maria',
    idade: 26,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática dicreta', 'programação']
}

const monica: Estudante = {
    nome: 'Mónica',
    idade: 25,
    materias: ['Matemática dicreta', 'programação']
}

//varreu a lista de materias e imprimiu no console
function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);