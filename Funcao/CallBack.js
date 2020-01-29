const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome, indice){
    console.log(`${indice} ${nome}`)
}

fabricantes.forEach(imprimir)   

/*fabricantes.forEach(function(a){ // o parametro 'a' é o 'nome' primeiro parametro (imprimir tem 2 param)
    console.log(a)
})*/

// usando arrow function
fabricantes.forEach(a => console.log(a))


