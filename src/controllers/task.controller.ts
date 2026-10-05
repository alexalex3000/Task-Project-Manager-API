import {NextFunction, Request, Response} from "express";
import {TaskService} from "../services/task.service";
import {Status, TaskType} from "../model/task.type";

interface ReqParams{
    projectId?: string;
    taskId?: string;
}

export class TaskController {
    getAllTasks = async (req: Request<ReqParams>,res: Response,next: NextFunction) => {
        try{
            const tasks = await TaskService.getTasks(req.params.projectId!)

            if(tasks.length == 0){
                res.json({
                    success: false,
                    message:"No projects found",
                }).status(404);
            }

            res.json({
                success: true,
                tasks,
            });
        } catch (e){
            next(e)
        }
    }

    addTaskTo = async (req: Request<ReqParams, {}, TaskType>, res: Response, next: NextFunction) => {
        try{
            const task = await TaskService.addTask(req.body, req.params.projectId!);

            if(!task){
                res.json({
                    success: false,
                    message:"Cant create task",
                }).status(500);
            }

            res.json({
                success: true,
                task,
            });
        } catch (e){
            next(e)
        }
    }

    getTask = async (req: Request<ReqParams>, res: Response, next: NextFunction) => {
        try{
            const task = await TaskService.getTaskById(req.params.taskId!, req.params.projectId!);

            if(!task){
                res.json({
                    success: false,
                    message:"No task found",
                }).status(404);
            }

            res.json({
                success: true,
                task,
            });
        } catch (e){
            next(e)
        }
    }

    changeStatus = async (req: Request<ReqParams, {}, {status: Status}>, res: Response, next: NextFunction) => {
        try{
            const task = await TaskService.changeTaskStatus(req.body.status, req.params.taskId!, req.params.projectId!);

            if(!task){
                res.json({
                    success: false,
                    message:"No task found",
                }).status(404);
            }

            res.json({
                success: true,
                task,
            });
        } catch (e){
            next(e)
        }
    }

    updateTask = async (req: Request<ReqParams, {}, TaskType>, res: Response, next: NextFunction) => {
        try{
            const task = await TaskService.updateTask(req.body, req.params.taskId!, req.params.projectId!);

            if(!task){
                res.json({
                    success: false,
                    message:"Cant update task",
                }).status(500);
            }

            res.json({
                success: true,
                task,
            });
        } catch (e){
            next(e)
        }
    }
    
    deleteTask = async(req: Request<ReqParams>, res: Response, next: NextFunction) => {
        try{
            const task = await TaskService.deleteTask(req.params.taskId!, req.params.projectId!);

            if(!task){
                res.json({
                    success: false,
                    message:"Cant find task with this Id!",
                }).status(500);
            }

            res.json({
                success: true,
                task,
            });
        } catch (e){
            next(e)
        }
    }
}