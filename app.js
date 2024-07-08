const prompt = require('prompt-sync')();
const array =[1, 3, 4, 2, 5, 6, 7, 6, 9, 8, 1]

function busca(array, elementos) {
let comparacoes = 0;
for (let i = 0; i < array.length; i++ ){
    comparacoes ++;
    if (array[i] === elementos){
        return { index: i, comparacoes: comparacoes};
    }
}
return {index: -1, comparacoes: comparacoes };
}
let numero = Number(prompt("Digite um número para achar no array: "));
let resultados = busca(array, numero);

if (resultados.index !== -1){
    console.log(`Número encontrado na posição ${resultados.index}. `);
    } else {
        console.log("Número não encontrado;")
    }
console.log(`Número de comparações realizadas ${resultados.comparacoes}`)