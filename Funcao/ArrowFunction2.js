function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade) // NESTA CASO THIS NÃO MUDA DEVIDO ARROW -> ELE REFERENCIA A O "COD. FONTE = GLOBLAL PESSOA"
    },1000)
}

new Pessoa

