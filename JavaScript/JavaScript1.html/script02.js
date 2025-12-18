// Bloco 1: Laço for

/* 1. Contagem e Saudação:
- Escreva um programa que use um laço for para exibir a mensagem
"Bom dia!" 7 vezes no console. */

for (let i = 0; i < 7; i++) {
    console.log("Bom dia!");
}


/* 2. Números Ímpares:
- Crie um laço for que imprima todos os números ímpares de 1 a 25
(inclusive). */

console.log("Números ímpares de 1 a 25:");
for (let i = 1; i <= 25; i += 2) {
    console.log(i);
}

/* 3. Tabuada Simples:
- Peça ao usuário para digitar um número (ex: 7).
- Use um laço for para exibir a tabuada desse número de 1 a 10.

Exemplo para o número 7:
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70 */

let numeroDaTabuada = 7;
for (let i = 1; i <= 10; i++) {
    const resultado = numeroDaTabuada * i;
    console.log(`${numeroDaTabuada} x ${i} = ${resultado}`);
}
console.log(`Tabuada do ${numeroDaTabuada}:`);



/* 4. Soma de Elementos de um Array:
- Dado o array let numeros = [12, 5, 23, 17, 8, 30, 4];
- Use um laço for para calcular a soma de todos os elementos deste
array e exiba o resultado. */







/* 5. Inverter uma String:
- Dado uma string, como let palavra = "linguagem";
- Use um laço for para criar uma nova string que seja a versão invertida
da original e exiba-a.
- Resultado esperado para "linguagem": "megaugnil" */




// Bloco 2: Laço while

/* 1. Contagem Regressiva Personalizada:
- ○ Peça ao usuário para digitar um número inicial para uma contagem
regressiva.
- Use um laço while para fazer a contagem regressiva desse número até
0, exibindo cada número. Ao chegar em 0, exiba "Lançar!". */




/* 2. Adivinhe o Número:
- Gere um número aleatório entre 1 e 10 (você pode fixar um número
para teste, ex: let numeroSecreto = 5;).
- Use um laço while para pedir ao usuário que adivinhe o número.
- Continue pedindo até que ele acerte. A cada tentativa, diga se o
palpite foi "Muito baixo!", "Muito alto!" ou "Parabéns, você acertou!". */





/* 3. Acumulador com Limite:
- Comece com uma variável valorAtual = 0; e contador = 0;.
- Use um laço while que adicione um número aleatório entre 1 e 10 a
valorAtual em cada iteração, e incremente contador.
- O laço deve parar quando valorAtual atingir ou ultrapassar 50.
- Ao final, exiba o valorAtual final e quantas iterações (contador) foram
necessárias. */





/* 4. Simulador de Login Simples:
- Defina um nome de usuário e senha corretos (ex: usuarioCorreto =
"admin", senhaCorreta = "123").
- Use um laço while para pedir ao usuário que digite o nome de usuário
e a senha.
- O laço deve continuar enquanto o nome de usuário ou a senha
estiverem incorretos.
- Quando acertar, exiba "Login bem-sucedido!" */


