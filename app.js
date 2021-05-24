
const express = require('express')

const app = express()
const port = 3000


//public
app.use(express.static('public')) //static assets, css, js, images, videos

app.set('view engine', 'ejs')



//routes

app.use(require('./routes'))

app.use(require('./views'))


app.listen(3000, ()=>{
    console.log(`Server is running on port ${port}`);
})