import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1> 🚀 🚀 🚀EXPRESS APP 🚀 🚀 🚀 </h1>')
})

const PORT = process.env.PORT || 7729

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
