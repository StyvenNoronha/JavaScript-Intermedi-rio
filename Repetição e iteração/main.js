//repetição e iteração
//while: executa ate que a condição seja verdadeira
/*
let executa = true
while(executa){
    console.log('executa')
    let response = window.prompt('deseja continuar?')
    if(response === 'n'){
        executa = false
    }
    console.log('executa')
    
}


/*Do while: executa pelo menos uma vez e depois verifica a condição especifica seja Verdadeira
No entanto, a instrução será executada pelo menos uma vez. antes da condição ser verificada.

let value = 0
//enquanto o valor for menor que 10, ele executa o bloco de código
do{
    console.log(value)
    value++
}while(value <= 10)

*/

/*
FOR repete até que a condição seja false
- variável de controle
- condição de parada
- incremento ou decremento
*/
/*
//   variável      condição    incremento
for (let i = 0;    i <= 10;    i++) {
  console.log(i);
}

const a = prompt("qual tabuada voce que?")
for (let i = 0;    i <= 10;    i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }

let person = {
    name: 'João',
    age: 20,
    height: 1.75,
    weight: 70,
    gender: 'M',
    isMarried: false,
    email:"joao@gmail.com"        
}    
for(let p in person){
    //exibe o nome da propriedade
    //console.log(p)
    //exibe o valor da propriedade
    console.log(person[p])
}


let student = ["student1", "student2", "student3", "student4", "student5"]
for(let s in student){
    console.log(student[s])
}


//for ... of itera sobre valores de um objeto iterável
let students = ["student1", "student2", "student3", "student4", "student5"]
for(let i of students){
    console.log(i)
}

//Break: interrompe o loop
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('break')
        break
    }
    console.log(i)
}
*/
//Continue: interrompe a iteração atual e continua a próxima
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('continue')
        continue
    }
    console.log(i)
}

