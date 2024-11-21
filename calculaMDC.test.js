const calculaMDC = require('./calculaMDC');  // Certifique-se de importar corretamente a função

test('MDC de 18 e 24 deve ser 6', () => {
    expect(calculaMDC(18, 24)).toBe(6);
});


// Teste 2: Verificar o MDC de 7 e 5 (números primos entre si)
test('MDC de 7 e 5 deve ser 1', () => {
    expect(calculaMDC(7, 5)).toBe(1);  // O MDC de 7 e 5 é 1 (são primos entre si)
});
