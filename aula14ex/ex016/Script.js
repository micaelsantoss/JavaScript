function clicar(){
    var num1 = window.document.getElementById('num1')
    var vnum1 = Number (num1.value)

    var num2 = window.document.getElementById('num2')
    var vnum2 = Number (num2.value)

    var pas = window.document.getElementById('pas')
   
    var res = window.document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    }  else {
        i = Number (num1.value)
        f = Number (num2.value)
        p = Number (pas.value)
        if (p == 0){
            p = 1
            window.alert('Considerando passo 1')
        }  if(i < f){
            res.innerHTML = 'Contando: '
            for(var c = i ; c <= f ; c += p){
                res.innerHTML += `${c} `
            }
        }  else{
            res.innerHTML = 'Contando: '
            for(var c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }

}
