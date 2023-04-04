function primeiroUltimo(array) {
    // Verifica se o array tem pelo menos um elemento
    if (array.length < 1) {
      return [];
    }
  
    // Retorna um novo array com o primeiro e o último elemento do array original
    return [array[0], array[array.length - 1]];
  }
const meuArray = [1, 2, 3, 4, 5];
const resultado = primeiroUltimo(meuArray);
console.log(resultado); // [1, 5]