import * as mysql from 'mysql'

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT ?? '3306'),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "todo_db"
})

export function executeQuery(sql:string, params: any = undefined): Promise<any[]> {
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (err, result) => {
            return err? reject(err): resolve(result)
        })
    })
}