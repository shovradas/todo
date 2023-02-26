export enum TaskStatus{
    TODO = 'todo',
    IN_PROGRESS = 'in_progress',
    DONE = 'done'
}

export interface Task{
    id: string,
    title: string,
    notes?: string,
    displayOrder: number,
    dueAt: string,
    status: string
}

export interface TaskDto{
}