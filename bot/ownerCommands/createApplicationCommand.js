module.exports = {
  name: 'createApp',
  code: `
  $addCmdReactions[✅]
  $clearReactions[$channelID;$messageID;🕑]
  $createApplicationCommand[global;stats;description...;true;true;slash]
  $createApplicationCommand[global;daily;description...;true;true;slash]
  $addCmdReactions[🕑]
  $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
  `
}