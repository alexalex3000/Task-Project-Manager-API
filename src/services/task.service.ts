import {db} from "../db/db";
import {taskSchema} from "../db/task.schema";
import {Status, TaskType} from "../model/task.type";
import {and, eq} from "drizzle-orm";

export class TaskService {
    static async getTasks(projectId: string) {
        const res = await db
            .select()
            .from(taskSchema)
            .where(eq(taskSchema.projectId, projectId))

        return res
    }

    static async addTask(task: TaskType, projectId: string){
        const [res] = await db
            .insert(taskSchema)
            .values({
                ...task,
                projectId
            })
            .returning()

        return res
    }

    static async getTaskById(taskId: string, projectId: string){
        const [res] = await db
            .select()
            .from(taskSchema)
            .where(and(
                eq(taskSchema.id, taskId),
                eq(taskSchema.projectId, projectId)
            ))

        return res
    }

    static async changeTaskStatus(status: Status, taskId: string, projectId: string){
        const [res] = await db
            .update(taskSchema)
            .set({
                status
            })
            .where(and(
                eq(taskSchema.id, taskId),
                eq(taskSchema.projectId, projectId)
            ))
            .returning()

        return res
    }

    static async updateTask(task: TaskType, taskId: string, projectId: string){
        const [res] = await db
            .update(taskSchema)
            .set(task)
            .where(and(
                eq(taskSchema.id, taskId),
                eq(taskSchema.projectId, projectId)
            ))
            .returning()

        return res
    }

    static async deleteTask(taskId: string, projectId: string){
        const [res] = await db
            .delete(taskSchema)
            .where(and(
                eq(taskSchema.id, taskId),
                eq(taskSchema.projectId, projectId)
            ))
            .returning()

        return res
    }
}