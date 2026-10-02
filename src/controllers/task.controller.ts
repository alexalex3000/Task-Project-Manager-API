import {NextFunction, Request, Response} from "express";
import {z} from "zod";
import {combinedTaskSchema} from "../schemes/task.schema";

interface ReqParams{
    projectId?: string;
    taskId?: string;
}

type ReqBody = z.infer<typeof combinedTaskSchema>;

export class TaskController {
    getAllTasks = async (req: Request<ReqParams>,res: Response,next: NextFunction) => {
        try{
            console.log(`Get all tasks from ${req.params.projectId}`)
        } catch (e){
            next(e)
        }
    }

    addTaskTo = (req: Request<ReqParams>, res: Response, next: NextFunction) => {
        try{
            console.log(`Add task to ${req.params.projectId}`)
        } catch (e){
            next(e)
        }
    }

    getTask = (req: Request<ReqParams>, res: Response, next: NextFunction) => {
        try{
            console.log(`Get all task from ${req.params.projectId}. Task id: ${req.params.taskId}`)
        } catch (e){
            next(e)
        }
    }

    changeStatus = (req: Request<ReqParams, {}, ReqBody>, res: Response, next: NextFunction) => {
        try{
            console.log(`Change status to ${req.body.status} task from ${req.params.projectId}. Task id: ${req.params.taskId}`)
        } catch (e){
            next(e)
        }
    }

    updateTask = (req: Request<ReqParams, {}, ReqBody>, res: Response, next: NextFunction) => {
        try{
            console.log(`Task updated to task with id: ${req.body.id} task from ${req.params.projectId}.Id before update id: ${req.params.taskId}`)
        } catch (e){
            next(e)
        }
    }
    
    deleteTask = (req: Request<ReqParams>, res: Response, next: NextFunction) => {
        try{
            console.log(`Delete task with id ${req.params.taskId}. Project id: ${req.params.projectId}`)
        } catch (e){
            next(e)
        }
    }
}