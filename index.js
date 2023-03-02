require('dotenv').config()
var express = require('express');
var app = express();
const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/controller', require('./controllers/controller'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(process.env.PORT, console.log(process.env.PORT))