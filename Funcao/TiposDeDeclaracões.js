console.log(soma(4,4)) // declaration -> js carrega primeiro funções e dpois le o codigo. por isso pode antes
console.log(sub(4,3)) // da erro pois a função é direcionada para uma constante
console.log(mult(4,4)) // tbm não deixa antes devido ser direcionada para uma constante


//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

//named function expression
const mult = function mult(x, y){
    return x * y
}


