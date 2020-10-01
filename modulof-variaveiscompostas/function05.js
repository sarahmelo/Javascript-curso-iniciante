//CONCEITO DE REPULSIVIDADE

function fatorial(n) { 
    if (n== 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
    Baseando-se em: n! = n x (n-1)!
                    1! = 1
*/