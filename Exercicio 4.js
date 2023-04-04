//Crie uma função que recebe um número(de 1a 12) e retorne o mês correspondente como uma string.Porexemplo,
//seaentradafor2,afunção deveráretornar"fevereiro",poisesteéo 2°mês.


const numesMes = [1, 2, 3, 4, 5 ,6 , 7 , 8 , 9, 10 , 11 , 12]; 
const stringsMes = ['Janeiro', 'Fevereiro', 'Março','Abril','Maio', 
'Junho','Agosto','Setembro', 'Outubro','Novembro','Dezembro']; 

const procurar = {};

for (let i = 0; i < numesMes.length; i++)
{
procurar[numesMes[i]] = stringsMes[i];
}
console.log(procurar[8]);