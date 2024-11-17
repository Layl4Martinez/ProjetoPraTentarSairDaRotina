module.exports = {
    name: 'testButtons',
    code: `
    $addCmdReactions[✅]
    $clearReactions[$channelID;$messageID;🕑]
    Teste de Botões!!
    $addButton[1;Mensagem;2;rightFlag;false;1306004651602215034]
    $addCmdReactions[🕑]
    $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
    `
}