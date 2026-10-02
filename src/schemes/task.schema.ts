import {z} from "zod";

const statusEnum = z.enum(["todo", "in_progress", "review", "done"]);
const priority = z.enum(["low", "medium", "high"]);

export const taskSchema = z.object({
    projectId: z.string().nonempty(),
    title: z.string().nonempty(),
    status: statusEnum,
    priority: priority,
    assignedTo: z.string().nonempty(),
    dueDate: z.date(),
    createdAd: z.date(),
})

export const taskId = z.object({
    id: z.string().nonempty(),
})

export const patchTask = z.object({
    id: taskId.shape.id,
    status: statusEnum,
})