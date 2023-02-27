import { ActionType } from "../common/type";
import { validate } from "../common/validator";

const schema: any = {
    'create': {
        $$strict: true,
        firstName: {type: "string", empty: false, max: 255},
        lastName: {type: "string", empty: false, max: 255},
        password: {type: "string", empty: false}
    },
    'update': {
        $$strict: true,
        firstName: {type: "string", empty: false, max: 255, optional: true},
        lastName: {type: "string", empty: false, max: 255, optional: true},
        password: {type: "string", empty: false, optional: true}
    }
}

export async function validateUser(request: any, actionType: ActionType){
    const result:any = await validate(request, schema[actionType])
    return result === true? { data: request } : {error: result}
}