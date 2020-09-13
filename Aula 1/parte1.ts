export {};
console.log();
let list1 = [1, 2, 3, 4];
let list2 = [];
let nomes = ['MARIA', 'JOAO', 'ANABELA'];

console.log('List1: ' + list1);
console.log('List2: ' + list2);
console.log('Nomes: ' + nomes);
console.log();
// --------------------------------------------------------------------------------------------------------------------
// ** -> map: aplica uma função a cada elemento da coleção original, retornando uma nova coleção com os elementos alterados

function dobro(x: number): number {
  return x * 2;
}

function triplo(x: number): number {
  return x * 3;
}

let m1 = list1.map(dobro); // **
let m2 = list1.map(triplo); // **
let m3 = list1.map((x) => x * 4); //lambda

console.log('MAP SAMPLE-----------------------');
console.log(m1);
console.log(m2);
console.log(m3);
console.log();
// ----------------------------------------------------------------------------------------------------------------------------------------------------
//*** ->  filter: retorna uma nova coleção contendo apenas aqueles elementos da coleção original que satisfazem um dado predicado (verdadeiro ou falso)

function par(x: number): boolean {
  return x % 2 == 0;
}

let f1 = list1.filter(par);
let f2 = list1.filter((x) => x > 2); //lambda numero maior que 2
let f3 = list1.filter((x) => x % 2 != 0); //lambda números impares

console.log('FILTER SAMPLE--------------------');
console.log(f1);
console.log(f2);
console.log(f3);
console.log();

// --------------------------------------------------------------------------------------------------------------------
// reduce: aplica cumulativamente uma função aos elementos de uma coleção, retornando o resultado final.
// * você pode informar, opcionalmente, um valor inicial como parâmetro (necessário para coleção vazia).

function soma(x: number, y: number): number {
  return x + y;
}

function produto(x: number, y: number): number {
  return x * y;
}

let r1 = list1.reduce(soma); //Soma o conteudo da lista
let r2 = list1.reduce(produto); //Multiplica
//let r3 = list2.reduce(soma); //Errado a lista2 esta vazia
let r4 = list2.reduce(soma, 0); //Inicia o valor em zero

console.log('REDUCE SAMPLE--------------------');
console.log(r1);
console.log(r2);
console.log(r4);
console.log();

// --------------------------------------------------------------------------------------------------------------------
// sort: ordena a coleção conforme a função de comparação informada como parâmetro

function comparacaoPorTamanho(s1: string, s2: string): number {
  return s1.length - s2.length; //zero se forem iguais, s1 menor(negativo) s2 menor(positivo)
}

console.log('SORT SAMPLE--------------------');
nomes.sort(comparacaoPorTamanho);
console.log(nomes);
console.log();

nomes.sort(); //Ordem alfabética
console.log(nomes);
console.log();

nomes.sort((s1, s2) => s1.length - s2.length); //Lambda - compara por tamanho
console.log(nomes);
console.log();
