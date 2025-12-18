/* Laços de Repetição - Prática 1 */
/* 1. Escreva 5 console.log("Olá, Mundo!"); um abaixo do outro. */

console.log("Olá. Mundo!");
console.log("Olá. Mundo!");
console.log("Olá. Mundo!");
console.log("Olá. Mundo!");
console.log("Olá. Mundo!");


/* 2. Pense: Como faríamos se fossem 100 vezes? */

let contador = 0;
while (contador < 100) {
    console.log("Olá, Mundo! (com loop)");
    contador = contador + 1; 
}


// Criamos uma variável pra contar quantas vezes o loop já rodou
let numeroDeVezes = 0;

// Enquanto a variável for  menor que 5, o bloco dentro do while será executado
while (numeroDeVezes < 5) {
    console.log("Esse é um exemplo de loop while! Rodada número: " + numeroDeVezes);

    // A cada repetição, somamos 1 à variável para evitar um loop infinito
    numeroDeVezes = numeroDeVezes + 1;
}



for(let i = 1; i <= 10; i++) {
    console.log("Contador for:", i);
}


let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
        for (let i = 0; i < frutas.length; i++) {
            console.log("Eu gosto de", frutas[i]);
        }

/* Pratica 03 */

// Simular um jogo de dados que continua jogando enquanto a soma dos dados for menor que 10.

let somaDados = 0;
let rodadas = 0;
while (somaDados < 10) {
    rodadas++;
    let dado1 = Math.floor(Math.random() *6) + 1; // Número aleatório de 1 a 6
    let dado2 = Math.floor(Math.random() *6) + 1;
    somaDados = dado1 + dado2;
    console.log(`Rodada ${rodadas}: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Soma = ${somaDados}`);
    console.log(`Fim do jogo! A soma (${somaDados}) atingiu ou ultrapassou 10 após ${rodadas} rodadas.`);
}

