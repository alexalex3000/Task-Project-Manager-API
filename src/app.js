import express from 'express';
import projectRouter from "./routes/project.route.js";
import { errorMiddlware } from "./middleware/error.middleware";
import taskRouter from "./routes/task.route";
const app = express();
app.use(express.json());
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/projects/:projectId", taskRouter);
app.use((req, res) => {
    res.status(404).send({ error: `Path ${req.originalUrl} not found
    ` });
});
app.use(errorMiddlware);
export default app;
