/* Complete o código para:
Adicionar "limão" no final
Remover o primeiro elemento
Ordenar alfabeticamente
Inverter a ordem */

let mercado = ["uva", "maçã", "banana"];
    mercado.push("limão");
    mercado.shift();
    mercado.sort();
    mercado.reverse();


/* Qual é o valor final do array cores após as seguintes operações? */

let cores = ["azul", "verde"];
cores.push("amarelo");
cores.unshift("vermelho");
cores.pop();
cores.shift();
cores.sort();
console.log(cores);

/* O valor final do array cores após as seguintes operações será: ["azul", "verde"] */



/* O que será impresso no console após cada operação? */

let numeros = [3, 1, 4, 1, 5, 9];
numeros.sort();
console.log(numeros); // Primeiro console.log
numeros.sort((a, b) => a - b);
console.log(numeros); // Segundo console.log
numeros.reverse();
console.log(numeros); // Terceiro console.log


/* Será impresso no console após cada operação, as seguintes iformações:
(6) [1, 1, 3, 4, 5, 9]
(6) [1, 1, 3, 4, 5, 9]
(6) [9, 5, 4, 3, 1, 1] */
