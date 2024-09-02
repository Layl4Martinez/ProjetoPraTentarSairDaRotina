module.exports = {
  name: 'daily',
  type: 'interaction',
  prototype: 'slash',
  code: `
  $interactionReply[🪙 Você coletou $random[567;1400] moedas!\n**Volte daqui a $get[time] pra coletar novamente!**]
  $let[time;]
  $hour
  $minute
  $second
  $timezone[America/Sao_Paulo]
  `
}