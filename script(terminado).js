///// NOME : KELVIN DIAS MOREIRA
///// IDADE : 21 ANOS
///// DATA : 23/04/2022
///// VAGA : DESENVOLVEDOR FRONT-END.

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 1   ///////////////////////////////////

/// RESPOSTA = 35;

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 2   ///////////////////////////////////

/// RESPOSTA = "==" serve para fazer uma comparação entre duas variáveis independente do tipo dela, vamos supor x = 10, 1) exemplo:  "x == 10" ||| 2) exemplo: "x == '10'(string)". Ambos vão retornar true.
/// RESPOSTA = "===" compara duas variáveis, só que essa comparação leva em consideração até o tipe dela, vamos supor x = 10, 1) exemplo :"x == 10" ||| 2) exemplo "x == '10'(string)". apenas o "1)" exemplo retornará true.

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 3   ///////////////////////////////////

/// RESPOSTA = Letra b), vai cair em um loop infinito, pois o valor de "num" sempre será -1;

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 4   ///////////////////////////////////

/// RESPOSTA = novoNumero = 9.
/// RESPOSTA = a = 3.

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 5   ///////////////////////////////////

/// RESPOSTA = "console.info(a === b);" => false.
/// RESPOSTA = "console.info(a.nome === b.nome);" => true.
/// RESPOSTA = "console.dir(a);" => { nome: 'Maria' }.
/// RESPOSTA = "console.dir(b);" => { nome: 'Pedro' }.
/// RESPOSTA = "console.info(a.nome === b.nome);" => false.

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 6   ///////////////////////////////////

/// RESPOSTA = "x += x == 20 ? x/y : y/x;" => 12.
/// RESPOSTA = "y -= y == 10 ? y/x : x/y;" = > 19.4;

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 7   ///////////////////////////////////

// https://calculadoraimckel.netlify.app

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 8   ///////////////////////////////////

function questaoNumeroOito() {
  const mediaAritmetica = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3; //recebe 3 numeros e divide por 3.
  };

  function mediaAritmetica2(...num) {
    let numeros = [];
    numeros.push(...num); //Adiciona os numeros na array "numeros" utilizando o .push() do Javascript.
    let cont = 0;
    for (i = 0; i < numeros.length; i++) {
      // Foi realizado um loop para pegar cada índice do array e adicionar +=1 na variável cont para estar efetuando a média no final.
      cont++;
    }
    let valorTotal = numeros.reduce((acumulador, num) => acumulador + num, 0); // Utilizado o reduce para somar todos os valores dentro da array "numeros" e jogando na variável valorTotal.
    return valorTotal / cont; // retornando o valorTotal e divindo pela variável cont;
  }

  console.log(mediaAritmetica(10, 20, 30).toFixed(2));
  console.log(mediaAritmetica2(5, 9, 10, 15, 20, 28, 30, 60, 50).toFixed(2));
}

//questaoNumeroOito();

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 9   ///////////////////////////////////

function questaoNumeroNove() {
  let A = 3;
  let B = 5;

  console.log(`Valor anterior A = ${A}, B = ${B}`);

  [A, B] = [B, A]; /// Utilizei a desestruturação via atribuição do Javascript.

  console.log(`Valor modificado A = ${A}, B = ${B}`);
}

//questaoNumeroNove();

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 10   ///////////////////////////////////

function questaoNumeroDez() {
  let array = [1, 2, 3, 4, 1, 2, 3, 10, 20, 10, 50, 3, 5, 10, 2]; // Array aleatória para teste.

  let novoArray = array.filter(function (valor, i) {
    // Utilizado o .filter(), junto com o .indexOf() para localizar os valores no array e armazenar em uma nova array.
    return array.indexOf(valor) === i;
  });

  array.sort(function (a, b) {
    //Utilizado o .sort() para deixar em ordem crescente o array antigo.
    return a - b;
  });

  novoArray.sort((a, b) => a - b); //Utilizado o .sort() para deixar em ordem crescten o array novo, só que utilizando Arrow function.

  console.log(`Array antigo ${array}, Novo array = ${novoArray}`);
}

//questaoNumeroDez();

///////////////////////////////////  DESAFIO JAVASCRIPT QUESTÃO NUMERO 11   ///////////////////////////////////

function questaoNumeroOnze() {
  function saqueNotas(valor) {
    let valorDesejado = valor;
    let cedula = 100;
    let totalCedula = 0;

    while (true) {
      if (valorDesejado >= cedula) {
        // Criado um while para que enquanto fosse true, rodaria esse script, se o valor desejado for igual ou maior que cedula, é descontado do valor desejado o valor da cédula, se não , se o valor da cédula for igual a 100, seto valor da cédula para 50. E assim continuando o processo até o valor desejado for 0.
        valorDesejado -= cedula;
        totalCedula += 1;
      } else {
        console.log(`Total de ${totalCedula} cédulas de R$${cedula}`);
        if (cedula == 100) {
          cedula = 50;
          totalCedula = 0;
        } else if (cedula == 50) {
          cedula = 20;
          totalCedula = 0;
        } else if (cedula == 20) {
          cedula = 10;
          totalCedula = 0;
        }
        if (valorDesejado == 0) {
          break;
        }
      }
    }
  }
  saqueNotas(80);
}

//questaoNumeroOnze();

///////////////////////////////////  FIM DO DESAFIO JAVASCRIPT   ///////////////////////////////////
