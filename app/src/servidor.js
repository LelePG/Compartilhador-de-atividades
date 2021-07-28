var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/teste', function (req, res, next) {
    console.log("ouviiii")
    res.json({"a":"FUNFEI"})
})

app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 80')
})