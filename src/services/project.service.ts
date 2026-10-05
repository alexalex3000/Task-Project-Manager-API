import {db} from "../db/db";
import {projectSchema} from "../db/project.schema";
import {eq} from "drizzle-orm";
import {ProjectType} from "../model/project.type";

export class ProjectService {
    static async getAll(){
        const res = await db
            .select()
            .from(projectSchema)

        return res ?? null;
    }

    static async getById(id:string){
        const [res] = await db
            .select()
            .from(projectSchema)
            .where(eq(projectSchema.id, id))

        return res ?? null
    }

    static async addNewProject(data: ProjectType){
        const [res] = await db
            .insert(projectSchema)
            .values(data)
            .returning()

        return res
    }

    static async deleteProject(id: string){
        const [res] = await db
            .delete(projectSchema)
            .where(eq(projectSchema.id, id))
            .returning()

        return res.id
    }
}