function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        var n = Number(num.value)
        tab.innerHTML = ''//para limpar a tabela a cada envio
        for(var c = 1 ; c <= 10 ; c++ ){
            var item = window.document.createElement('option') //criar elementos da multiplicação dentro da tabela
            item.text = `${n} x ${c} = ${n*c}` // escrever nos elementos
            tab.appendChild(item) //selecionar os itens
        }
    }
}
