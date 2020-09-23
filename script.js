

function contar () {
    let init = document.getElementById('txti')
    let fm = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (init.value.length == 0 || fm.value.length == 0 || passo.value.length ==0 ) {
        window.alert('[ERRO] Faltam dados, verifique novamente!')
    }

    else {
        res.innerHTML = 'Contando...'
        let i = Number(init.value)
        let f = Number(fm.value)
        let p = Number(passo.value)

        for(let c = 1; c <= f; c+=p){
            res.innerHTML += `${c}`
        }
    }

}