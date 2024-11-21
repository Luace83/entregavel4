const somaNumeros = require('./somaNumeros');  // Importa a função de soma

// Teste 1: Testando soma com números válidos
test('soma 1 + 2 + 3 + 4 + 5 deve retornar 15', () => {
    const resultado = somaNumeros(1, 2, 3, 4, 5);
    expect(resultado).toBe(15);  // Espera-se que o resultado seja 15
});

// Teste 2: Testando soma com entradas numéricas em formato de string
test('soma "1" + "2" + "3" + "4" + "5" deve retornar 15', () => {
    const resultado = somaNumeros("1", "2", "3", "4", "5");
    expect(resultado).toBe(15);  // Espera-se que o resultado seja 15, já que as strings são convertidas para números
});
