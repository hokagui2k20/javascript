function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#6e4a34'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#adbbc4'
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#0d1a47'
    }

}
