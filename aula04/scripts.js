let numero = parseInt(prompt("Digite o número"))


let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}


const fibonacci = [0, 1];
while (true) {
    const proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (proximo > numero) break;
    fibonacci.push(proximo);
}


console.log(`Fatorial de ${numero}: ${fatorial}`);
console.log(`Sequência de Fibonacci até ${numero}: ${fibonacci}`);