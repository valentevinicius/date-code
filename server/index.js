import path from 'path'
import fs from 'fs'
import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    const indexFile = path.resolve('./public/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('[ERRO]', err)
            return res.status(500).send('OOPS, BETTER LUCK NEXT TIME')
        }
        return res.send(data)
    })
})
app.use(express.static('./public'))

app.get('/dollar', (req, res) => {
    res.json({
        value: Math.random(),
        dataCotacao: new Date()
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})