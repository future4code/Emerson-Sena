/* console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")
 */
// EXERCICIO 1

// Será impresso o numero 10 e o numero 50.
// Nada

// EXERCICIO 2

// Os dois primeiros indices da array
// Todos os 2 indices da array

// EXERCICIO 3

// O codigo adiciona numeros pares a array
// numerosPares


// EXERCICIO 4
/*A)function estudante(){
    console.log("Eu sou Emerson Nunes, tenho 22 anos, moro em São Vicente e sou estudante.")
}

estudante() */

/*B)function estudante() {
    const nome =  prompt("Digite seu nome:")
    const idade = Number(prompt("Digite sua idade:"))
    const cidade = prompt("Insira sua cidade:")
    let estudante = true

    if(estudante === true){
        estudante = "sou estudante"
    }
    
    console.log("Eu sou",nome+", tenho",idade,"anos, moro em",cidade,"e", estudante)

  
estudante() */

// EXERCICIO 5

/*A)let a = Number(prompt("Insira o primeiro numero:"))
let b = Number(prompt("Insira o segundo numero:"))

function soma(a, b){
    let resultado = (a + b)
    return resultado
}

soma(a, b)*/

/*B)let a = Number(prompt("Insira o primeiro numero:"))
let b = Number(prompt("Insira o segundo numero:"))

function menorMaior(a, b){
    if(a < b){
        console.log("O primeiro numero é menor que o segundo")
    }else if(a > b){
        console.log("O primeiro numero é maior que o segundo")
    }else{
        console.log("Os numeros são iguais.")
    }
}

menorMaior(a, b) */

/*C)let contador = 0
let string = "Emerson"

function imprimirString(){
    while(contador < 10){
        console.log(string)
        contador++
    }
}

imprimirString() */

// EXERCICIO 6

//A)
/* const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function elementosArray(){
    console.log(array.length)
}

elementosArray() */

//B)
/* const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numerosParesB(){
    for(let i = 0; i < 10; i++){
    if(array[i] % 2 === 0){
        console.log(array[i], true)
    }else{
        console.log(array[i], false)
    }
}
}
numerosParesB() */
// C) 
/* const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numerosPares(){
for(let i = 0; i < 10; i++){
    if(array[i] % 2 === 0){
        console.log(array[i])
    }
}
}
numerosPares() */

/* D)
const arrayD = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function numerosPares(){
for(let i = 0; i < 10; i++){
    if(arrayD[i] % 2 === 0){
        console.log(arrayD[i], numerosParesB())
    }
}
}

function numerosParesB(){
    for(let i = 0; i < 1; i++){
    if(arrayD[i] % 2 === 0){
        console.log(arrayD[i], true)
    }else{
        console.log(arrayD[i], false)
    }
}
}

numerosPares() */

