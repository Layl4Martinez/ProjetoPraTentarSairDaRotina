module.exports = {
  name: 'eval',
  aliases: ['e'],
  code: `
  $addCmdReactions[✅]
  $clearReactions[$channelID;$messageID;🕑]
  $eval[$message]
  $addCmdReactions[🕑]
  $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
  `
}