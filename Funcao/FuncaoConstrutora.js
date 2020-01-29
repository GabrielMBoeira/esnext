function Carro (velocidadeMaxima = 200, delta = 5){

    //Atributo privado
    let velocidadeAtual = 0
    
    //Atributo publico (this)
    this.Acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            return velocidadeAtual += delta //velocidadeAtual = velocidadeAtual + delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método publico 
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
} 

const uno = new Carro()
uno.Acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.Acelerar()
ferrari.Acelerar()
ferrari.Acelerar()
console.log(ferrari.getVelocidadeAtual())