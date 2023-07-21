const express = require('express')

const router = express.Router()

const { users } = require('./add-product')
router.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', users })
})

module.exports = router
