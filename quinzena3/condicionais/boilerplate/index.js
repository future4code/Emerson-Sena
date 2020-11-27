//EXERCICIO 3
//O codigo abaixo testa o resto da divisao do numero por 2, se for 0 ele imprime que o numero passou no teste, se não, imprime que não passou

/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */


//EXERCICIO 2
//No codigo abaixo serve para imprimir o preço da fruta inserida no prompt
//O numero 2.25 será impresso no console se o valor de fruta for Maçã
//O numero seria 5 sem o break e 5.5 com o break
/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5 
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//EXERCICIO 3
//A primeira linha do codigo está pedindo pro usuario digitar um numero no prompt
//Nada será impresso porque o console.log esta fora do escopo

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
    
}
console.log(mensagem)
 */


//EXERCICIO 4
/* const idade = Number(prompt("Insira sua idade: "))

if(idade >= 18){
    console.log("Voce pode dirigir.")
}else {
    console.log("Voce não pode dirigir.")
} */

//EXERCICIO 5

/* const periodo = prompt("Insira o periodo: ")

if(periodo === "M"){
    console.log("Bom dia!")
}else if (periodo === "V"){
    console.log("Boa tarde!")
}else if (periodo === "N"){
    console.log("Boa noite!")
} */


//EXERCICIO 6
/* const periodo = prompt("Insira o periodo: ")

switch(periodo){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
} */


//EXERCICIO 7
/* const genero = prompt("Insira o gênero do filme: ")
const preco = Number(prompt("Insira o preço: "))

if(genero == "Fantasia" && preco <= 15){
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
}
 */