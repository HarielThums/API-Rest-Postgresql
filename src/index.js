require('dotenv').config()
require('./database/index')
const express = require('express'), port = global.process.env.PORT
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes/routes')

// Config
    //Body-parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    //Controllers

    //Routers
    app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na url: localhost:${port}.`)
})