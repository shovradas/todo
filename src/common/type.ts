export interface Response{
    success: boolean,
    message: string
}

export interface CreateResponse extends Response{
    id: string
}

export interface UpdateResponse extends Response{
    fields: any
}


export interface Error{    
    message: string
}

export interface ValidationError extends Error{
    source: string
    type: string
}

export interface ValidationResponse<T>{
    error?: ValidationError,
    data?: T
}

export enum ActionType{
    CREATE = 'create',
    UPDATE = 'update'
}