function qsort(arr) {
    if (arr < 2) return arr; // Se o array tiver nenhum ou apenas 1 elemento, não há a necessidade de ordenar ele
    
    let pivot = arr[0];
    let left = []; // Elementos menores que o pivô
    let right = []; // Elementos maiores que o pivô
    for (let index = 1; index < arr.length; index++) {
        pivot >= arr[index] ? left.push(arr[index]) : right.push(arr[index]); //Separa os elementos entre menores e maiores    
    }

    return qsort(left) + pivot + qsort(right); //Chama novamente a função
}

console.log(qsort([10, 5, 2, 3, 25, 31, 561, 12, 125]))