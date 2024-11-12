module.exports = {
    name: 'flag',
    aliases: ['bandeira'],
    code: `
    $image[$attachCanvas[flagAvatar]]
    $drawImage[flagAvatar;$nonEscape[];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]
    $addButton[1;>;1;rightFlag_2;false]
    $addButton[1;Escolha sua bandeira;1;text;true]
    $addButton[1;<;1;rightFlag;true]
    $let[imgSource;$authorAvatar]
    $clientTyping
    `
};