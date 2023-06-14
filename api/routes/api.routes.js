import express from 'express'
const router = express.Router()
import {getUsers, getUser, deleteUser, editUser, addUser} from '../controllers/api.controllers.js'

router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', editUser)
router.post('/', addUser)

export default router