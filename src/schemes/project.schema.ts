import {z} from "zod";

export const projectSchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    ownerId: z.string().nonempty(),
    createdAt: z.date()
})

export const projectId = z.object({
    id: z.string().nonempty(),
})