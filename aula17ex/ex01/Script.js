var valores = []

function numeros(n){
    if (n >= 1 && n <= 100 ){ 
        return true
    } else {
        return false
    }
}

function listat(n, l){
    if (l.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(){
    //Variáveis
    var lista = window.document.getElementById('lista')
    var na = window.document.getElementById('na')
    let nan = Number (na.value)
   
    if (numeros(nan) && !listat(nan, valores)){ //chamar 2 funções para verificação
        valores.push(nan)
        var itens = window.document.createElement('option')
        itens.text = `Número ${nan} adicionado!`
        lista.appendChild(itens)
        res.innerHTML = '' //limpar o res toda vez que clicar em adicionar
        na.value = '' // ponteiro no res toda vez que clicar em adicionar
        na.focus()
    } else {
        window.alert('Erro, Número inválido ou repetido')
    }
}

function Verificar(){
    let res = document.getElementById('res')

    if (valores.length == 0){
        window.alert ('Erro, por favor adicione os números')   
    } else{
        let tot = valores.length
        let mai = valores[0]
        let men = valores[0]
        let soma = 0

        for(let pos in valores){
            soma = soma+valores[pos]
            if (valores[pos] > mai){
                mai = valores[pos]
            } if (valores[pos] < men) {
                men = valores[pos]
            }
            
        }
        let media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números cadastrados foi ${tot}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${mai}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${men}</p>`
        res.innerHTML += `<p>A soma de todos os valores foi ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores foi ${media}</p>`
    } 
}

function Limpar(){
    res.innerHTML = ''
    na.value = ''
    valores = []
    lista.innerHTML = ''
}