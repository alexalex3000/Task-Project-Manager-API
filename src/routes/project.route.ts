import {Router} from "express";
import {ProjectController} from "../controllers/project.controller";
import {validateBody} from "../middleware/validate.moddleware";
import {projectId, projectSchema} from "../schemes/project.schema";

const projectRouter = Router();

const projectController = new ProjectController();

projectRouter
    .route("/")
    .get(projectController.getAll)
    .post(
        validateBody(projectSchema),
        projectController.addProject
    )

projectRouter
    .route("/:projectId")
    .get(projectController.getById)
    .delete(
        validateBody(projectId),

    )

export default projectRouter;