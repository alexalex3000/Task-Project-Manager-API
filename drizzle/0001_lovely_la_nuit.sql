CREATE TYPE "public"."priority_enum" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."status_enum" AS ENUM('todo', 'in_progress', 'review', 'done');--> statement-breakpoint
CREATE TABLE "task" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"title" varchar(255) NOT NULL,
	"status" "status_enum" DEFAULT 'todo' NOT NULL,
	"priority" "priority_enum" DEFAULT 'medium' NOT NULL,
	"assigned_to" uuid NOT NULL,
	"due_date" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "project" RENAME COLUMN "name" TO "title";--> statement-breakpoint
ALTER TABLE "project" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "project" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "project" ADD COLUMN "description" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "project" ADD COLUMN "createdAt" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "task" ADD CONSTRAINT "task_project_id_project_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE cascade;