module.exports = {
  name: 'update',
  aliases: ['u'],
  code: `
  $addCmdReactions[✅]
  $clearReactions[$channelID;$messageID;🕑]
  $updateCommands
  $addCmdReactions[🕑]
  $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
  `
}