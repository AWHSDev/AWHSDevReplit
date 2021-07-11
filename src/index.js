import express from 'express'

const site = express()

site.head('/status', (request, response) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.status(204)
  response.send()
})

site.get('/status', (request, response) => {
  response.status(204)
})

site.get('/', (request, response) => {
  response.send('Hello World!')
})

site.listen(3000)