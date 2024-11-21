const ordenacao = require('./ordenacao.js'); // Importando a função quicksort

// Teste 1: Verificar se o quicksort ordena corretamente o array [3, 1, 4, 1, 5]
test('ordena o array [3, 1, 4, 1, 5]', () => {
    let arr = [3, 1, 4, 1, 5];
    ordenacao(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 1, 3, 4, 5]);  // O array ordenado deve ser [1, 1, 3, 4, 5]
});

// Teste 2: Verificar se o quicksort não altera um array já ordenado [1, 2, 3, 4, 5]
test('não altera o array já ordenado [1, 2, 3, 4, 5]', () => {
    let arr = [1, 2, 3, 4, 5];
    ordenacao(arr, 0, arr.length - 1);
    expect(arr).toEqual([1, 2, 3, 4, 5]);  // O array deve permanecer o mesmo, já está ordenado
});
