function carregar() {
    var foto = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`

        foto.src = 'manha.jpg'

        window.document.body.style.background = '#659ca1'
    } else if (hora >= 12 && hora < 18 ){
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`

        foto.src = 'tarde.jpg'

        window.document.body.style.background = '#95654f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`

        foto.src = 'noite.jpg'

        window.document.body.style.background = '#9d7eb7'
    }
}