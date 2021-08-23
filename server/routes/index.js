var express = require('express')
var router = express.Router()
const postRoute = require('./posts')

function routes(app) {
  app.use('/post', postRoute)
  app.use('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
  })
}


module.exports = routes
