import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { projectSchema } from "./project.schema";
export const statusEnum = pgEnum("status_enum", ["todo", "in_progress", "review", "done"]);
export const priorityEnum = pgEnum("priority_enum", ["low", "medium", "high"]);
export const taskSchema = pgTable("task", {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
        .notNull()
        .references(() => projectSchema.id, { onDelete: "cascade", onUpdate: "cascade" }),
    title: varchar("title", { length: 255 }).notNull(),
    status: statusEnum("status").default("todo").notNull(),
    priority: priorityEnum("priority").default("medium").notNull(),
    assignedTo: uuid("assigned_to").notNull(),
    dueDate: timestamp("due_date").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});
