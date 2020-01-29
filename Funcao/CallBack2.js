const notas = [7.7, 5.6, 4.5, 3.7, 9.4, 8.2, 7.1]

//Sem callback
const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter( function (nota) { // função filter retorna true or false => true adiciona / false não
    return nota < 7
} )
console.log(notasBaixas2)

// Com callback e Arrow Function
const notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)



