var Rail = require('national-rail-darwin')
var client = new Rail(process.env.DARWIN_TOKEN)

exports.handler = (event, context, callback) => {
  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res, null, 2),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  var fromStation = event.queryStringParameters.fromStation
  var toStation = event.queryStringParameters.toStation

  client.getDepartureBoardWithDetails(fromStation, {destination: toStation}, done)
}
