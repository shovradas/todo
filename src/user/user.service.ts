import { executeQuery } from "../common/db";
import { CreateResponse, UpdateResponse } from "../common/type";
import { v4 as uuidv4 } from 'uuid'

export async function getAllUsers(): Promise<User[]>{
    const sql:string = 'SELECT * FROM users'
    console.log(sql)
    return executeQuery(sql)
}

export async function getUserById(id: string): Promise<User>{
    const sql:string = 'SELECT * FROM users WHERE id=?'
    console.log(sql)
    const result = await executeQuery(sql, [id])
    return result[0]
}

export async function createUser(userDto: UserDto): Promise<CreateResponse>{
    const id = uuidv4()
    const sql:string = 'INSERT INTO users SET ?'
    console.log(sql)
    await executeQuery(sql, {id, ...userDto})
    return {
        success: true,
        message: 'User created successfully',
        id: id
    }
}

export async function updateUser(id: string, userDto: UserDto): Promise<UpdateResponse>{
    const sql: string = 'UPDATE users SET ? WHERE id=?'
    console.log(sql)
    await executeQuery(sql, [userDto, id])
    return {
        success: true,
        message: 'User updated successfully',
        fields: userDto
    }
}

export async function deleteUser(id: string): Promise<void>{
    const sql:string = 'DELETE FROM users WHERE id=?'
    console.log(sql)
    await executeQuery(sql, [id])
}