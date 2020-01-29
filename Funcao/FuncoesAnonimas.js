const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b)) // operacao é função soma
}

imprimirResultado(4,3)

imprimirResultado(3, 4, soma) // não muda nada

imprimirResultado(3, 4, function(x, y){ // passando uma função como parametro
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //passando uma função arrow function de multiplicação

const pessoa = {                
    falar: function(){
        console.log('Opa')
    } 
}

/*------------ou

/*const pessoa = { 
    falar(){
        console.log('Opa')
    } 
}*/


pessoa.falar()
