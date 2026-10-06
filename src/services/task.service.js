import { db } from "../db/db";
import { taskSchema } from "../db/task.schema";
import { and, eq } from "drizzle-orm";
export class TaskService {
    static async getTasks(projectId) {
        const res = await db
            .select()
            .from(taskSchema)
            .where(eq(taskSchema.projectId, projectId));
        return res;
    }
    static async addTask(task, projectId) {
        const [res] = await db
            .insert(taskSchema)
            .values({
            ...task,
            projectId
        })
            .returning();
        return res;
    }
    static async getTaskById(taskId, projectId) {
        const [res] = await db
            .select()
            .from(taskSchema)
            .where(and(eq(taskSchema.id, taskId), eq(taskSchema.projectId, projectId)));
        return res;
    }
    static async changeTaskStatus(status, taskId, projectId) {
        const [res] = await db
            .update(taskSchema)
            .set({
            status
        })
            .where(and(eq(taskSchema.id, taskId), eq(taskSchema.projectId, projectId)))
            .returning();
        return res;
    }
    static async updateTask(task, taskId, projectId) {
        const [res] = await db
            .update(taskSchema)
            .set(task)
            .where(and(eq(taskSchema.id, taskId), eq(taskSchema.projectId, projectId)))
            .returning();
        return res;
    }
    static async deleteTask(taskId, projectId) {
        const [res] = await db
            .delete(taskSchema)
            .where(and(eq(taskSchema.id, taskId), eq(taskSchema.projectId, projectId)))
            .returning();
        return res;
    }
}
