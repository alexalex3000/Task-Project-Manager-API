import {Router} from "express";

const projectRouter = Router();

projectRouter
    .route("/")
    .get()
    .post()

projectRouter
    .route("/:projectId")
    .get()
    .post()

export default projectRouter;