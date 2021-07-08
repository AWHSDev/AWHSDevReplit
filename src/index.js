import express from 'express'

const site = express()

site.get('/', (request, response) => {
  response.send('Hello World!')
})

site.listen(3000)