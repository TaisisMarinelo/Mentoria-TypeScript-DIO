//any e um tipo que pode receber qualquer tipo
let valorAny: any;

//exemplos
valorAny = 3;
valorAny = 'olá';
valorAny = true;

//problema do uso do valor any
let valorString: String = 'teste';
valorString =  valorAny;
let valorString2: string = 'testão';
valorString2 = valorAny;


function somarString( string1 : string, string2 : string){
    console.log(string1 + string2);
}


//ma pratica utilizar o any
//somarString(valorString, valorString2);