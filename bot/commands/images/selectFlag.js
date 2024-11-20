module.exports = {
    name: 'flag',
    aliases: ['bandeira', 'lgbt', 'bandeiras', 'flags', 'decoração'],
    code: `
    $reply
    Escolha sua bandeira para sua foto de perfil.
    $attachCanvas[flagAvatar]
    $drawImage[flagAvatar;$nonEscape[https://raw.githubusercontent.com/Layl4Martinez/ProjetoPraTentarSairDaRotina/refs/heads/main/resource/images/flagRoundedImages/flag1.png];0;0;334;334]
    $drawImage[flagAvatar;$nonEscape[$get[imgSource]];0;0;334;334]
    $createCanvas[flagAvatar;334;334]
    $addSelectMenu[1;string;flagSelection;Escolha sua Bandeira;1;1;false;$get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:$messageID_$authorID_1:true:1253758224688091156;$get[f] Bissexual:Sentir atração por mais de um gênero.:$messageID_$authorID_2:false:1253757958450315416;$get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:$messageID_$authorID_3:false:1253757958450315416;$get[f] Não Binário:Não se identifica como 100% homem ou mulher.:$messageID_$authorID_4:false:1253757958450315416;$get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:$messageID_$authorID_5:false:1253757958450315416;$get[f] Pansexual:Sente atração por qualquer identidade de gênero.:$messageID_$authorID_6:false:1253757958450315416;$get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:$messageID_$authorID_7:false:1253757958450315416;$get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:$messageID_$authorID_8:false:1253757958450315416;$get[f] Arromântico:Não sente interesse romântico por outras pessoas.:$messageID_$authorID_9:false:1253757958450315416]
    $setMessageVar[flagImageSourceURL;$get[imgSource];$messageID;messageVar]
    $let[imgSource;$userAvatar[$findUser[$message[1]]]]
    $clientTyping
    $let[f;Orgulho]
    `
}

/*
$get[f] LGBT:A bandeira arco-íris original, Com 6 cores representando a diversidade.:selectFlag_$messageID_1:true:1253758224688091156;$get[f] Bissexual:2 bandeira:andAnotherCustomID:true:1253757958450315416

$addSelectMenu[index;type;customId;placeHolder;minValues;maxValues;disabled?;label:description:value:default?:emoji?;...]

$addSelectMenu[1;string;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option A:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]

$addSelectMenu[1;string;sF]

$addSelectMenu[1;string;yourCustomID;This is a placeholder!;1;1;false;$get[f] Homossexual e LGBT:Sentir atração física, emocional ou estética por outras pessoas do mesmo sexo ou gênero.:$messageID_1:true:1253758224688091156;$get[f] Bissexual:Sentir atração sexual, emocional ou romântica por mais de um gênero.:$messageID_2:false:1253757958450315416;$get[f] Transgênero (Trans):Pessoa que não se identifica com o gênero que lhe foi atribuído no nascimento.:$messageID_3:false:1253757958450315416;$get[f] Não Binário:não se identifica como 100% homem ou mulher.:$messageID_4:false:1253757958450315416;$get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas, independentemente do gênero.:$messageID_5:false:1253757958450315416;$get[f] Pansexual:Sente atração por pessoas de qualquer identidade de gênero, ou não determinada por gênero.:$messageID_6:false:1253757958450315416;$get[f] Lésbica:Mulheres que se identificam como mulheres e se relacionam sexual e afetivamente com outras mulheres.:$messageID_7:false:1253757958450315416;$get[f] Genderqueer:Identifica-se como homem e mulher ou não se identificam com gênero algum:$messageID_8:false:1253757958450315416;$get[f] Arromântico:Pessoas que não sentem interesse romântico por outras pessoas:$messageID_9:false:1253757958450315416]


$get[f] LGBT:A bandeira arco-íris original.:$messageID_1:true:1253758224688091156;
    $get[f] Bissexual:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Transgênero:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Não Binário:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Assexual:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Pansexual:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Lésbico:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Genderqueer:descrição:$messageID_2:false:1253757958450315416;
    $get[f] Arromântico:Pessoas que não sentem interesse romântico por outras pessoas:$messageID_2:false:1253757958450315416;






    $addSelectMenu[1;string;flagSelection;Escolha sua Bandeira;1;1;false;

    $get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:
    $get[f] Bissexual:Sentir atração por mais de um gênero.:
    $get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:
    $get[f] Não Binário:Não se identifica como 100% homem ou mulher.:
    $get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:
    $get[f] Pansexual:Sente atração por qualquer identidade de gênero.:
    $get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:
    $get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:
    $get[f] Arromântico:Não sente interesse romântico por outras pessoas.:



    $get[f] Homossexual e LGBT:Sentir atração pessoas do mesmo sexo ou gênero.:$messageID_$authorID_1:true:1253758224688091156;$get[f] Bissexual:Sentir atração por mais de um gênero.:$messageID_$authorID_2:false:1253757958450315416;$get[f] Transgênero (Trans):Não se identifica com o gênero que lhe foi atribuído.:$messageID_$authorID_3:false:1253757958450315416;$get[f] Não Binário:Não se identifica como 100% homem ou mulher.:$messageID_$authorID_4:false:1253757958450315416;$get[f] Assexual:Pouca ou nenhuma atração sexual por outras pessoas.:$messageID_$authorID_5:false:1253757958450315416;$get[f] Pansexual:Sente atração por qualquer identidade de gênero.:$messageID_$authorID_6:false:1253757958450315416;$get[f] Lésbica:Mulheres que se relacionam sexual com outras mulheres.:$messageID_$authorID_7:false:1253757958450315416;$get[f] Genderqueer:Identifica como homem e mulher ou não se identifica com gênero algum:$messageID_$authorID_8:false:1253757958450315416;$get[f] Arromântico:Não sente interesse romântico por outras pessoas.:$messageID_$authorID_9:false:1253757958450315416]


*/