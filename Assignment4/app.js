const express = require('express')

const PORT = 5000
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

const homeRoutes = require('./routes/add-product').router
const userRoutes = require('./routes/users')

app.use(homeRoutes)
app.use(userRoutes)
app.use((req, res, next) => {
  res.render('404', { pageTitle: 'Not found' })
})
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})
