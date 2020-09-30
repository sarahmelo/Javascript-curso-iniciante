let valor = [8, 1, 7, 4, 8, 9]
valor.sort()

for (let pos = 0; pos < valor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

/* OUTRA FOR DE FAZER, SÓ QUE MAIS SIMPLES */

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}