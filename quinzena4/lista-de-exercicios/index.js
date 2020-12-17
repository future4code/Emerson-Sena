//Exercicio interpretação de codigo

//1) Faz a operação que multiplica o valor em dolar(100) pela cotação que o usuario inserir no prompt

//2) A função tem as condições para cada tipo de investimento e é chamada nas variaveis de baixo com 
//os parametros do tipo de investimento e o valor. no novoMontante sera impresso no console o valor 
//de ações e no segundoMontante será impresso o alert ja que o tipo de investimento escolhido nao esta
//na lista de cases dentro da function

//3) Separa os numeros pares na array1 e os numeros impares na array2, no primeiro console imprime o tamanho
//da array completa com o .length e nos seguintes imprime primeiro os numeros pares e depois os numeros impares

//4) O console vai imprimir o maior e o menor numero da array

//Exercicios de logica de programação 

//1)
/* const array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
} */

/* const array = [1, 2, 3, 4, 5]
let contador = 0

while(contador < array.length){
    console.log(array[contador])
    contador++
} */

/* const array = [1, 2, 3, 4, 5]

for(let numero of array){
    console.log(numero)
}
 */

//2)

//a) false
//b) true
//c) false
//d) true
//e) true

//3)

/* const quantidadeDeNumerosPares = 5
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
} */

//4

/* let lado1 = Number(prompt("Insira o tamanho do primeiro lado:"))
let lado2 = Number(prompt("Insira o tamanho do segundo lado:"))
let lado3 = Number(prompt("Insira o tamanho do terceiro lado:"))

function triangulo(a, b, c){
    if(a === b && c === b){
        alert("Esse triangulo é Equilátero!")
    }else if(a === b || a === c || b === c){
        alert("Esse triangulo é Isósceles")
    }else if(a !== b && c !== b)
        alert("Esse triangulo é Escaleno")
}

triangulo(lado1, lado2, lado3) */

//5)

/* let numero1 = Number(prompt("Insira o primeiro numero:"))
let numero2 = Number(prompt("Insira o segundo numero:"))

function numeroMaior(a, b){
    if(a > b){
        console.log("O maior é:", a)
    }else if(b > a){
        console.log("O maior é:", b)
    }
}

function divisao(a, b){
    let divisao = a/b
    if(divisao % 2 === 0){
        console.log(a+"é divisivel por"+b)
    }else{
        console.log(a+"não é divisivel por"+b)
    }
}

function diferenca(a, b){
    let diferenca = a-b
    console.log(diferenca)
}

numeroMaior(numero1, numero2)
divisao(numero1, numero2)
divisao(numero2, numero1)
diferenca(numero1, numero2) */

// Exercicio funções

//1 
/* let array = [2, 5, 8, 4, 9, 4]

function segundoMaior(arr){
    const array = [... new Set (arr)]
    const maiorNumero = Math.max(...array)
    const filtroSegundoMaior = array.filter((num) => num < maiorNumero);
    const segundoMaiorNumero = Math.max(...filtroSegundoMaior)
    console.log(segundoMaiorNumero)
    return segundoMaiorNumero
}

segundoMaior(array) */

//2)
/* 
const naoNomeada = function(){
    alert("Hello Future4")
}

naoNomeada() */

//Exercicio de objetos

//1)

//Array é uma lista que guardamos informações, objeto é um arquivo que guardamos informações fornecidas pelo usuario

//2)

/* function criarRetangulo(lado1, lado2){
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }
    console.log(retangulo)
}

criarRetangulo(5, 5) */

//3)

/* let filmeFavorito = {
    titulo: "Homem Aranha",
    ano: "2002",
    diretor: "Sam Raimi",
    atores: "Tobey Maguire",
    Atrizes: "Kirsten Dunst"
}

console.log("Venha assistir ao filme",filmeFavorito.titulo,"do ano",filmeFavorito.ano,"dirigido por",filmeFavorito.diretor,"estrelado por",filmeFavorito.atores,"e",filmeFavorito.Atrizes) */

//4)

/* let array = []

let usuario = {
    nome: "Emerson",
    idade: "22",
    email: "enunessena@gmail.com",
    endereço: "Av A"
}

array.push(usuario)

function anonimizarPessoa(){
    let usuario = {
        nome: "Anônimo",
        idade: "Anônimo",
        email: "Anônimo",
        endereço: "Anônimo"
    }
    console.log(usuario)
}

array.forEach(anonimizarPessoa) */



