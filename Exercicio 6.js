
function inverter(valor)
 {
  if (typeof valor === "boolean") 
  {
    return !valor; // troca o valor aoscontrario do boolean
  } 

  else if (typeof valor === "number") 
  {
    return -valor; // troca o valor aoscontrario do numerico
  } 

  else
  {
    return "Entrada inválida!"; // se digitar um outro tipo
  }
}
console.log(inverter(false)); // Saída falsa
console.log(inverter(true)); // Saída verdadeira
console.log(inverter(5)); // Saída tem q dar negativo
console.log(inverter(-3)); // Saída tem q dar negativo
console.log(inverter("texto")); // Saída tem que dar invalida