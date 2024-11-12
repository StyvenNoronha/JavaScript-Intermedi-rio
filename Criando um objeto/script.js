/*
Optional chaining (?.) encadeamentos opcional
Se a propriedade ou função chamada é null ou undefined, 
o resultado é undefined, ao invés de um erro.

Útil ao explorar o conteúdo de um objeto quando não existe
 garantia de existência de determinado propriedades obrigatórias
*/
/*
const user = {
  name: "Diego",
  address: {
    //city: "Rio do Sul",
    state: "SC",
    country: "Brasil",
  },
  message: function () {
    return `Hello ${this.name}`;
  },
};
//de dar um erro, aparece undefined
console.log(user?.address?.city);
*/

/*Operador de coalescência nula(??)
operador logico que retorna o seu campo
do lado quando o seu operador do lado esquerdo pe null ou undefined
Caso contrário, eçe retorna o seu operando do lado esquerdo

let content = null;
console.log(content ?? "Conteúdo não encontrado");
*/ 

//FUNÇÃO CONSTRUTORA
function createProduct(name){
  const product = {}
  product.name = name
  product.details = function(){
    return `O nome do produto é ${this.name}`
  }

  return product
}
const product1 = new createProduct("Camiseta")
console.log(product1.name)
console.log(product1.details())