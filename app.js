const { response } = require('express')
const express = require('express')

const app = express()

/* app.use(express.static('public'))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs') */

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/views/homePage.html`)
})

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/aboutPage.html`)
})

app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/workPage.html`)
})

app.get('/gallery', (request, response) => {
    response.sendFile(`${__dirname}/views/galleryPage.html`)
})

app.listen(8001, () => {
    console.log('server started')
})
