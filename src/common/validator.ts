import { ValidationError } from "./type";
import Validator from "fastest-validator";

export async function validate(target: any, schema: any): Promise<ValidationError|boolean>{
    const validator = new Validator()
    const result:any = validator.validate(target, schema)

    if(result === true) return true

    return {
        source: "TaskValidator",
        type: result[0].type,
        message: result[0].message
    }
}