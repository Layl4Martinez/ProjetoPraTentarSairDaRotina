module.exports = {
    type: "interaction",
    prototype: "button",
    code: `
    $reply[$get[messageID]]
    Escolha sua bandeira para sua foto de perfil.
    $attachCanvas[flagAvatar]
    $addButton[1;;1;rightFlag_$get[messageID]_$sum[$get[flagID];1];$if[$get[flagID]==15;true;false];1306004599076945930]
    $textSplit[$interactionData[customId];_]
    $addButton[1;Bandeira $flagName[$get[flagID]];2;text;true;1306004651602215034]
    $addButton[1;;1;leftFlag_$get[messageID]_$sub[$get[flagID];1];$if[$get[flagID]==1;true;false];1306004635785363456]
    $interactionDelete
    $drawImage[flagAvatar;$nonEscape[https://raw.githubusercontent.com/Layl4Martinez/ProjetoPraTentarSairDaRotina/refs/heads/main/resource/images/flagRoundedImages/flag$get[flagID].png];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]
    $let[imgSource;$getMessageVar[flagImageSourceURL;$get[messageID];messageVar]]
    $let[messageID;$splitText[2]]
    $let[flagID;$splitText[3]]
    $textSplit[$interactionData[customId];_]
    $interactionUpdate[carregando...]
    `
}