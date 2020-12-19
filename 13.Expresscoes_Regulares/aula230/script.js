// Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1234"));
console.log(umOuMaisNumeros.test(" "));
console.log(umOuMaisNumeros.test("addhud"));
console.log(umOuMaisNumeros.test("126165265127325327532"));
console.log(umOuMaisNumeros.test("1"));
