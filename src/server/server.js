const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Router = require('../api/router')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));

app.use('/api', Router)

app.listen(3000, () => {
    console.log('app listening')
})