import { executeQuery } from '../common/db'
import { Task, TaskStatus } from './task.type'
import { v4 as uuidv4 } from 'uuid'

export async function getAllTasks(): Promise<Task[]>{
    const sql = 'SELECT * FROM tasks'
    return executeQuery(sql)
}

export async function createTask(task:Task): Promise<Task>{
    task.id = uuidv4()
    task.status = TaskStatus.TODO
    const sql = `INSERT INTO tasks SET ?`
    console.log(sql);
    await executeQuery(sql, task)
    return task
}