function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 8 && hora < 12){
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#00b8b4'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#fcaf51'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#001f4d'
    }
}