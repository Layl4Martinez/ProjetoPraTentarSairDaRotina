module.exports = {
    name: 'atm',
    aliases: ['stars'],
    code: `
    $if[$get[user]==$authorID;Você;<@$get[user]>] tem **$getGlobalUserVar[coins;$get[user];user] estrelas!** ⭐
    $let[user;$findMember[$message;true]]
    `
}