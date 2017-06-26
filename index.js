const express = require('express')
const app = express()
const config = require('./config/index.js')
const routes = require('./routes/index.js')(app)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.listen(config.port, () => {
	console.log('app running on port: ' + config.port)
})