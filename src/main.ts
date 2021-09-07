import express from 'express'
import mongoose from 'mongoose'
import { configs } from '../config/config'
import { postRouter } from './routes/postRoutes'

const app = express()

app.use(express.json())

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = configs

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

// ***RECONNECT FUNCTION***
// *** ->> ***
// const connectManager = () => {
//     mongoose
//         .connect(mongoURL)
//         .then(() => console.log('success connect to db'))
//         .catch((e) => {
//             console.log('error connecting to db', e)
//             setTimeout(connectManager, 10000)
//         })
// }
// connectManager()

mongoose
    .connect(mongoURL)
    .then(() => console.log('success connect to db'))
    .then(() => {
        app.get('/', (_, res, next) => {
            res.send('<h1> 🚀 🚀 🚀EXPRESS APP GO! 🚀 🚀 🚀 </h1>')
            next()
        })

        app.use('/posts', postRouter)
    })
    .catch((e) => {
        console.log('error connecting to db', e)
    })

const PORT: number | string = process.env.PORT || 9909

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
