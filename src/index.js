import express from 'express'
import fetch from 'node-fetch'

const site = express()
const HTTPHeaders = Object.freeze({
  CONTENT_TYPE: 'Content-Type', ACCES_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin'
})

const ContentTypes = Object.freeze({
  CSV: 'text/csv'
})

site.head('/status', (request, response) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.status(204)
  response.send()
})

site.get('/status', (request, response) => {
  response.status(204)
})

site.get('/assets/dynamic/sheet.csv', async (request, response) => {

  response.header(HTTPHeaders.CONTENT_TYPE, ContentTypes.CSV)
  response.header(HTTPHeaders.ACCES_CONTROL_ALLOW_ORIGIN, 'https://awhs-dev.web.app')

  response.send(await (await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_mdCaM5E7DwTqY7h3lgylU_rG7QwoSTEIT--4KDWVdqo3ekMmIMwmJcipzCqwPmBhqTPvROXcaeMI/pub?output=csv')).text())
})

site.get('/', (request, response) => {
  response.send('Hello World!')
})

site.listen(3000)