const Fibonacci = require('./fibonacci'); // Importando a função Fibonacci

// Teste 1: Verificar a sequência de Fibonacci para n = 5
test('sequência Fibonacci de 5 elementos', () => {
    expect(Fibonacci(5)).toEqual([0, 1, 1, 2, 3]);  // Sequência esperada de Fibonacci para n=5
});

// Teste 2: Verificar a sequência de Fibonacci para n = 10
test('sequência Fibonacci de 10 elementos', () => {
    expect(Fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);  // Sequência esperada de Fibonacci para n=10
});
