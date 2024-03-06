/*function verificar(){
    var numadc = window.document.getElementById('na')
    var lista = window.document.getElementById('valores')
    

    if(numadc.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else { 
        var valornumadc = Number (numadc.value)
        numeros.push(valornumadc)
        var itens = window.document.createElement('option')
        itens.text = `Número ${valornumadc} adicionado!`
        lista.appendChild(itens)
    }
    
}*/





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
    var valores = []

    if (numeros(nan) && !listat(nan, valores)){ //chamar 2 funções para verificação
        valores.push(nan)
        var itens = window.document.createElement('option')
        itens.text = `Número ${nan} adicionado!`
        lista.appendChild(itens)
    } else {
        window.alert('Por favor, digite um número!')
    }
}