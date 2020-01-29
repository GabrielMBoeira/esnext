let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) // RETORNA TRUE FUNÇÃO NORMAR

const obj = {}
comparaComThis = comparaComThis.bind(obj) // atribuiu o this ao obj e jogou na variavel "let comparaComThis"

comparaComThis(global) // retornou false => this não é mais global
comparaComThis(obj) // retornou true => agora o this === obj

let comparaComThisArrow = (param) => console.log(this===param)

comparaComThisArrow(global) // RETORNA FALSE COM ARROW
comparaComThisArrow(module.exports) // aponta para o modulo TRUE

comparaComThisArrow = comparaComThisArrow.bind(obj) //tentando apontar this para o obj (mais forte ARROW ou BIND)
comparaComThisArrow(obj) // retorna falso (bind não consegue mudar o apontamento do this => ARROW É MAIS FORTE)
comparaComThisArrow(module.exports) // this continua apontando para module.exports
