module.exports = (client) => {
	client.variables({
        'lowDailyValue': 876,
        'highDailyValue': 2666,
    }, 'main')
      
    client.variables({
        'coins': 0,
    }, 'user')
      
      client.variables({
        'flagImageSourceURL': 'null',
    }, 'messageVar')
}