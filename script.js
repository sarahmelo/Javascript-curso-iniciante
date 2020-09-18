function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length = 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criando uma tag 'img' (como em html).
        img.setAttribute('id', 'foto') // adicionando atributos a tag, como um id neste caso.
        
        

        if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'menino.png')
            } //menino
            if(idade >= 18 && idade < 40){
                img.setAttribute('src', 'homem.png')
            } //homem adulto
            if(idade > 40){
                img.setAttribute('src', 'senhor.png')
            } //homem idoso
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'menina.png')
            } //menina
            if(idade >= 18 && idade < 40){
                img.setAttribute('src', 'mulher.png')
            } //mulher adulta
            if(idade > 40){
                img.setAttribute('src', 'senhora.png')
            } //mulher idosa
        }
    
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos`
        res.appendChild(img) // para encaixar a imagem abaixo do resultado descrito.
    
    }
}