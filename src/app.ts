import express from 'express';
import projectRouter from "./routes/project.route.js";

const app = express()

app.use(express.json())

app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/projects/:projectId/tasks", projectRouter);


export default app