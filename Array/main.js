/*
//Criando Array com construtor
const newArray = new Array()
console.log(newArray.length)

const available = new Array(10) //um array com depois posições vazias
console.log(available)

let frutas = ['maça','banana','laranja'] //criando o array
console.log(frutas)
console.log(frutas.length) //tamanho do array
console.log(frutas[0]) // acessar o índice do array
console.log(frutas[frutas.length - 1])//pegar o ultimo  índice


let fullName = "Styven Cesar Noronha"
console.log(fullName.split(" "))
console.log(Array.from(fullName)) //criando um array com um texto

//Adicionando e removendo um item do array

let users = [];

users.push("Styven"); // adiciona no final do array
users.push("joão"); // adiciona no final do array
users.push("marcos"); // adiciona no final do array
console.log(users);
users.unshift("Anna"); // adiciona primeiro na array

users.shift(); //remove o primeiro item do array
users.pop(); //remove o ultimo item do array

//Usando o índice
let fruits = ["maça","melancia","morango"]

let position = fruits.indexOf("melancia") //achar a posição de uma elemento dentro de um array
console.log(position)

fruits.splice(1,2) //a partir do índice 1 remove 2
fruits.splice(position, 1)//remove um especifico 
console.log(fruits)


//Quais elementos o array aceita?
let myArray = [
  "um texto",
  1,
  true,
  function () {
    console.log("função");
  },
  //objeto
  {
    name: "Styven",
    email: "styven@gmail.com",
  },
];
console.log(myArray[0]); //ver um texto
console.log(myArray[1]); //numero
console.log(myArray[2]); //boolean
console.log(myArray[3]); //função
console.log(myArray[4]); //objeto
*/

//Verificando se existe um conteúdo no array
let fruits = ["maça","melancia","morango"]
console.log(fruits.includes("maça"))//se existe uma elemento dentro do array. Volta true
console.log(fruits.includes("banana"))//se existe uma elemento dentro do array. volta false


