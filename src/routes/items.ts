import { Router } from 'express'
import { Item } from '../models/item'

const router = Router()

let items: Item[] = []
let globalIdCount = 1