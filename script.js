    let numb = document.getElementById('num')
    let res = document.getElementById('fin')
    let list = document.getElementsByName('flista')
    let final = document.getElementById('fin')
    let valores = [] //analise dos dados que estaram sendo adicionados!



    //Função responsavel pelos números adicionados
    function isNumber(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }

    }

    //Função responsável por verificar se o número que irá ser adicionado já existe ou se não é compativel com as condições desejadas.
    function isList(n, l) {
        if(l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }

    }

    function adicionar() {

        if(isNumber(numb.value) && !isList(list.value, valores)) { // analise dos valores do numb no input
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            list.appenChild(item)
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
     
    } 
}