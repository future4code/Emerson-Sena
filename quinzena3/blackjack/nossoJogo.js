/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Mostrando o inicio do jogo no console
console.log("Bem vindo ao jogo de blackjack!")

//Verificando se o usuario quer iniciar uma nova rodada
if(confirm("Quer iniciar uma nova rodada?")) {

}else {
   console.log("O jogo acabou.")
}

//Array para armazenar as cartas dos jogadores
let usuario = []
let computador = []

//Compra de cartas
const carta1 = comprarCarta()
const primeiraCarta = carta1.texto
const carta2 = comprarCarta()
const segundaCarta = carta2.texto
const carta3 = comprarCarta()
const terceiraCarta = carta3.texto
const cartaCPU1 = comprarCarta()
const CPU1 = cartaCPU1.texto
const cartaCPU2 = comprarCarta()
const CPU2 = cartaCPU2.texto
const cartaCPU3 = comprarCarta()
const CPU3 = cartaCPU3.texto

//Adicionando as cartas a array
while(usuario.length < 2){
   usuario.push(primeiraCarta, segundaCarta) 
if(carta1.valor === 11 && carta2.valor === carta1.valor && carta1.texto === carta2.texto){
   confirm("Comprar 3º carta:")
   usuario.push(terceiraCarta)
   }
}

while(computador.length < 2){
   computador.push(CPU1, CPU2)
if(cartaCPU1.valor === 11 && cartaCPU2.valor === cartaCPU1.valor && CPU1.texto === CPU2.texto){
   confirm("Comprar 3º carta:")
   computador.push(cartaCPU3)
   }
}

//Resultado da pontuação dos jogadores
let resultadoUsuario = carta1.valor + carta2.valor 
let resultadoCPU = cartaCPU1.valor + cartaCPU2.valor


//Mostrando no console as informações do jogo
console.log("Cartas do usuário: ",usuario)
console.log("Pontuação do Usuario:", resultadoUsuario)
console.log("Cartas da CPU:", computador)
console.log("Pontuação do CPU: ", resultadoCPU)


//Verificando o resultado final e mostrando o vencedor no console
if(resultadoCPU > resultadoUsuario){
   console.log("O computador ganhou!")
}else if(resultadoUsuario > resultadoCPU){
   console.log("O usuario ganhou!")
}else if(resultadoUsuario === resultadoCPU){
   console.log("Deu empate!")
}


