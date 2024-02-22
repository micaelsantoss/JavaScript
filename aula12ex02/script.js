function carregar(){
    var data = new Date()
    var anoa = data.getFullYear()
    var anon = window.document.getElementById('anon')
    var ano = Number (anon.value)
    var sexo = window.document.getElementsByName('rads')
    var calc = anoa - ano
    var res = window.document.getElementById('res')
    var genero = ''
        

    if (ano.valueOf.length == 0){
        window.alert ('Erro, Preencha os dados e tente novamente!')
    } else{
        
    }
        if (sexo[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher' 
        }
        res.innerHTML = `Você tem ${calc} anos e é ${genero}`
    
   
}