import express, {Request, Response} from 'express'
import { getAllTasks, createTask } from './task.service'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const tasks = await getAllTasks()
    return res.json(tasks)
})

router.get('/:id', async (req: Request, res: Response) => {
    // TODO:
})

router.post('/', async (req: Request, res: Response) => {
    // TODO:
    
    // const { error, data } = await validateTask(req.body)
    // if(error) {
    //     return res.status(400).json(error)
    // }

    const task = await createTask(req.body)
    return res
        .header(`location: /${task.id}`)
        .status(201)
        .json(task)
})

router.patch('/:id', async (req: Request, res: Response) => {
    // TODO:
})

router.delete('/:id', async (req: Request, res: Response) => {
    // TODO:
})

export default {
    router,
    path: '/tasks'
}

