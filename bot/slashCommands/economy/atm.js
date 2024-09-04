module.exports = {
    name: 'atm',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[$if[$get[user]==$authorID;Você;<@$get[user]>] tem **$getGlobalUserVar[coins;$get[user];user] coins** 🪙]
    $let[user;$findMember[$slashOption[usuário];true;$guildID]]
    `
}