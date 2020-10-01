let num = [5, 8, 2, 9, 3]
    num.push(1)
    num.sort()
    console.log(`Nosso vetor é o ${num}`)
    console.log(`O Vetor tem ${num.length} casas`)
    console.log(`O primeiro valor é ${num[0]}`)
    
let pos = num.indexOf(6)
    if(pos == -1){
        console.log(`O valor não foi encontrado`)
    }
    else{
        console.log(`O valor está na posição ${pos}`)
    }

/*
    PRESTE ATENÇÃO NA ORDEM DE SEUS CÓDIGOS, INFLUÊNCIA NO RESULTADO!

    -> FORMA ESPECIFICADA
    para acrescentar um espaço no vetor, ex: num[3] = 6 
                                         logo:   3 = valor   6 = posição que deseja colocar
    Caso a posição desejada não exista, o js resolve isso criando-la pra que o valor seja alocado.

    -> PARA ADICIONAR NO FINAL
        var.push(7)
        Em parênteses deve-se colocar o valor que deseja ser alocado.

    -> PARA SABER O COMPRIMENTO
        var.length
        Ele calcula quantas casas/elementos tem no vetor.
    
    -> COLOCAR OS ELEMENTOS EM ORDENADOS EM FORMA CRESCENTE
        var.sort()

    -> PARA BUSCAR UM VALOR
        var.indexOf()
        em parênteses colocar o valor que deseja buscar
        IPC : Caso pesquise o valor e o js não encontre ele retornará o valor -1(significa que não encontrou nenhuma ocorrência)

*/