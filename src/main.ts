import express from 'express'
import mongoose from 'mongoose'
const app = express()

mongoose
    .connect('mongodb://admin:password@code-camp-mongo/?authSource=admin')
    .then(() => console.log('success connect to db'))
    .catch((e) => console.log('error connecting to db', e))

app.get('/', (req, res) => {
    res.send('<h1> 🚀 🚀 🚀EXPRESS APP 🚀 🚀 🚀 </h1>')
})

const PORT: number | string = process.env.PORT || 7729

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
