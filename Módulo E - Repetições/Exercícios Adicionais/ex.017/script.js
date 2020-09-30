function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

   
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML= '' //para resetar, evitando acumulo de resultados.
        while (c <= 10) {
            let item = document.createElement('option') //criando uma tag option
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //adicionando um elemento child
            c++ 
        }
    }


}