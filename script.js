function carregar () {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var tittlle = window.document.getElementById('title')

    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()

    msg.innerHTML= `Agora são ${hora}:${min} minutos`

   
    if (hora >= 0 && hora < 12) {
        img.src = '/Aula 11 - Condições/Exercícios Adicionais/ex.014/depraia.svg'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = '/Aula 11 - Condições/Exercícios Adicionais/ex.014/pordosol.svg'
        document.body.style.background = '#FA8072'
       
        tittlle.style.font = 'medium monospace;'
        
    } else {
        //BOA NOITE
        img.src = '/Aula 11 - Condições/Exercícios Adicionais/ex.014/rio.svg'
        document.body.style.background = '#2D2B4C'
    }


}
