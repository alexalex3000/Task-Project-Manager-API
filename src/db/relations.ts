import {relations} from "drizzle-orm";
import {projectSchema} from "./project.schema";
import {taskSchema} from "./task.schema";

export const projectRelations = relations(projectSchema, ({many}) => ({
    tasks: many(taskSchema)
}))

export const taskRelations = relations(taskSchema, ({one}) => ({
    project: one(projectSchema, {
        fields: [taskSchema.projectId],
        references: [projectSchema.id]
    })
}))