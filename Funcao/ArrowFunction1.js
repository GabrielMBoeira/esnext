let dobro = function (a){ // modelo 1 
    return a * 2
}

dobro = (a) => {   // modelo 2
    return a *2
}

dobro = a => a * 2  // retorno implícito // modelo 3 = Arrow

console.log(dobro(Math.PI))

//-----------------------------------------

let ola = function(){
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá' // possui somente um parametro

console.log(ola())
