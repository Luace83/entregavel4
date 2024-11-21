const contarInteiros = require('./contarInteiros'); // Importando a função contarInteiros

// Teste 1: Testando com um conjunto simples
test('contar inteiros no intervalo entre 1 e 10', () => {
    const conjunto = [1, 5, 7, 10, 20, 30]; // Conjunto de exemplo
    const N = 10;  // Limite superior
    expect(contarInteiros(conjunto, N)).toBe(4);  // Espera-se que existam 4 números no intervalo [1, 10]
});

// Teste 2: Testando com um conjunto onde nenhum número está no intervalo
test('não contar números fora do intervalo entre 1 e 5', () => {
    const conjunto = [10, 20, 30, 40];  // Conjunto de exemplo
    const N = 5;  // Limite superior
    expect(contarInteiros(conjunto, N)).toBe(0);  // Espera-se que não haja números no intervalo [1, 5]
});
