module.exports = {
  name: 'deleteApp',
  code: `
  $addCmdReactions[✅]
  $clearReactions[$channelID;$messageID;🕑]
  $deleteApplicationCommand[global;$getApplicationCommandID[stats;global]]
  $deleteApplicationCommand[global;$getApplicationCommandID[daily;global]]
  $deleteApplicationCommand[global;$getApplicationCommandID[imagem;global]]
  $deleteApplicationCommand[global;$getApplicationCommandID[pix;global]]
  $addCmdReactions[🕑]
  $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
  `
}