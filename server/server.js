import http from 'http'
import express from 'express'
import { handler } from '../build/handler.js'
import { wserver } from './socket.js'

const app = express()
const server = http.createServer(app)

wserver(server)

app.use(handler)

const port = process.env.PORT || 12121
server.listen(port, () => {
	console.log(`listening on ${port}`)
})
