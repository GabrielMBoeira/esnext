//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criar função de forma literal
function fun1(){}

//Armazenar em uma variável
const fun2 = function (){ }

//Armazenar em um array
const array = [function(a,b){ return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'opa' }
console.log(obj.falar())

//Passar uma função como parametro // linha 23 está correndo aqui dentro
function run(fun){
    fun()
}
run(function () {console.log('executando...')}) // está correndo na linha 20

//Uma função pode retornar/conter outra função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(1) // soma(a, b)<-isso é uma funçao (c) => Está rodando dentro da linha 26
const cincoMais = soma(2,3) // pode armazenar uma função em uma variável "que também é função" e passar o parametro
cincoMais(1)






