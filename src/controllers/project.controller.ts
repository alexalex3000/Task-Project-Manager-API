import {NextFunction, Request, Response} from "express";
import {ProjectService} from "../services/project.service";
import {ProjectType} from "../model/project.type";

interface RequestParams {
    projectId: string;
}

export class ProjectController {
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const projects = await ProjectService.getAll();

            if(projects.length == 0){
                res.json({success: false, message: "No projects found"}).status(404);
            }

            res.json({
                success: true,
                project: projects,
            }).status(200);
        } catch (e){
            next(e)
        }
    }

    getById = async (req: Request<RequestParams>, res: Response, next: NextFunction) => {
        try{
            const project = await ProjectService.getById(req.params.projectId)

            if(!project){
                res.json({success: false,message: "No project found."}).status(404);
            }

            res.json({
                success: true,
                project,
            }).status(200);
        } catch (e){
            next(e)
        }
    }

    addProject = async (req: Request<{}, {}, ProjectType>, res: Response, next: NextFunction) => {
        try{
            const addedProject = await ProjectService.addNewProject(req.body)

            if(!addedProject){
                throw new Error("Cant create a new project");
            }

            res.json({
                success: true,
                project: addedProject,
            }).status(200);
        } catch (e){
            next(e)
        }
    }

    deleteById = async (req: Request<RequestParams>, res: Response, next: NextFunction) => {
        try {
            const deletedProject = await ProjectService.deleteProject(req.params.projectId)

            if(!deletedProject){
                throw new Error("Cant delete a project")
            }

            res.json({
                success: true,
                projectId: deletedProject,
            }).status(200);
        } catch (e){
            next(e)
        }
    }
}