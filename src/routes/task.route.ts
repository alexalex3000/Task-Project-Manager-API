import {Router} from "express";

const taskRouter = Router({mergeParams: true});

taskRouter
    .route("/")
    .get()
    .post()

taskRouter
    .route("/:taskId")
    .get()
    .patch()
    .put()
    .delete()