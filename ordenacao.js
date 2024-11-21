/////ORDENACAO
function ordenacao(arr, inicio, fim) {
    if (inicio < fim) {
        let pivo = particiona(arr, inicio, fim);
        ordenacao(arr, inicio, pivo - 1);
        ordenacao(arr, pivo + 1, fim);
    }
}

function particiona(arr, inicio, fim) {
    let pivo = arr[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (arr[j] < pivo) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca de posições
        }
    }
    [arr[i + 1], arr[fim]] = [arr[fim], arr[i + 1]]; // Troca de posições
    return i + 1;
}

module.exports = ordenacao;

  