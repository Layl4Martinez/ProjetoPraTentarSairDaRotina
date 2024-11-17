module.exports = (client) => {
    client.functionManager.createFunction({
        name: '$flagName', 
        params: ['value'], // Value : ID da bandeira e Type: Tipo da informação que queira com o valor
        type: 'aoi.js', 
        code: `
        $splitText[{value}]
        $textSplit[Orgulho Arco-Íris_Orgulho Progressista_Orgulho Agender_Orgulho Aromático_Orgulho Assexual_Orgulho Bissexual_Orgulho Demiromantic_Orgulho Demisexual_Orgulho Gênero Fluído_Orgulho Lésbico_Orgulho Não-Binário_Orgulho Pansexual_Orgulho Poliamoroso_Orgulho Polissexual_Orgulho Transgênero;_]
        `
    });

}