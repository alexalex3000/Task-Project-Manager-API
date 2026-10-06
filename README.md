# 📋 Task & Project Manager API

A robust RESTful API designed for managing projects and their associated nested tasks. Built with Express.js, TypeScript, Drizzle ORM, and PostgreSQL, fully containerized using Docker.

---

# 🛠 Tech Stack

- **Runtime & Language:** Node.js (v20+), TypeScript
- **Backend Framework:** Express.js (v5)
- **Database & ORM:** PostgreSQL, Drizzle ORM, Drizzle Kit
- **Validation:** Zod
- **Bundler:** tsup (esbuild-based)
- **Containerization:** Docker (Multi-stage build), Docker Compose

---

# 🔗 API Endpoints

Base URL: `/api/v1`

## 1. Projects (`/api/v1/projects`)

| Method | Endpoint | Description | Request Body (Zod) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/projects` | Retrieve all projects | — |
| `POST` | `/api/v1/projects` | Create a new project | `projectSchema` |
| `GET` | `/api/v1/projects/:projectId` | Retrieve a project by ID | — |
| `DELETE` | `/api/v1/projects/:projectId` | Delete a project by ID | `projectId` |

---

## 2. Tasks (`/api/v1/projects/:projectId/tasks`)

Nested endpoints using Express `mergeParams: true` to scope tasks under a specific project.

| Method | Endpoint | Description | Request Body (Zod) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/projects/:projectId/tasks` | Get all tasks for a project | — |
| `POST` | `/api/v1/projects/:projectId/tasks` | Add a new task to a project | `taskSchema` |
| `GET` | `/api/v1/projects/:projectId/tasks/:taskId` | Get task details by ID | — |
| `PATCH` | `/api/v1/projects/:projectId/tasks/:taskId` | Update task status | `patchTask` |
| `PUT` | `/api/v1/projects/:projectId/tasks/:taskId` | Update full task details | `taskSchema` |
| `DELETE` | `/api/v1/projects/:projectId/tasks/:taskId` | Delete a task | — |

## 3. Response types 

Task status types for Zod, Response, Drizzle ORM

type Status = "todo" | "in_progress" | "review" | "done"
type Priority = "low" | "medium" | "high"

Reposnes types for bad query: {
  success: boolean,
  message: string
} | {
  success: boolean,
  errors: Error
}

## 📮 API Testing with Postman

A pre-configured Postman collection is included in this repository to help you test all endpoints quickly.

### How to use:
1. Open [Postman](https://www.postman.com/).
2. Click **Import** (top left corner) and select the file:
   - [`postman_collection.json`](./postman_collection.json)
3. Set up the collection variables:
   - `baseUrl`: `http://localhost:3000/api/v1`
4. Run requests in sequential order.



This project is licensed under the MIT License. Copyright (c) Alexey Petrykevitch
