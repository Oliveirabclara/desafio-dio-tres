class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
       
    }

    atacar(){
        let poder =""
        if (this.tipo == "mago"){
            poder = "magia"
        }else if (this.tipo == "guerreiro"){
            poder = "espada"
        }else if (this.tipo == "monge"){
            poder = "artes marciais"
        }else
            poder = "shuriken"
    
        console.log("O " + this.tipo +  " atacou usando: " + poder)
    }


}

let character = new hero("Joseph", "233", "guerreiro")
character.atacar()
