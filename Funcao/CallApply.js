function getPreco(imposto = 0, moeda = 'R$'){

    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` //This consegue acessar produto mesmo
}                                                                     //mesmo não estando na sequencia                 
                                                                    //js le tudo antes de executar cod.         
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.desc = 0.1
global.preco = 20
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // Diferança entre call e apply é somente a forma de passar parametros
console.log(getPreco.apply(carro, [0.17, '$']))

