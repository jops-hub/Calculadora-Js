// Calculadora.js

// Funcao que simula a operacao de uma calculadora
function calculadora(num1, num2) {

    //Operacoes aritméticas básicas
    let adicao  = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;


    // Incremento e Decremento
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++;

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--;

    // Exibindo os resultados no console
    console.log(`Adicao (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtracao (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicao (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisao (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial})`);
    console.log(`Incrementar (${num1})++ = ${incrementar}`);
    console.log(`Decrementar (${num2})-- = ${decrementar}`);
}

// Executando a funcao calculadora
//calculadora();

calculadora(10, 2);
calculadora(20,3);
calculadora(30,4);
calculadora(40,5);



