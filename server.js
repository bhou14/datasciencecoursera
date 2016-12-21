var express = require('express')
var app = express()

app.use('/', express.static('./'));
app.use('/img', express.static('./img'));

app.listen(3000, function () {
  console.log('My web app listening on port 3000!')
})
