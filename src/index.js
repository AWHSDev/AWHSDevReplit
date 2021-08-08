import express from 'express'
import fetch from 'node-fetch'

const site = express()
const HTTPHeaders = Object.freeze({
  CONTENT_TYPE: 'Content-Type', ACCES_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin'
})

const ContentTypes = Object.freeze({
  CSV: 'text/csv',
  HTML: 'text/html'
})

site.head('/status', (request, response) => {
  response.header("Access-Control-Allow-Origin", "*")
  response.status(204)
  response.send()
})

site.get('/status', (request, response) => {
  response.status(204)
})

site.get('/assets/dynamic/table.html', async (request, response) => {

  response.header(HTTPHeaders.CONTENT_TYPE, ContentTypes.HTML)
  response.header(HTTPHeaders.ACCES_CONTROL_ALLOW_ORIGIN, 'https://awhs-dev.web.app')

  response.send(await (await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQTvwwJ86OAu4_XHJhqgpUgkubscZ03FrGUjvZ20m3-_GyjCvadbe_YYFXsU0g1G2fCN3EAPuH2tp2h/pubhtml')).text())
})

site.get('/', (request, response) => {
  response.send('Hello World!')
})

site.listen(3000)