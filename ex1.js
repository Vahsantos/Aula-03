let apartamento = {
    endereco: {
        rua: 'franscisco morato',
        bairro: 'vila sonia',
        numero: 1254,
        bloco: 2,
        apto: 105

    },
    complementos: {
        cordafaixada: 'cinza',
        piscina:'sim' ,
        playground:'sim',
        areaPet:'sim',
        espacoFamilia:'sim',
        localDeEventos:'sim'
    },
    sobreApto: {
        andar: 48,
        corGeral: 'Braco',
        quartos: 3,
        suites: 2,
        area: '100m²',
        tipoCozinha: 'Americana',
        varanda: 'sim',
        piso: 'porcelanato'

    }

}

console.log(apartamento)

console.log(apartamento.endereco.sobreApto)