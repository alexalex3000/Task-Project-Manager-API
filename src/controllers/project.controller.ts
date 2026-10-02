import {NextFunction, Request, Response} from "express";
import {z} from "zod";
import {combinedProjectSchema} from "../schemes/project.schema";

interface RequestParams {
    projectId?: string;
}

type RequestBody = z.infer<typeof combinedProjectSchema>;

export class ProjectController {
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try{
            console.log("All projects")
        } catch (e){
            next(e)
        }
    }

    getById = async (req: Request<RequestParams>, res: Response, next: NextFunction) => {
        try{
            console.log(`Get project with id: ${req.params.projectId}`)
        } catch (e){
            next(e)
        }
    }

    addProject = async (req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {
        try{
            console.log(`Add project ${req.body.title} at ${req.body.createdAt?.getTime()}`)
        } catch (e){
            next(e)
        }
    }

    deleteById = async (req: Request<{}, {}, RequestBody>, res: Response, next: NextFunction) => {
        try {
            console.log( `Delete project with id ${req.body.id}`)
        } catch (e){
            next(e)
        }
    }
}