//Exibe a data e hora atual
/*
console.log(new Date())

//exibe o número de milissegundos
console.log(new Date().getTime())

//ano, mes(0-11), dia
console.log(new Date(2024,1,12))
console.log(new Date(2024,1,12))


let date = new Date("2024-11-17T09:25:59")
//dia da semana 0 á 6 (domingo é 0)
console.log(date.getDay())

//dia do mes (0 a 30)
console.log(date.getDate())

//mes de 0 a 11
console.log(date.getMonth())

//ano
console.log(date.getFullYear())

//horas
console.log(date.getHours())

let date = new Date("2024-11-17T09:25:59")
//modifica o ano
date.setFullYear(2025)

//modifica o mes
date.setMonth(8)

console.log(date)
*/

let date = new Date()
//formatar para o dia sempre ter 2 dígitos
console.log(date.getDate().toString().padStart(2, "0"))
//formatar para o mes sempre ter 2 dígitos
console.log((date.getMonth() + 1).toString().padStart(2, "0"))
//converter para string
console.log(date.toDateString())
//Exibindo data formatadas de acordo com a localidade
console.log(date.toLocaleDateString())
//mostrar hora de acordo com a localidade
console.log(date.toLocaleTimeString())
