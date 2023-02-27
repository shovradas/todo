import { Application } from "express";
import taskController from "./task/task.controller";
import userController from "./user/user.controller";

export function registerRoutes(app: Application){
    app.use(taskController.path, taskController.router)
    app.use(userController.path, userController.router)
}