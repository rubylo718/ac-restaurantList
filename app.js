import express from 'express'
import exphbs from 'express-handlebars'

import { createRequire } from "module" // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url) // construct the require method
const restaurantList = require('./restaurant.json') // use the require method

const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurantList})
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
