module.exports = {
  name: 'createApp',
  code: `
  $addCmdReactions[✅]
  $clearReactions[$channelID;$messageID;🕑]
  $createApplicationCommand[global;stats;description...;true;true;slash]
  $createApplicationCommand[global;daily;description...;true;true;slash]
  $createApplicationCommand[global;atm;description...;true;false;slash;[{
    "name": "usuário",
    "description": "description...",
    "required": false,
    "type": 6
}]]
  $addCmdReactions[🕑]
  $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
  `
}