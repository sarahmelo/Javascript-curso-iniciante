function parimpar(param) {
    if(param%2 ==0) {
        return 'par!' // o `` é usado apenas quando se deseja descrever algo, NÃO CONFUNDA!
    } else {
        return 'impar!'
    }
} let res = parimpar(11) // variável chama a função
console.log(res)

//or

console.log(parimpar(11))