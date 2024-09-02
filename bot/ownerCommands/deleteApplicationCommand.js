module.exports = {
  name: 'deleteApp',
  code: `
  $deleteApplicationCommand[global;$getApplicationCommandID[stats;global]]
  `
}