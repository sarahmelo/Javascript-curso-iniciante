var now = new Date()
var diasem = now.getDay()

diasem = 7
/*
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
    7 = ?

*/

console.log(diasem)

switch(diasem) {
    case 0:    
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarto')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('Dia inválido!')
        break
    } 