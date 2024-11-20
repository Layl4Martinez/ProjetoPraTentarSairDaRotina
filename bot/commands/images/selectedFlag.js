module.exports = {
    name: 'flagSelection',
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionDelete
    $reply[$get[messageID]]
    Escolha sua bandeira para sua foto de perfil.
    $attachCanvas[flagAvatar;Avatar.png]
    $addSelectMenu[1;string;flagSelection;Escolha sua Bandeira;1;1;false;$get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:$get[messageID]_$authorID_1:$if[$get[flagID]==1;true;false]:1308656257950945280;$get[f] Bissexual:Sentir atração por mais de um gênero.:$get[messageID]_$authorID_2:$if[$get[flagID]==2;true;false]:1308656225327779931;$get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:$get[messageID]_$authorID_3:$if[$get[flagID]==3;true;false]:1308656240557162549;$get[f] Não Binário:Não se identifica como 100% homem ou mulher.:$get[messageID]_$authorID_4:$if[$get[flagID]==4;true;false]:1308656306277842995;$get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:$get[messageID]_$authorID_5:$if[$get[flagID]==5;true;false]:1308656208499966013;$get[f] Pansexual:Sente atração por qualquer identidade de gênero.:$get[messageID]_$authorID_6:$if[$get[flagID]==6;true;false]:1308656320416841799;$get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:$get[messageID]_$authorID_7:$if[$get[flagID]==7;true;false]:1308656187960463390;$get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:$get[messageID]_$authorID_8:$if[$get[flagID]==8;true;false]:1308656289483722792;$get[f] Arromântico:Não sente interesse romântico por outras pessoas.:$get[messageID]_$authorID_9:$if[$get[flagID]==9;true;false]:1308656272605708329]
    $drawImage[flagAvatar;$nonEscape[https://raw.githubusercontent.com/Layl4Martinez/ProjetoPraTentarSairDaRotina/refs/heads/main/resource/images/flagRoundedImages/flag$get[flagID].png];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]
    $let[f;Orgulho]
    $let[imgSource;$getMessageVar[flagImageSourceURL;$get[messageID];messageVar]]
    $interactionUpdate[Carregando...]
    $onlyIf[$authorID==$get[userID];<@$authorID>, Você não é o dono dessa interação. Use **.bandeira** se caso quiser usar o comando. {deleteIn:5s}]
    $let[flagID;$splitText[3]]
    $let[userID;$splitText[2]]
    $let[messageID;$splitText[1]]
    $textSplit[$interactionData[values[0]];_]
    `
}
/*  
$reply[$get[messageID]]
$let[f;Orgulho]
    $attachCanvas[flagAvatar]
    
    $interactionDelete
    $drawImage[flagAvatar;$nonEscape[https://raw.githubusercontent.com/Layl4Martinez/ProjetoPraTentarSairDaRotina/refs/heads/main/resource/images/flagRoundedImages/flag$get[flagID].png];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]

    $let[imgSource;$getMessageVar[flagImageSourceURL;$get[messageID];messageVar]]
    
    $let[flagID;$splitText[3]]
    $let[userID;$splitText[2]]
    $let[messageID;$splitText[1]]
    $textSplit[$interactionData[values[0]];_]
    $interactionUpdate[carregando...]







    $addSelectMenu[1;string;flagSelection;Escolha sua Bandeira;1;1;false;
    $get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:$get[messageID]_$authorID_1:$if[$get[flagID]==1;true;false]:1253758224688091156;
    $get[f] Bissexual:Sentir atração por mais de um gênero.:$get[messageID]_$authorID_2:$if[$get[flagID]==2;true;false]:1253757958450315416;
    $get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:$get[messageID]_$authorID_3:$if[$get[flagID]==3;true;false]:1253757958450315416;
    $get[f] Não Binário:Não se identifica como 100% homem ou mulher.:$get[messageID]_$authorID_4:$if[$get[flagID]==4;true;false]:1253757958450315416;
    $get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:$get[messageID]_$authorID_5:$if[$get[flagID]==5;true;false]:1253757958450315416;
    $get[f] Pansexual:Sente atração por qualquer identidade de gênero.:$get[messageID]_$authorID_6:$if[$get[flagID]==6;true;false]:1253757958450315416;
    $get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:$get[messageID]_$authorID_7:$if[$get[flagID]==7;true;false]:1253757958450315416;
    $get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:$get[messageID]_$authorID_8:$if[$get[flagID]==8;true;false]:1253757958450315416;
    $get[f] Arromântico:Não sente interesse romântico por outras pessoas.:$get[messageID]_$authorID_9:$if[$get[flagID]==9;true;false]


    $addSelectMenu[1;string;flagSelection;Escolha sua Bandeira;1;1;false;$get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:$get[messageID]_$authorID_1:$if[$get[flagID]==1;true;false]:1253758224688091156;$get[f] Bissexual:Sentir atração por mais de um gênero.:$get[messageID]_$authorID_2:$if[$get[flagID]==2;true;false]:1253757958450315416;$get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:$get[messageID]_$authorID_3:$if[$get[flagID]==3;true;false]:1253757958450315416;$get[f] Não Binário:Não se identifica como 100% homem ou mulher.:$get[messageID]_$authorID_4:$if[$get[flagID]==4;true;false]:1253757958450315416;$get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:$get[messageID]_$authorID_5:$if[$get[flagID]==5;true;false]:1253757958450315416;$get[f] Pansexual:Sente atração por qualquer identidade de gênero.:$get[messageID]_$authorID_6:$if[$get[flagID]==6;true;false]:1253757958450315416;$get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:$get[messageID]_$authorID_7:$if[$get[flagID]==7;true;false]:1253757958450315416;$get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:$get[messageID]_$authorID_8:$if[$get[flagID]==8;true;false]:1253757958450315416;$get[f] Arromântico:Não sente interesse romântico por outras pessoas.:$get[messageID]_$authorID_9:$if[$get[flagID]==9;true;false]

*/