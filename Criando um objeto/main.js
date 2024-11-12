/*
Objetos
    Uma coleção de dados e/ou funcionalidades;
    Podem ter propriedades e métodos
*/
/*
//Cria um objeto vazio.
const obj = {};
console.log(obj);

//Cria um objeto com propriedades e métodos
const user = {
  email: "styven@gmail.com",
  age: 25,
  name: {
    first_name: "Styven",
    last_name: "Noronha",
  },
  address: {
    street: "Rua x",
    number: 1,
    city: "São Paulo",
    state: "SP",
    country: "Brasil",
    postal_code: "13700-000",
  },
  message: () => {
    console.log("Hello World!");
  },
};
//acessando propriedades e métodos usando a notação de ponto
console.log(user.email);

//acessando propriedades de um objetos.
console.log(user.name.last_name);
 
//acessando propriedades de um objetos.
user.message();

//notação de colchetes
console.log(user["email"]);
console.log(user["name"]["last_name"]);
user["message"]();  

//usando o this nao tem como com a arrow function
const user = {
  name: "Styven",
  message:function() {
    //console.log(`${user.name} ola!`);
    console.log(`${this.name} ola!`);
  }
}
user.message();
*/

const product = {
  name: "Notebook",
  quantity: 1000,
}

console.log(product.name);

//atualizar um valor de uma propriedade
product.name = "Notebook Gamer";
console.log(product.name);