export type Status = "todo" | "in_progress" | "review" | "done"
export type Priority = "low" | "medium" | "high"


export interface TaskType {
    id: string,
    title: string,
    status: Status,
    priority: Priority,
    assignedTo: string,
    dueDate: Date,
    createdAt: Date,
}