/** Ordenar um array do menor para o maior */

/**Buscar o menor elemento do array */
function searchSmall(array) {
  let small = array[0]; // Inicialmente, o menor item vai ser o 1º elemento
  let smallerIndex = 0; // E o index que representa o menor valor, também vai ser o 1º elemento

  // Nosso for começa a partir do 2º elemento, pois já estamos presumindo que o 1º elemento é o menor valor
  for (let i = 1; i < array.length; i++) {
    // Se o elemento atual, for menor que o até então valor mais baixo
    if (array[i] < small) {
      // O menor valor e o menor indice, passarão a ser o elemento atual
      small = array[i];
      smallerIndex = i;
    };
  };

  // Vai retornar em qual posição do elemento está o menor valor
  return smallerIndex;
};

function selectionSort(array) {
  let newArray = [];   // Este aqui vai ser o novo array ordenado
  const arrayLen = array.length // Definido aqui o length do array, pois a cada iteração, o array.length vai conter um valor menor

  for(let i = 0; i < arrayLen; i++) {
    let small = searchSmall(array); // Busca o indíce de elemento de menor valor do array passado como parâmetro
    newArray.push(array.splice(small, 1)[0]) // Adiciona no newArray, o elemento de menor valor, e já remove o menor valor do array original, assim na próxima iteração, será obtido um novo menor valor, e assim vai...
  }

  return newArray;
}
console.log(selectionSort([3, 12, 5, 213, 1, 2, 4, 13]))