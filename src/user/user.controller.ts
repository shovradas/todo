import express, { Request, Response } from 'express'

import { ActionType } from '../common/type'
import { getAllUsers, getUserById, deleteUser, createUser, updateUser } from './user.service'
import { validateUser } from './user.validator'

const router = express.Router()
const path = '/users'

router.get('/', async (req: Request, res: Response) => {
    const users = await getAllUsers()
    return res.json(users)
})

router.get('/:id', async (req: Request, res: Response) => {
    const user = await getUserById(req.params.id)
    return res.json(user)
})

router.post('/', async (req: Request, res: Response) => {
    const {error, data} = await validateUser(req.body, ActionType.CREATE)

    if(error) return res.sendStatus(400).json(error)

    const userCreateResponse = await createUser(data)
    return res
        .header('location', `${path}/${userCreateResponse.id}`)
        .status(201)
        .json(userCreateResponse)
})

router.patch('/:id', async (req: Request, res: Response)=> {
    const {error, data} = await validateUser(req.body, ActionType.UPDATE)

    if(error) return res.status(400).json(error)

    const userUpdateResponse = await updateUser(req.params.id, data)
    return res.json(userUpdateResponse)
})

router.delete('/:id', async (req: Request, res: Response)=> {
    await deleteUser(req.params.id)
    return res.sendStatus(204)
})

export default { router, path }