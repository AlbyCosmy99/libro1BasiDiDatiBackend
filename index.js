import express, { json } from 'express'
import mongoose from 'mongoose';
import apiRouter from './routers/apiRouter.js';
import cors from 'cors'

const server = express()

const username = encodeURIComponent("AlbyCosmy99");
const password = encodeURIComponent("onJ20KTO7cfg6GzO");
const database = "BasiDiDatiUNI"
const mongoUri = `mongodb+srv://${username}:${password}@cluster0.6fepqnw.mongodb.net/${database}?retryWrites=true&w=majority&ssl=true`

const port = 3000

server.use(cors())
server.use(express.json())

server.use('/api', apiRouter)

mongoose.connect(mongoUri)
.then(() => {
    server.listen(port, () => {
        console.log('server running...')
    })
})
.catch(() => {
    console.log('error while connecting to db')
    process.exit(1)
})
