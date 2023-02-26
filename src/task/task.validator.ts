import { ActionType, ValidationResponse } from "../common/type";
import { validate } from "../common/validator";
import { TaskDto } from "./task.type";

const schema: any = {
    create: { 
        $$strict: true,
        title: {type: "string", empty: false},
        notes: {type: "string", optional: true, empty: false},
        displayOrder: {type: "number", optional: true, positive: true, integer: true},
        dueAt: {type: "string", optional: true, empty: false, max:128},
        status: {type: "string", optional: true, empty: false, max:128},
    },
    update: {
        $$strict: true,
        title: {type: "string", optional: true, empty: false},
        notes: {type: "string", optional: true, empty: false},
        displayOrder: {type: "number", optional: true, positive: true, integer: true},
        dueAt: {type: "string", optional: true, empty: false, max:128},
        status: {type: "string", optional: true, empty: false, max:128},
    }
}

export async function validateTask(request:any, actionType: ActionType): Promise<ValidationResponse<TaskDto>>{
    const result: any = await validate(request, schema[actionType])
    return result === true ?  { data: request }: { error: result }
}