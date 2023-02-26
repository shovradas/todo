import express, { Request, Response } from 'express'
import { registerRoutes } from './route'

const app = express()

app.use(express.json())
registerRoutes(app)

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Buddy")
})

export default app