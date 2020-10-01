var now = new Date()
var hour = now.getHours()
    console.log(`Agora são exatamente ${hour} horas.`)
    if (hour < 12) {
        console.log('Bom dia! :D')
    } else if (hour <= 18) {
        console.log('Boa Tarde! ^^')
    } else if (hour > 18) {
        console.log('Boa noite!:)')
    }