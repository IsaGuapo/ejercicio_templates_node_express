const express = require('express')
const app = express()
const port = 3001


app.set('view engine', 'pug');
app.set('views','./views');

//Para poder usar los archivos estaticos de la carpeta public//
app.use(express.static('public'));

/***********Enrutamiento *********** */
app.get('/', (req, res) => {
    res.render('home')
  })

app.get('/home', (req, res) => {
res.render('home')
})

app.get('/contacto', (req, res) => {
res.render('contacto')
})

app.get('/que', (req, res) => {
    res.render('que')
})

app.get('/quien', (req, res) => {
    res.render('quien')
})

app.get('/donde', (req, res) => {
    res.render('donde')
})


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })