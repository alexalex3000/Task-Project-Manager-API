import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
export const projectSchema = pgTable("project", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    createdAt: timestamp().notNull(),
});
