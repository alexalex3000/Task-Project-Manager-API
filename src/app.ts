import express from 'express';
import projectRouter from "./routes/project.route.js";
import {errorMiddlware} from "./middleware/error.middleware";

const app = express()

app.use(express.json())

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/projects/:projectId/tasks", projectRouter);

app.use(errorMiddlware)

export default app