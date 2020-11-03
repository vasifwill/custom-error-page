const express = require('express')

const app = express()



app.get('/', (request, response) => {
    response.send('hello')
})

app.use(express.static('public'))

app.listen(1337)

