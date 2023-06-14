import express from 'express'
const router = express.Router()
import {getUsers, getUser} from '../controllers/api.controllers.js'

router.get('/', getUsers)
router.get('/:id', getUser)

export default router