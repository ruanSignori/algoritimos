const array = [1, 3, 5, 7, 9];

/**Recebe dois parâmetros, uma lista ORDENADA, e um item dessa lista que você quer resgatar */
function binarySearch(list, item) {
  let low = 0; // Valor mais baixo
  let high = list.length; // Valor mais alto

  while (low <= high) {
    // A cada tentativa você pega a metade do valor que está entre o número mais baixo e o mais alto
    // Por exemplo: se o número mais baixo fosse 0 e o mais alto (length) fosse 50
    // O resultado de "mid" seria 25
    let mid = Math.floor((low + high) / 2); // Arredonda para baixo o resultado da divisão
    let tentative = list[mid]; // Aqui o algoritmo chuta o resultado

    if (tentative === item) return mid; // Nessa linha o algoritmo encontrou o item

    if (tentative > item) {
      // Se o chute tiver sido alto
      high = mid - 1; // O número mais alto, vai ser atualizado com - 1, porque já passou na verificação o número mais alto
    } else {
      low = mid + 1; // O número mais baixo segue a mesma lógica
    }
  }

  return null;
}

console.log(binarySearch(array, 3)); // Saida: 1, o elemento 3 está no índice 1;

/**
 * Você pode fazer o testo com uma pessoa.
 * Peça a ela pensar em um número de 0 a 100.
 * Você chuta a metade de 100, que seria 50, ela diz se é mais baixo ou mais alto.
 * Se for mais baixo, você novamente chuta a metade
 * 
 * Em até 10 tentativas você vai descobrir qual número ela está pensando.
 * Porque: log²n
 * 
 * Nesse caso: log²10

 *
 */
