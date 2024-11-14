//**Texto maiúsculo e minúsculo

/*
let texto = "Olá, mundo!";
console.log(texto);//texto normal
console.log(texto.toUpperCase());//tudo maiúsculo
console.log(texto.toLowerCase());//tudo minúsculo
*/

//**Obtendo o comprimento de uma string

/*
let texto = "Estou aprendendo JavaScript";
console.log(texto.length);//comprimento da string

let password = "senha12";
if (password.length >= 8) {
   console.log("Senha válida");
}else{
    console.log("Senha inválida");
}

//Quantos dígitos tem um número
let value = 12345;
console.log(value.toString().length);
*/

//**Substituindo e fatiando um texto
/*
let message = "Estou aprendendo JavaScript";
console.log(message.replace("JavaScript","JS")) //substituindo parte de um texto

let message = "Estou aprendendo JavaScript"; //Extraindo uma parte da string (start, end)
console.log(message.slice(0,5)) //posição 0 ate a 5 do inicio ao fim

//extraindo uma parte d string de trás para frente
console.log(message.slice(-10))
message = "    batata gata      "

//remove espaço em branco do inicio e no fim
console.log(message.trim().length)


//**Completando uma string
//pega os 4 últimos dígitos

const  creditCard = "1234123412344928"
const lastDigits = creditCard.slice(-4)
console.log(lastDigits)
//o padStart preenche a string do início
const maskNumber = lastDigits.padStart(creditCard.length,"Z")
console.log(maskNumber)
//o padEnd preenche a string do fim
const number = "12345"
console.log(number.padEnd(10,"$"))
*/
/*
//Separando e unindo strings
let text = "Estudar, Aprender, Praticar"
//dividir texto
let separate = text.split(",")
//console.log(separate)
//dividir texto
let message = "Estou aprendendo javascript"
//console.log(message.split(" "))
let join = separate.join(" - ")
console.log(join)
*/

let message = "Estou estudando os fundamentos do javascript";

//Obtém a posição da palavra
console.log(message.indexOf("javascript"));
//Quando não encontra ele devolve -1
//verifica se existe a palavra na string
console.log(message.includes("javascript"));
//se não achar com o includes ele devolve -1
