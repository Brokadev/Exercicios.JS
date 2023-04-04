//Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por 
//umfuncionário num mês,e o quanto ele recebe por hora.O retorno da função deve sera string "Salário igual a R$X",
//emqueXéoquanto ofuncionário ganhouno mês.

function salarioFuncionario(horasTrab, valorHora)
{
valortotal = horasTrab*valorHora;
console.log("Salário igual a R$: "+valortotal+ " Com um total de horas trabalhasdas de "+ horasTrab + 
"Recebendo por hora um valor de "+valorHora+ " Reais a hora")
}
salarioFuncionario(220,16)