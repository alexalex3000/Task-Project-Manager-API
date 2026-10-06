import app from "./app";
import dotenv from "dotenv";
import postgres from "postgres";
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';

dotenv.config();

const port = process.env.PORT || 3000;

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });

async function startServer() {
    try{
        console.log("Running migrations...");
        await migrate(drizzle(migrationClient), { migrationsFolder: './drizzle' });
        console.log('Migrations applied successfully!');

        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        })
    } catch (e){
        console.log("Failed to run migrations")
    }
}

startServer();