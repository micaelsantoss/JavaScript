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

var na = window.document.getElementBy('na')
var lista = window.document.getElementById('valores')
var valores = []

function numeros(n){
    if (Number(n) >= 1 && Number(n)<= 100 ){ 
        return true
    } else {
        return false
    }
}

function lista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(){
    if (numeros(na.value) && !lista(na.value, valores)){ //chamar 2 funções para verificação
        window.alert('correto')
    } else {
        window.alert('Por favor, digite um número!')
    }
}