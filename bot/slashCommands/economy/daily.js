module.exports = {
  name: 'daily',
  type: 'interaction',
  prototype: 'slash',
  code: `
  $setGlobalUserVar[coins;$get[sumValues];$authorID;user]
  $let[sumValues;$sum[$get[coins];$get[randomValue]]]
  $interactionReply[🪙 Você coletou $get[randomValue] moedas!\n**Volte daqui $discordTimestamp[$sum[$dateStamp;$parseTime[$get[time]]];R] pra coletar novamente!**]
  $let[coins;$getGlobalUserVar[coins;$authorID;user]]
  $let[randomValue;$random[$get[lowValue];$get[highValue]]]

  $let[highValue;$getVar[highDailyValue;main]]
  $let[lowValue;$getVar[lowDailyValue;main]]

  $cooldown[$get[time];**Volte daqui $discordTimestamp[$sum[$dateStamp;$parseTime[$get[time]]];R] pra coletar novamente!** {ephemeral} {interaction}]
  $let[time;$replaceText[$sub[24;$hour]h $sub[59;$minute]m $sub[59;$second]s;-;]]
  $timezone[America/Sao_Paulo]
  `
}