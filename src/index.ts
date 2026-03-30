import express from "express";
import itemRoutes from './routes/items'

const app = express()

app.use(express.json())

app.use('/items', itemRoutes)

app.get('/hello/:name', (req, res)=> {
    res.send(`Hello ${req.params.name}!`)
})

app.get('/', (req,res) => {
    res.send('API is running')
})

const PORT = 3000


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
