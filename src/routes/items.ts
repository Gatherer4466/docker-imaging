import { Router } from 'express'
import { Item } from '../models/item'

const router = Router()

let items: Item[] = []
let globalIdCount = 1

router.post('/', (req, res) => {
    const newItem: Item = {
        id: globalIdCount++,
        name: req.body.name
    }

    items.push(newItem)

    res.status(201).json(newItem)
})