function somax(){
    let somax = 0 
    for(i in arguments){
        soma+= arguments[i] // somax = somax + arguments
    }
    return soma
}

console.log(somax())
console.log(somax(1))
console.log(somax(1.1, 2.2, 3.3))

console.log(somax(1.1, 2.2, "teste"))
console.log(somax('a', 'b', 'c'))