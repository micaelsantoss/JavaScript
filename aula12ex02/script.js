function carregar(){
    var data = new Date()
    var anoa = data.getFullYear()
    var anon = window.document.getElementById('anon')
    var ano = Number (anon.value)
    var sexo = window.document.getElementsByName('rads')
    var calc = anoa - ano
    var res = window.document.getElementById('res')
    var genero = '' //variavel sem informação
    var img = document.createElement('img') //criando elemento de imagem
    img.setAttribute('id', 'foto') //atribuindo id para a imagem   

    if (ano == 0 || ano > anoa){
        window.alert ('Erro, Preencha os dados e tente novamente!')} else{
            if (sexo[0].checked){//verificando qual opção foi marcada
                genero = 'Homem' //colocando informação na variavel "genero"
                if (calc >= 0 && calc < 10){
                    //criança 
                    img.setAttribute('src', 'criancah.jpg')
                } else if(calc < 20){
                    //jovem
                    img.setAttribute('src', 'adolecenteh.jpg')         
                } else if (calc < 50){
                    //adulto
                    img.setAttribute('src', 'adultoh.jpg')
                } else if (calc >= 50){
                    //idoso
                    img.setAttribute('src', 'idosoh.jpg')
                }
            } else {
                genero = 'Mulher' 
                if (calc >= 0 && calc < 10){
                    //criança
                    img.setAttribute('src', 'criancam.jpg') 
                } else if(calc < 20){
                    //jovem
                    img.setAttribute('src', 'adolecentem.jpg')
                } else if (calc < 50){
                    //adulta
                    img.setAttribute('src', 'adultom.jpg')
                } else if (calc >= 50){
                    //idosa
                    img.setAttribute('src', 'idosom.jpg')
                }
            } 
            res.innerHTML = `Você tem ${calc} anos e é ${genero}`
            res.appendChild(img)
        }
}