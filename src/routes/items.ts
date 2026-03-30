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


router.get('/:id', (req, res) => {
    const item = items.find(i => i.id === Number(req.params.id))

    if (!item) 
        return res.status(404).json({message: 'Item not found'})

    res.json(item)
})



router.put('/:id', (req,res)=> {
    const item = items.find(i => i.id === Number(req.params.id))

    if (!item) 
        return res.status(404).json({message: 'Item not found'})

  item.name = req.body.name
  res.json(item)
})


router.delete('/:id', (req,res) => {
    const exists = items.some(i => i.id === Number(req.params.id))

    if (!exists) 
        return res.status(404).json({message: 'Item not found'})

    items = items.filter(i => i.id !== Number(req.params.id))
    res.status(204).send()
})

export default router