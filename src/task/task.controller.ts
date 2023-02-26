import express, {Request, Response} from 'express'
import { ActionType } from '../common/type'
import { getAllTasks, createTask, getTaskById, updateTask, deleteTask } from './task.service'
import { validateTask } from './task.validator'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const tasks = await getAllTasks()
    return res.json(tasks)
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const task = await getTaskById(id)
    return res.json(task)
})

router.post('/', async (req: Request, res: Response) => {   
    const { error, data } = await validateTask(req.body, ActionType.CREATE)
    
    if(error) return res.status(400).json(error)

    const task = await createTask(data!)
    return res
        .header('location', `/${task.id}`)
        .status(201)
        .json(task)
})

router.patch('/:id', async (req: Request, res: Response) => {       
    const {error, data} =  await validateTask(req.body, ActionType.UPDATE)
    
    if(error) return res.status(400).json(error)

    const task = await updateTask(req.params.id, data!)
    return res.json(task)
})

router.delete('/:id', async (req: Request, res: Response) => {
    await deleteTask(req.params.id)
    return res.sendStatus(204)
})

export default {
    router,
    path: '/tasks'
}

