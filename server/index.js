require('dotenv').config({ path: __dirname + '/../.env'})
const express = require('express')
// const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')
const {
    SERVER_PORT,
    CONNECTION_STRING,
    // SESSION_SECRET
} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db connected')
    })

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on Port ${SERVER_PORT}`)
})