/*module.exports = {
    name: 'flag',
    aliases: ['bandeira', 'lgbt', 'bandeiras', 'flags', 'decoração'],
    code: `
    $reply
    Escolha sua bandeira para sua foto de perfil.
    $attachCanvas[flagAvatar]
    $drawImage[flagAvatar;$nonEscape[https://raw.githubusercontent.com/Layl4Martinez/ProjetoPraTentarSairDaRotina/refs/heads/main/resource/images/flagRoundedImages/flag1.png];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]
    $addButton[1;;1;rightFlag_$messageID_2;false;1306004599076945930]
    $addButton[1;Bandeira Orgulho Arco-Íris;2;text;true;1306004651602215034]
    $addButton[1;;1;leftFlag_null_null;true;1306004635785363456]
    $setMessageVar[flagImageSourceURL;$get[imgSource];$messageID;messageVar]
    $let[imgSource;$userAvatar[$findUser[$message[1]]]]
    $clientTyping
    `
};*/