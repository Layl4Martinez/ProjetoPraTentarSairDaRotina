module.exports = [{
    name: 'testCanvas',
    code: `
    $addCmdReactions[✅]
    $clearReactions[$channelID;$messageID;🕑]
    $attachCanvas[mycanvas]
    $drawLines[mycanvas;draw;#03a9f4;10;50;140;150:60;250:140]
    $fillRect[mycanvas;#03a9f4;130;190;40;60]
    $strokeRect[mycanvas;#03a9f4;75;140;150;110]
    $createCanvas[mycanvas;300;320]
    $addCmdReactions[🕑]
    $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
    `
}, {
    name: 'testImageCanvas',
    code: `
    $addCmdReactions[✅]
    $clearReactions[$channelID;$messageID;🕑]
    $attachCanvas[avatar]
    $drawImage[avatar;$nonEscape[$authorAvatar];0;0;1024;1024]
    $createCanvas[avatar;1024;1024]
    $addCmdReactions[🕑]
    $onlyForIDs[$clientOwnerIDs[;];❌ Acesso Negado. {reply:$messageID:true}]
    `
}]