import { executeQuery } from '../common/db'
import { Task, TaskDto, TaskStatus } from './task.type'
import { v4 as uuidv4 } from 'uuid'
import { CreateResponse, UpdateResponse } from '../common/type'

export async function getAllTasks(): Promise<Task[]>{
    const sql = 'SELECT * FROM tasks'
    console.log(sql)
    return executeQuery(sql)
}

export async function getTaskById(id: string): Promise<Task[]>{
    const sql = 'SELECT * FROM tasks WHERE id=?'
    console.log(sql)
    return executeQuery(sql, [id])
}

export async function createTask(task:TaskDto): Promise<CreateResponse>{
    const id = uuidv4()
    task.status = TaskStatus.TODO
    task.displayOrder = -1

    const sql = `INSERT INTO tasks SET ?`
    console.log(sql)

    await executeQuery(sql, {id, ...task})
    return {
        success: true,
        message: 'Task created successfully',
        id: id
    }
}
 
export async function updateTask(id:string, task:TaskDto): Promise<UpdateResponse>{
    const sql = `UPDATE tasks SET ? WHERE id=?`
    console.log(sql)

    await executeQuery(sql, [task, id])
    return {
        success: true,
        message: 'Task updated successfully',
        fields: {
            ...task
        }
    }
}

export async function deleteTask(id:string): Promise<void>{
    const sql = `DELETE FROM tasks WHERE id=?`
    console.log(sql)
    await executeQuery(sql, [id])    
}