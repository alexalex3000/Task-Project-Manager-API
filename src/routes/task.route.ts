import {Router} from "express";
import {TaskController} from "../controllers/task.controller";
import {validateBody} from "../middleware/validate.moddleware";
import {patchTask, taskSchema} from "../schemes/task.schema";

const taskRouter = Router({mergeParams: true});

const taskController = new TaskController();

taskRouter
    .route("/tasks")
    .get(taskController.getAllTasks)
    .post(
        validateBody(taskSchema),
        taskController.addTaskTo
    )

taskRouter
    .route("/tasks/:taskId")
    .get(taskController.getTask)
    .patch(
        validateBody(patchTask),
        taskController.changeStatus
    )
    .put(
        validateBody(taskSchema),
        taskController.updateTask
    )
    .delete(
        taskController.deleteTask
    )

export default taskRouter;