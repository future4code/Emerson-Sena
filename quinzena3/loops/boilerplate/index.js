//EXERCICIO 1
//O i está contando de 1 em 1 e o valor está se somando o valor de i
//resultado 10
/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

//EXERCICIO 2
//Serão impressos os numeros maiores que 18
//Sim
/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} 
 */

//EXERCICIO 3
//a.
/* const array = [101, 102, 103, 104, 105]

for(numeros of array){
    console.log(numeros)
} */

//b.
/* const array = [101, 102, 103, 104, 105]

for(numeros of array){
    numeros /= 10
    console.log(numeros)
} */

//c.
/* const array = [101, 102, 103, 104, 105]

for(numero of array){
    array.splice(0,1)
    console.log(numero+1)
} */

//e.
/* const array = [50, 20, 40, 85, 41, 60]
let menorNumero = 100
let maiorNumero = 0

for(numero of array){
    if(numero > maiorNumero){
        maiorNumero = numero
    }else if (numero < menorNumero){
        menorNumero = numero
    }
}

console.log(maiorNumero, menorNumero) */