const verificaPrimo = require('./verificaPrimo'); // Importando a função para os testes

// Teste 1: Verificar se 5 é primo
test('verifica se 5 é primo', () => {
    expect(verificaPrimo(5)).toBe(true);  // 5 é um número primo
});

// Teste 2: Verificar se 6 não é primo
test('verifica se 6 não é primo', () => {
    expect(verificaPrimo(6)).toBe(false); // 6 não é primo (divisível por 2)
});
